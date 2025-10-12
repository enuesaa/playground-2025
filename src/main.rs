mod models;
mod usecases;
mod subshell;

use anyhow::Result;
use sea_orm::{Database, DatabaseConnection};
use clap::{Parser, Subcommand};

use crate::usecases::{cakes, migrate};

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
    /// Run subshell
    Start,
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Migrate => {
            if let Ok(db) = connectdb().await {
                let ret = migrate::migrate(&db).await;
                print!("{:?}\n", ret);
                let ret = cakes::create(&db).await;
                print!("{:?}\n", ret);
                let ret = cakes::find_all(&db).await;
                print!("{:?}\n", ret);
            }
        },
        Commands::Start => {
            subshell::run();
        },
    }
    Ok(())
}

async fn connectdb() -> Result<DatabaseConnection> {
    let db = Database::connect("sqlite://testdata/data.db?mode=rwc").await?;
    Ok(db)
}
