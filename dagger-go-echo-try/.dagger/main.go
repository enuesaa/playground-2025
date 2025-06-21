package main

import (
	"context"
	"dagger/dagger-go-echo-try/internal/dagger"
)

type DaggerGoEchoTry struct{}

// これが関数

// build
func (m *DaggerGoEchoTry) Build() *dagger.Container {
	src := dag.CurrentModule().Source().Directory(".")

	builder := dag.Container().
		From("golang:1.24").
		WithMountedDirectory("/app", src).
		WithWorkdir("/app").
		WithExec([]string{"go", "build", "-o", "build/app"})

	container := dag.Container().
		From("debian:stable-slim").
		WithDirectory("/app", builder.Directory("/app/build")).
		WithWorkdir("/app").
		WithEntrypoint([]string{"./app"})

	return container
}

func (m *DaggerGoEchoTry) BuildDockerfile() *dagger.Container {
	src := dag.CurrentModule().Source().Directory(".")
	container := dag.Container().Build(src, dagger.ContainerBuildOpts{
		Dockerfile: "Dockerfile",
	})
	return container
}

// start
func (m *DaggerGoEchoTry) Start(ctx context.Context, port *int) error {
	if port == nil {
		defaultPort := 8080
		port = &defaultPort
	}
	container := m.Build().WithExposedPort(*port)

	return container.AsService().Up(ctx)
}

// このコメントがそのまま説明になる
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

// 本番用ビルド（最適化フラグ付き）
func (m *DaggerGoEchoTry) BuildProduction() *dagger.Directory {
	src := dag.CurrentModule().Source().Directory(".")

	return dag.Container().
		From("golang:1.21-alpine").
		WithMountedDirectory("/app", src).
		WithWorkdir("/app").
		WithExec([]string{"go", "mod", "download"}).
		WithExec([]string{"go", "build", "-ldflags", "-s -w", "-o", "build/app"}).
		Directory("/app/build")
}
