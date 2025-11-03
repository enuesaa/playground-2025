use anyhow::Result;
use sea_orm::{Database, DatabaseConnection};
use migration::{Migrator, MigratorTrait};

use crate::usecases::cakes;

pub async fn connect() -> Result<DatabaseConnection> {
    let db = Database::connect("sqlite://testdata/data.db?mode=rwc").await?;
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
        let ret = cakes::create(&db).await;
        print!("{:?}\n", ret);
        let ret = cakes::find_all(&db).await;
        print!("{:?}\n", ret);
    };
    Ok(())
}
