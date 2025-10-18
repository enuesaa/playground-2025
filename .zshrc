source ~/.zshrc

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
