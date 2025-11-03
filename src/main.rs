mod models;
mod usecases;

use crate::usecases::{cpu, write};
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
    /// db
    Write,
    /// Cpu
    Cpu,
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Write => {
            write::write().await?;
        }
        Commands::Cpu => {
            cpu::print_cpu().await?;
        }
    }
    Ok(())
}
