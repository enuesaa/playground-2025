mod models;
mod subshell;
mod usecases;

use anyhow::Result;
use clap::{Parser, Subcommand};
use sea_orm::{Database, DatabaseConnection};
use std::time::Duration;
use sysinfo::System;

use crate::usecases::{cakes, migrate};

#[derive(Parser)]
#[command(version)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Run subshell
    Start,
    /// Cpu
    Cpu,
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        // Commands::Migrate => {
        //     if let Ok(db) = connectdb().await {
        //         let ret = migrate::migrate(&db).await;
        //         print!("{:?}\n", ret);
        //         let ret = cakes::create(&db).await;
        //         print!("{:?}\n", ret);
        //         let ret = cakes::find_all(&db).await;
        //         print!("{:?}\n", ret);
        //     }
        // }
        Commands::Start => {
            subshell::run();
        }
        Commands::Cpu => {
            print_cpu().await;
        }
    }
    Ok(())
}

async fn connectdb() -> Result<DatabaseConnection> {
    let db = Database::connect("sqlite://testdata/data.db?mode=rwc").await?;
    Ok(db)
}

async fn print_cpu() {
    let mut sys = System::new_all();

    loop {
        sys.refresh_cpu_usage();
        let cpus = sys.cpus();

        let total_usage: f32 = cpus.iter().map(|c| c.cpu_usage()).sum::<f32>() / cpus.len() as f32;
        println!("CPU使用率: {:.2}%", total_usage);

        // for (i, cpu) in cpus.iter().enumerate() {
        //     println!("  CPU{}: {:.2}%", i, cpu.cpu_usage());
        // }
        tokio::time::sleep(Duration::from_secs(1)).await;
    }
}
