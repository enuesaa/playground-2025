use anyhow::Result;
use chrono::NaiveDateTime;
use sqlx::{MySqlPool, mysql::MySqlPoolOptions};
use serde::Deserialize;

struct Note {
    id: i64,
    description: String,
    created_at: NaiveDateTime,
    updated_at: NaiveDateTime,
}
impl Default for Note {
    fn default() -> Self {
        let now = chrono::Utc::now().naive_utc();
        Self {
            id: 0,
            description: "".into(),
            created_at: now,
            updated_at: now,
        }
    }
}

#[derive(Debug, Deserialize)]
struct Config {
    database_url: String,
}

#[tokio::main]
async fn main() -> Result<()> {
    dotenv::dotenv()?;
    let config = envy::from_env::<Config>()?;

    let dbpool = MySqlPoolOptions::new()
        .max_connections(5)
        .connect(&config.database_url)
        .await?;

    let mut note = Note {
        description: "aaa".to_string(),
        ..Default::default()
    };
    create_note(&dbpool, &mut note).await?;

    note.description = "bbb".to_string();
    update_note(&dbpool, &mut note).await?;

    let notes = list_notes(&dbpool).await?;

    for note in notes {
        print!("id: {}\n", note.id);
        print!("description: {}\n", note.description);
        print!("created_at: {}\n", note.created_at);
        print!("updated_at: {}\n", note.updated_at);
        print!("---\n");
    }

    Ok(())
}

async fn create_note(dbpool: &MySqlPool, note: &mut Note) -> Result<()> {
    let id = sqlx::query!(
        "INSERT INTO notes ( description ) VALUES ( ? )",
        note.description
    )
    .execute(dbpool)
    .await?
    .last_insert_id();
    note.id = id as i64;

    Ok(())
}

async fn update_note(dbpool: &MySqlPool, note: &mut Note) -> Result<()> {
    sqlx::query!(
        "UPDATE notes SET description = ? WHERE id = ?",
        note.description,
        note.id,
    )
    .execute(dbpool)
    .await?;

    Ok(())
}

async fn list_notes(dbpool: &MySqlPool) -> Result<Vec<Note>> {
    let rows = sqlx::query_as!(
        Note,
        "SELECT id, description, created_at, updated_at FROM notes ORDER BY id"
    )
    .fetch_all(dbpool)
    .await?;

    Ok(rows)
}
