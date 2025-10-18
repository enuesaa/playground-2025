use std::process::Command;
use std::process::Stdio;

// atuin の場合は、、これがフック
// echo 'eval "$(atuin init zsh)"' >> ~/.zshrc
pub fn run() {
    let _ = Command::new("eval")
        // .arg("$(cargo run echo)")
        // .arg("eval \"$(cargo run echo)\"")
        .stdin(Stdio::inherit())
        .stdout(Stdio::inherit())
        .stderr(Stdio::inherit())
        .status()
        .unwrap();
}

// eval "$(cargo run echo)"
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
echo aaa
"#;
    println!("{}", hook);
}
