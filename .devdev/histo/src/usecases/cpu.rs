use anyhow::Result;
use sea_orm::ActiveValue::Set;
use std::{path::Path, time::Duration};
use sysinfo::{Pid, ProcessRefreshKind, ProcessesToUpdate, System};
use users::get_user_by_uid;

use crate::models;
use crate::usecases::db;
use crate::usecases::dbpstats;

struct ProcessStat {
    pid: u32,
    name: String,
    cpu: u32,
    cputime: u32,
    memory: u32,
    cmds: String,
    cwd: String,
    status: String,
    group_id: String,
    parent_id: Option<Pid>,
    user_id: String,
}

pub async fn print_cpu() -> Result<()> {
    let stats = get_cpustats().await?;

    let db = db::connect().await?;
    db::migrate(&db).await?;

    for s in stats.iter().take(10) {
        let pstat = models::pstats::ActiveModel {
            pid: Set(s.pid),
            name: Set(s.name.to_string()),
            command: Set(Some(s.cmds.to_string())),
            cpu_usage: Set(Some(s.cpu)),
            cpu_time: Set(Some(s.cputime)),
            memory_usage: Set(Some(s.memory)),
            cwd: Set(Some(s.cwd.to_string())),
            status: Set(Some(s.status.to_string())),
            //         s.parent_id,
            //         s.user_id,
            ..Default::default()
        };
        let id = dbpstats::create(&db, pstat).await?;
        print!("created: {}\n", id);
    }
    Ok(())
}

async fn get_cpustats() -> Result<Vec<ProcessStat>> {
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
        let stat = ProcessStat {
            pid: pid.as_u32(),
            name: process.name().to_str().unwrap_or("none").to_string(),
            cpu: process.cpu_usage() as u32,
            cputime: process.accumulated_cpu_time() as u32,
            memory: process.memory() as u32,
            cmds: format!("{:?}", process.cmd()),
            cwd: process
                .cwd()
                .unwrap_or(Path::new("/"))
                .to_str()
                .unwrap_or("")
                .into(),
            status: format!("{:?}", process.status()),
            group_id: format!("{:?}", process.group_id()),
            parent_id: process.parent(),
            user_id: format!("{:?}", process.user_id()),
        };
        stats.push(stat);
    }
    stats.sort_by(|a, b| b.cpu.cmp(&a.cpu));

    Ok(stats)
}

fn get_user() {
    if let Some(user) = get_user_by_uid(501) {
        print!("{:?}\n", user.name());
    }
}
