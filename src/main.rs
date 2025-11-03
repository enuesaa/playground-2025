mod models;
mod subshell;
mod usecases;

use anyhow::Result;
use clap::{Parser, Subcommand};
// use sea_orm::{Database, DatabaseConnection};
use std::time::Duration;
use sysinfo::{ProcessRefreshKind, ProcessesToUpdate, System};

// use crate::usecases::{cakes, migrate};

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

// async fn connectdb() -> Result<DatabaseConnection> {
//     let db = Database::connect("sqlite://testdata/data.db?mode=rwc").await?;
//     Ok(db)
// }

struct ProcessStat {
    pid: u32,
    name: String,
    cpu: u32,
    memory: u32,
    cmds: String,
}

async fn print_cpu() {
    let mut sys = System::new_all();

    sys.refresh_processes_specifics(
        ProcessesToUpdate::All,
        true,
        ProcessRefreshKind::everything(),
    );
    tokio::time::sleep(Duration::from_secs(1)).await;

    sys.refresh_processes_specifics(
        ProcessesToUpdate::All,
        true,
        ProcessRefreshKind::everything(),
    );

    let mut stats = Vec::<ProcessStat>::new();

    for (pid, process) in sys.processes() {
        // println!("PID {}: {} {:?} {:?} {:?}", pid, process.name().to_str().unwrap(), process.cmd(), process.cpu_usage(), process.memory());

        let stat = ProcessStat{
            pid: pid.as_u32(),
            name: process.name().to_str().unwrap_or("none").to_string(),
            cpu: process.cpu_usage() as u32,
            memory: process.memory() as u32,
            cmds: format!("{:?}", process.cmd()),
        };
        stats.push(stat);
    }
    stats.sort_by(|a, b| b.cpu.cmp(&a.cpu));

    for s in stats.iter().take(10) {
        println!("{} {}% {} {}", s.pid, s.cpu, s.memory, s.name);
    }


    // sys.refresh_processes_specifics(
    //     ProcessesToUpdate::All,
    //     true,
    //     ProcessRefreshKind::everything(),
    // );

    // for (pid, process) in sys.processes() {
    //     println!("PID {}: {} {:?} {:?}", pid, process.name().to_str().unwrap(), process.cmd(), process.cpu_usage());
    // }
    // loop {
    //     sys.refresh_cpu_usage();
    //     let cpus = sys.cpus();

    //     let total_usage: f32 = cpus.iter().map(|c| c.cpu_usage()).sum::<f32>() / cpus.len() as f32;
    //     println!("CPU使用率: {:.2}%", total_usage);

    //     // for (i, cpu) in cpus.iter().enumerate() {
    //     //     println!("  CPU{}: {:.2}%", i, cpu.cpu_usage());
    //     // }
    //     tokio::time::sleep(Duration::from_secs(1)).await;
    // }
}
