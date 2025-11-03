mod models;
mod usecases;

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
    /// write
    Write,
    /// Cpu
    Cpu,
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Write => usecases::write::write().await?,
        Commands::Cpu => usecases::cpu::print_cpu().await?,
    }
    Ok(())
}
