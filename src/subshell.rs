use std::process::Command;
use std::process::Stdio;

pub fn run() {
    let hook = r#"
    preexec() {
        cmd="$1"
        start=$(date +%s)
    }

    precmd() {
        ret=$?
        end=$(date +%s)
        dur=$((end - start))
        print -r -- "$(date '+%F %T') | $PWD | $cmd | exit=$ret | ${dur}s" >> ~/.command_log
    }
    "#;
    let _ = Command::new("zsh")
        .arg("-c")
        .arg(hook)
        .stdin(Stdio::inherit())
        .stdout(Stdio::inherit())
        .stderr(Stdio::inherit())
        .status()
        .unwrap();
}

pub fn echohook() {
    let hook = r#"
preexec() {
    cmd="$1"
    start=$(date +%s)
}

precmd() {
    ret=$?
    end=$(date +%s)
    dur=$((end - start))
    print -r -- "$(date '+%F %T') | $PWD | $cmd | exit=$ret | ${dur}s" >> ~/.command_log
}
"#;
    println!("{}", hook);
}
