mod models;

use anyhow::Result;
use sea_orm::QueryOrder;
use sea_orm::{ActiveValue::Set, Database, DatabaseConnection};
use sea_orm::entity::prelude::*;
use migration::{Migrator, MigratorTrait};
use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(version)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Run database migrations
    Migrate,
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Migrate => {
            if let Ok(db) = connectdb().await {
                let ret = migrate(&db).await;
                print!("{:?}\n", ret);
                let ret = create_a_cake(&db).await;
                print!("{:?}\n", ret);
                let ret = find_cakes(&db).await;
                print!("{:?}\n", ret);
            }
        }
    }
    Ok(())
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
    print!("id{:?}\n", res);
    Ok(())
}

async fn find_cakes(db: &DatabaseConnection) -> Result<()> {
    let cakes: Vec<models::cakes::Model> = models::cakes::Entity::find()
        .order_by_asc(models::cakes::Column::Id)
        .all(db)
        .await?;
    print!("cakes{:?}\n", cakes);

    Ok(())
}
