package main

import (
	"context"
	"dagger/dagger-go-echo-try/internal/dagger"
)

type DaggerGoEchoTry struct{}

// これが関数。このコメントがそのまま説明になる
func (m *DaggerGoEchoTry) ContainerEcho(stringArg string) *dagger.Container {
	return dag.Container().From("alpine:latest").WithExec([]string{"echo", stringArg})
}

// hello
func (m *DaggerGoEchoTry) Hello(ctx context.Context,) (string, error) {
	return dag.Container().From("alpine:latest").WithExec([]string{"echo", "hello"}).Stdout(ctx)
}

// grep dir
func (m *DaggerGoEchoTry) GrepDir(ctx context.Context, directoryArg *dagger.Directory, pattern string) (string, error) {
	return dag.Container().
		From("alpine:latest").
		WithMountedDirectory("/mnt", directoryArg).
		WithWorkdir("/mnt").
		WithExec([]string{"grep", "-R", pattern, "."}).
		Stdout(ctx)
}
