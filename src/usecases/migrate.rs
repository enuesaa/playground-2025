use anyhow::Result;
use migration::{Migrator, MigratorTrait};
use sea_orm::DatabaseConnection;

pub async fn migrate(db: &DatabaseConnection) -> Result<()> {
    Migrator::up(db, None).await?;
    Ok(())
}
