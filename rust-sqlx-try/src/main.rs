use sqlx::postgres::PgPoolOptions;

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect("postgres://testuser:testpass@localhost:5432/testdb")
        .await?;

    let rows = sqlx::query_as::<_, (i32, String, String)>("SELECT id, name, email FROM users")
        .fetch_all(&pool)
        .await?;

    for row in rows {
        let (id, name, email) = row;
        println!("{}: {} ({})", id, name, email);
    }

    // .sqlx 配下を見て type を判別しているっぽい
    let rows = sqlx::query!("SELECT id, name, email FROM users")
        .fetch_all(&pool)
        .await?;

    for row in rows {
        println!("{}: {} ({})", row.id, row.name, row.email);
    }

    Ok(())
}
