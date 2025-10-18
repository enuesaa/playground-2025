use std::process::Command;
use std::process::Stdio;

// atuin の場合は、、これがフック
// echo 'eval "$(atuin init zsh)"' >> ~/.zshrc
// eval するしかなさそうかも。
// そもそも stdout は取れなさそう
pub fn run() {
    let _ = Command::new("zsh")
        // .arg("--rcs") // 独自rcスクリプトを渡す
        // .arg("/Users/nsrciog/autoliving/histo/hook.sh")
        .env("ZDOTDIR", ".")
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
