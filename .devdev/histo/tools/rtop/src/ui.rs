use ratatui::{
    layout::{Constraint, Direction, Layout, Rect},
    style::{Color, Style},
    widgets::{Block, Borders, Gauge, Paragraph, Table, Row, Cell},
    Frame,
};

use crate::monitor::SystemMonitor;

pub fn draw(f: &mut Frame, monitor: &SystemMonitor) {
    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints(
            [
                Constraint::Length(7), // Header
                Constraint::Min(0),    // Process List
            ]
            .as_ref(),
        )
        .split(f.size());

    draw_header(f, monitor, chunks[0]);
    draw_process_list(f, monitor, chunks[1]);
}

fn draw_header(f: &mut Frame, monitor: &SystemMonitor, area: Rect) {
    let chunks = Layout::default()
        .direction(Direction::Horizontal)
        .constraints(
            [
                Constraint::Percentage(33),
                Constraint::Percentage(33),
                Constraint::Percentage(33),
            ]
            .as_ref(),
        )
        .split(area);

    let block = Block::default().borders(Borders::ALL).title("System");
    f.render_widget(block, area);

    // CPU Gauge
    let cpu_usage = monitor.get_global_cpu_usage();
    let cpu_gauge = Gauge::default()
        .block(Block::default().title("CPU").borders(Borders::ALL))
        .gauge_style(Style::default().fg(Color::Green))
        .percent(cpu_usage as u16);
    f.render_widget(cpu_gauge, chunks[0]);

    // Memory Gauge
    let (used_mem, total_mem) = monitor.get_memory_usage();
    let mem_percent = (used_mem as f64 / total_mem as f64 * 100.0) as u16;
    let mem_gauge = Gauge::default()
        .block(Block::default().title("Memory").borders(Borders::ALL))
        .gauge_style(Style::default().fg(Color::Blue))
        .percent(mem_percent)
        .label(format!("{:.1}GB / {:.1}GB", used_mem as f64 / 1e9, total_mem as f64 / 1e9));
    f.render_widget(mem_gauge, chunks[1]);

    // Info (Uptime, Load)
    let uptime = monitor.get_uptime();
    let load = monitor.get_load_average();
    let info_text = format!(
        "Uptime: {}s\nLoad: {}",
        uptime, load
    );
    let info_p = Paragraph::new(info_text)
        .block(Block::default().title("Info").borders(Borders::ALL));
    f.render_widget(info_p, chunks[2]);
}

fn draw_process_list(f: &mut Frame, monitor: &SystemMonitor, area: Rect) {
    let processes = monitor.get_processes();
    let rows: Vec<Row> = processes.iter().map(|p| {
        Row::new(vec![
            Cell::from(p.pid.to_string()),
            Cell::from(p.user.clone()),
            Cell::from(format!("{:.1}%", p.cpu)),
            Cell::from(format!("{:.1} MB", p.mem as f64 / 1e6)),
            Cell::from(p.name.clone()),
        ])
    }).collect();

    let table = Table::new(
        rows,
        [
            Constraint::Length(8),  // PID
            Constraint::Length(10), // User
            Constraint::Length(10), // CPU
            Constraint::Length(10), // Mem
            Constraint::Min(10),    // Name
        ]
    )
    .header(Row::new(vec!["PID", "USER", "CPU%", "MEM", "COMMAND"]).style(Style::default().fg(Color::Yellow)))
    .block(Block::default().borders(Borders::ALL).title("Processes"));

    f.render_widget(table, area);
}
