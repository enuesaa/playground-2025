use std::process::Command;
use std::process::Stdio;

pub fn run() {
    let _ = Command::new("zsh")
        .stdin(Stdio::inherit())
        .stdout(Stdio::inherit())
        .stderr(Stdio::inherit())
        .status()
        .unwrap();
}
