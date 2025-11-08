use anyhow::Result;
use migration::{Migrator, MigratorTrait};
use sea_orm::{Database, DatabaseConnection};

pub async fn connect() -> Result<DatabaseConnection> {
    let db = Database::connect("sqlite://data.db?mode=rwc").await?;
    Ok(db)
}

pub async fn migrate(db: &DatabaseConnection) -> Result<()> {
    Migrator::up(db, None).await?;
    Ok(())
}

pub async fn write() -> Result<()> {
    if let Ok(db) = connect().await {
        let ret = migrate(&db).await;
        print!("{:?}\n", ret);
    };
    Ok(())
}
