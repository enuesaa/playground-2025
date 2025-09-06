# Implementation Plan: HTTP Call CLI Tool

**Branch**: `001-http-call-cli` | **Date**: 2025-09-06 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-http-call-cli/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
4. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
5. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, or `GEMINI.md` for Gemini CLI).
6. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
HTTP Call CLI Tool: A command-line interface for making HTTP requests to test APIs, troubleshoot services, and automate HTTP-based interactions. Primary features include support for standard HTTP methods, custom headers, request bodies, and formatted response display.

## Technical Context
**Language/Version**: Go 1.21+ (based on repository directory structure)  
**Primary Dependencies**: Standard library net/http, cli framework (cobra), JSON formatting  
**Storage**: N/A (stateless tool)  
**Testing**: Go testing framework (go test)  
**Target Platform**: Cross-platform CLI (Linux, macOS, Windows)
**Project Type**: single (CLI application)  
**Performance Goals**: Sub-second response for typical HTTP requests, minimal memory footprint  
**Constraints**: 30-second default timeout, handle responses up to 10MB, UTF-8 output with fallback  
**Scale/Scope**: Single-user tool, support for typical API testing scenarios

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**:
- Projects: 1 (cli) - PASS
- Using framework directly? Yes (direct use of net/http, cobra) - PASS
- Single data model? Yes (HTTP request/response structures) - PASS
- Avoiding patterns? Yes (no unnecessary abstractions) - PASS

**Architecture**:
- EVERY feature as library? Yes (http client library + CLI wrapper) - PASS
- Libraries listed: httpclient (HTTP operations), formatter (response formatting)
- CLI per library: httpcall CLI with --help/--version/--format - PASS
- Library docs: llms.txt format planned? Yes - PASS

**Testing (NON-NEGOTIABLE)**:
- RED-GREEN-Refactor cycle enforced? Yes - MUST VERIFY
- Git commits show tests before implementation? Yes - MUST VERIFY
- Order: Contract→Integration→E2E→Unit strictly followed? Yes - PLANNED
- Real dependencies used? Yes (actual HTTP endpoints for integration) - PLANNED
- Integration tests for: HTTP client library, response formatting - PLANNED
- FORBIDDEN: Implementation before test, skipping RED phase - ENFORCED

**Observability**:
- Structured logging included? Yes (request/response logging) - PLANNED
- Frontend logs → backend? N/A (CLI tool)
- Error context sufficient? Yes (network, parsing, timeout errors) - PLANNED

**Versioning**:
- Version number assigned? 0.1.0 (initial version) - ASSIGNED
- BUILD increments on every change? Yes - PLANNED
- Breaking changes handled? Yes (CLI flag compatibility) - PLANNED

## Project Structure

### Documentation (this feature)
```
specs/001-http-call-cli/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/
```

**Structure Decision**: Option 1 (single CLI application project)

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - Resolve CLI framework choice (cobra vs flag vs urfave/cli)
   - Research HTTP timeout best practices for CLI tools
   - Investigate response formatting options (JSON, plain text, colored)
   - Study SSL/TLS certificate handling approaches
   - Research authentication patterns for CLI tools

2. **Generate and dispatch research agents**:
   ```
   Task: "Research Go CLI frameworks for HTTP client tool"
   Task: "Find best practices for HTTP timeouts in CLI applications"
   Task: "Research response formatting libraries for Go CLI tools"
   Task: "Find SSL/TLS certificate handling patterns for Go HTTP clients"
   Task: "Research authentication methods for CLI HTTP tools (basic auth, bearer tokens, API keys)"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - HTTP Request (method, URL, headers, body)
   - HTTP Response (status, headers, body)
   - CLI Configuration (timeout, format, auth settings)

2. **Generate API contracts** from functional requirements:
   - CLI command interface specification
   - HTTP client library interface
   - Response formatter interface
   - Output OpenAPI-style documentation to `/contracts/`

3. **Generate contract tests** from contracts:
   - CLI command parsing tests
   - HTTP client interface tests
   - Response formatting tests
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - GET request to public API
   - POST request with JSON body
   - Custom headers with authentication
   - Error handling scenarios
   - Quickstart test = basic usage validation

5. **Update agent file incrementally** (O(1) operation):
   - Run `/scripts/update-agent-context.sh claude` for Claude Code
   - Add Go CLI development context
   - Include HTTP client patterns
   - Update with current feature progress

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, CLAUDE.md

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each CLI command → command test task [P]
- Each HTTP operation → HTTP client test task [P] 
- Each response format → formatter test task [P]
- Each user story → integration test task
- Implementation tasks to make tests pass

**Ordering Strategy**:
- TDD order: Tests before implementation 
- Dependency order: Models → HTTP client → CLI → Formatters
- Mark [P] for parallel execution (independent modules)

**Estimated Output**: 20-25 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |

## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [ ] Phase 0: Research complete (/plan command)
- [ ] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [ ] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*