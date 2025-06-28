package main

import (
	"context"
	"dagger/app/internal/dagger"
)

type App struct{}

// container
func (m *App) Container() *dagger.Container {
	src := dag.CurrentModule().Source().Directory("..")
	container := dag.Container().Build(src, dagger.ContainerBuildOpts{
		Dockerfile: "Dockerfile",
		Target: "builder",
	})
	return container
}

func (m *App) Dev(ctx context.Context) error {
	return m.Container().WithExposedPort(8080).AsService().Up(ctx)
}

// sqlc generate
func (m *App) Sqlc(ctx context.Context) (string, error) {
	return m.Container().
		WithExec([]string{"go", "install", "github.com/sqlc-dev/sqlc/cmd/sqlc@latest"}).
		WithExec([]string{"sqlc", "generate"}).
		Stdout(ctx)
}

// migrate
func (m *App) Migrate(ctx context.Context,
	// +optional
	// +default="./migrations"
	migrationPath string,
	// +optional 
	// +default="mysql://root:password@host.docker.internal:3306/app"
	databaseUrl string,
	// +optional
	// +default="version"
	command string,
) (string, error) {
	return m.Container().
		WithExec([]string{"go", "install", "-tags", "mysql", "github.com/golang-migrate/migrate/v4/cmd/migrate@latest"}).
		WithExec([]string{"migrate", "-path", migrationPath, "-database", databaseUrl, command}).
		Stdout(ctx)
}

// lint
func (m *App) Lint(ctx context.Context) (string, error) {
	return m.Container().
		WithExec([]string{"go", "install", "honnef.co/go/tools/cmd/staticcheck@latest"}).
		WithExec([]string{"staticcheck", "./..."}).
		Stdout(ctx)
}

// test
func (m *App) Test(ctx context.Context) (string, error) {
	mysql := dag.Container().
		From("mysql:8.0").
		WithEnvVariable("MYSQL_ROOT_PASSWORD", "password").
		WithEnvVariable("MYSQL_DATABASE", "test").
		WithExposedPort(3306).
		AsService()
	
	container := m.Container().
		WithServiceBinding("mysql", mysql).
		WithEnvVariable("DATABASE_URL", "root:password@mysql:3306/test").
		WithExec([]string{"go", "install", "-tags", "mysql", "github.com/golang-migrate/migrate/v4/cmd/migrate@latest"}).
		WithExec([]string{"migrate", "-path", "migrations", "-database", "mysql://root:password@tcp(mysql:3306)/test", "up"})
	
	return container.WithExec([]string{"go", "test", "-v", "./..."}).Stdout(ctx)
}
