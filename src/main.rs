mod models;

use anyhow::Result;
use sea_orm::{ActiveValue::Set, Database, DatabaseConnection};
use sea_orm::entity::prelude::*;
use migration::{Migrator, MigratorTrait};

#[tokio::main]
async fn main() {
    if let Ok(db) = connectdb().await {
        let ret = migrate(&db).await;
        print!("{:?}\n", ret);
        let ret = create_a_cake(&db).await;
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

async fn create_a_cake(db: &DatabaseConnection) -> Result<()> {
    let cake = models::cakes::ActiveModel {
        title: Set("hello".to_owned()),
        ..Default::default()
    };
    let res = models::cakes::Entity::insert(cake).exec(db).await?;
    print!("aaa{:?}\n", res);

    Ok(())
}
