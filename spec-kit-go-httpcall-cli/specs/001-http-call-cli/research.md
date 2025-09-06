# Research: HTTP Call CLI Tool

## CLI Framework Decision
- **Decision**: Use Go's standard `flag` package
- **Rationale**: Minimal dependencies, built-in, sufficient for simple HTTP client
- **Alternatives considered**: 
  - Cobra: Too heavy for simple HTTP tool
  - urfave/cli: Additional dependency without significant benefit

## HTTP Timeout Configuration
- **Decision**: 30-second default timeout, configurable via flag
- **Rationale**: Standard web timeout, prevents hanging requests
- **Alternatives considered**: No timeout (can hang), shorter timeout (may fail on slow APIs)

## Response Formatting
- **Decision**: Plain text output with optional JSON formatting
- **Rationale**: Simple, readable, covers most use cases
- **Alternatives considered**: 
  - Colored output: Adds complexity, not essential
  - Multiple formats: Over-engineering for v1

## SSL/TLS Certificate Handling
- **Decision**: Default to strict verification, add `--insecure` flag to skip
- **Rationale**: Secure by default, escape hatch for testing
- **Alternatives considered**: Always skip (insecure), no option (inflexible)

## Authentication Methods
- **Decision**: Support basic auth and bearer tokens via flags
- **Rationale**: Covers 90% of API authentication needs
- **Alternatives considered**: 
  - Full OAuth flow: Too complex for CLI tool
  - API key headers: Can be handled with custom headers

## Technical Stack (Minimal)
- **Language**: Go (standard library focus)
- **HTTP Client**: net/http package
- **CLI**: flag package
- **JSON**: encoding/json package
- **Testing**: testing package