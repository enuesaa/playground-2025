use anyhow::Result;
use sysinfo::{ProcessRefreshKind, ProcessesToUpdate, System};
use std::time::Duration;

pub async fn print_cpu() -> Result<()> {
    let mut sys = System::new_all();

    // First refresh
    sys.refresh_processes_specifics(
        ProcessesToUpdate::All,
        true,
        ProcessRefreshKind::everything(),
    );

    // Wait a bit to let CPU usage be calculated
    tokio::time::sleep(Duration::from_secs(1)).await;

    // Second refresh
    sys.refresh_processes_specifics(
        ProcessesToUpdate::All,
        true,
        ProcessRefreshKind::everything(),
    );

    let mut processes: Vec<_> = sys.processes().values().collect();
    
    // Sort by CPU usage descending
    processes.sort_by(|a, b| b.cpu_usage().partial_cmp(&a.cpu_usage()).unwrap_or(std::cmp::Ordering::Equal));

    println!("{:<8} {:<30} {:<10} {:<10}", "PID", "Name", "CPU %", "Memory");
    
    for process in processes.iter().take(10) {
        println!("{:<8} {:<30} {:<10.2} {:<10}", 
            process.pid(), 
            process.name().to_str().unwrap_or("unknown"), 
            process.cpu_usage(), 
            process.memory()
        );
    }

    Ok(())
}
