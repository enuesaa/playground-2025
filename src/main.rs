mod models;
mod usecases;
mod cpustats;

use anyhow::Result;
use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(version)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// run
    Run,
    /// Cpu
    Cpu,
    /// Cpu2
    Cpu2,
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Run => run().await?,
        Commands::Cpu => usecases::cpu::print_cpu().await?,
        Commands::Cpu2 => cpustats::print_cpu().await?,
    }
    Ok(())
}

async fn run() -> Result<()> {
    if let Ok(db) = usecases::db::connect().await {
        let ret = usecases::db::migrate(&db).await;
        print!("{:?}\n", ret);
    };
    Ok(())
}
