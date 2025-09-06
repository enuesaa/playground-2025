# Data Model: HTTP Call CLI Tool

## Core Entities

### HTTPRequest
- **Method**: string (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)
- **URL**: string (target endpoint)
- **Headers**: map[string]string (custom headers)
- **Body**: string (request payload)
- **Timeout**: time.Duration (request timeout)

### HTTPResponse  
- **StatusCode**: int (HTTP status code)
- **Headers**: map[string][]string (response headers)
- **Body**: string (response payload)
- **Duration**: time.Duration (request duration)

### CLIConfig
- **Method**: string (HTTP method flag)
- **URL**: string (target URL argument)
- **Headers**: []string (header flags)
- **Data**: string (request body flag)
- **Timeout**: string (timeout flag)
- **Insecure**: bool (skip TLS verification)
- **JSON**: bool (JSON output format)
- **Username**: string (basic auth username)
- **Password**: string (basic auth password)
- **Token**: string (bearer token)

## State Transitions

### Request Lifecycle
1. Parse CLI arguments → CLIConfig
2. Build HTTPRequest from CLIConfig
3. Execute HTTP request → HTTPResponse
4. Format and display HTTPResponse

## Validation Rules
- URL must be valid HTTP/HTTPS
- Method must be valid HTTP method
- Timeout must be positive duration
- Headers must be in "key:value" format