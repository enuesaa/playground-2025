mod models;

use anyhow::Result;
use sea_orm::{Database, DatabaseConnection};
use migration::{Migrator, MigratorTrait};

#[tokio::main]
async fn main() {
    if let Ok(db) = connectdb().await {
        let ret = migrate(&db).await;
        print!("{:?}\n", ret);
    }
}

async fn migrate(db: &DatabaseConnection) -> Result<()> {
    Migrator::up(db, None).await?;
    Ok(())
}

async fn connectdb() -> Result<DatabaseConnection> {
    let db = Database::connect("sqlite://testdata/data.db?mode=rwc").await?;

    Ok(db)
}
