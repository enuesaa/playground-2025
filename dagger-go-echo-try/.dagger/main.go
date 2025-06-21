package main

import (
	"context"
	"dagger/dagger-go-echo-try/internal/dagger"
	"fmt"
	"time"
)

type DaggerGoEchoTry struct{}

// これが関数

// build scratch
func (m *DaggerGoEchoTry) BuildScratch() *dagger.Container {
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

func (m *DaggerGoEchoTry) Build() *dagger.Container {
	src := dag.CurrentModule().Source().Directory(".")
	container := dag.Container().Build(src, dagger.ContainerBuildOpts{
		Dockerfile: "Dockerfile",
	})
	return container
}

func (m *DaggerGoEchoTry) Publish(ctx context.Context) (string, error) {
	imageName := fmt.Sprintf("ttl.sh/dagger-go-echo-try-%d:1h", time.Now().Unix())
	return m.Build().Publish(ctx, imageName)
}

// start
func (m *DaggerGoEchoTry) Start(ctx context.Context, port *int) error {
	if port == nil {
		defaultPort := 8080
		port = &defaultPort
	}
	container := m.BuildScratch().WithExposedPort(*port)

	return container.AsService().Up(ctx)
}

// このコメントがそのまま説明になる
func (m *DaggerGoEchoTry) Echo(ctx context.Context, stringArg string) (string, error) {
	return dag.Container().From("alpine:latest").WithExec([]string{"echo", stringArg}).Stdout(ctx)
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
