use anyhow::Result;
use sysinfo::{ProcessRefreshKind, ProcessesToUpdate, System};
use std::time::Duration;

pub async fn print_cpu() -> Result<()> {
    let mut sys = System::new_all();

    // Initial refresh
    sys.refresh_processes_specifics(
        ProcessesToUpdate::All,
        true,
        ProcessRefreshKind::everything(),
    );

    loop {
        // Wait a bit to let CPU usage be calculated
        tokio::time::sleep(Duration::from_secs(1)).await;

        // Refresh
        sys.refresh_processes_specifics(
            ProcessesToUpdate::All,
            true,
            ProcessRefreshKind::everything(),
        );

        let mut processes: Vec<_> = sys.processes().values().collect();
        
        // Sort by CPU usage descending
        processes.sort_by(|a, b| b.cpu_usage().partial_cmp(&a.cpu_usage()).unwrap_or(std::cmp::Ordering::Equal));

        // Clear screen and move cursor to top-left
        print!("\x1B[2J\x1B[1;1H");

        println!("{:<8} {:<30} {:<10} {:<10}", "PID", "Name", "CPU %", "Memory");
        
        for process in processes.iter().take(10) {
            println!("{:<8} {:<30} {:<10.2} {:<10}", 
                process.pid(), 
                process.name().to_str().unwrap_or("unknown"), 
                process.cpu_usage(), 
                process.memory()
            );
        }
    }
}
