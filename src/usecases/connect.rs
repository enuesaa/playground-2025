use anyhow::Result;
use sea_orm::{Database, DatabaseConnection};

pub async fn connect() -> Result<DatabaseConnection> {
    let db = Database::connect("sqlite://testdata/data.db?mode=rwc").await?;
    Ok(db)
}
