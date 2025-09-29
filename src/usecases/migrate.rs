use anyhow::Result;
use sea_orm::DatabaseConnection;
use migration::{Migrator, MigratorTrait};

pub async fn migrate(db: &DatabaseConnection) -> Result<()> {
    Migrator::up(db, None).await?;
    Ok(())
}
