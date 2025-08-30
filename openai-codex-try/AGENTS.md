# Repository Guidelines

## Stacks
- Go
- cobra

## Build, Test, and Development Commands
- `go run . https://example.com`
- `go build -o bin/curl && ./bin/curl https://example.com`.

## Features
- a minimal `curl -X GET` equivalent using Cobra.
- see `main.go`. Defaults to `https://example.com` if no URL is provided.
- Usage:
  - `go run .` (GET https://example.com)
  - `go run . https://example.com`
  - Or build once: `go build -o bin/curl` then `./bin/curl <url>`

## Commit Guidelines
- Commits: use Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`). Scope optional (e.g., `feat(cli): add init`).
- PRs: include a clear summary, rationale, screenshots or terminal output for CLI changes, and linked issues.
