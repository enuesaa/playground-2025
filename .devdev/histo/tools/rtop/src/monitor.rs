use sysinfo::System;

pub struct SystemMonitor {
    system: System,
}

impl SystemMonitor {
    pub fn new() -> Self {
        let mut system = System::new_all();
        system.refresh_all();
        Self { system }
    }

    pub fn update(&mut self) {
        self.system.refresh_all();
    }

    pub fn get_global_cpu_usage(&self) -> f32 {
        self.system.global_cpu_info().cpu_usage()
    }

    pub fn get_memory_usage(&self) -> (u64, u64) {
        (self.system.used_memory(), self.system.total_memory())
    }



    pub fn get_uptime(&self) -> u64 {
        System::uptime()
    }

    pub fn get_load_average(&self) -> String {
        let load = System::load_average();
        format!("{:.2} {:.2} {:.2}", load.one, load.five, load.fifteen)
    }

    pub fn get_processes(&self) -> Vec<ProcessInfo> {
        let mut processes: Vec<ProcessInfo> = self.system.processes().iter().map(|(pid, process)| {
            ProcessInfo {
                pid: pid.as_u32(),
                name: process.name().to_string(),
                cpu: process.cpu_usage(),
                mem: process.memory(),
                user: process.user_id().map(|u| u.to_string()).unwrap_or_else(|| "N/A".to_string()),
            }
        }).collect();

        // Sort by CPU usage descending
        processes.sort_by(|a, b| b.cpu.partial_cmp(&a.cpu).unwrap_or(std::cmp::Ordering::Equal));
        processes.truncate(50); // Limit to top 50 for performance
        processes
    }
}

pub struct ProcessInfo {
    pub pid: u32,
    pub name: String,
    pub cpu: f32,
    pub mem: u64,
    pub user: String,
}
