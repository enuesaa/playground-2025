from pydantic_ai import Agent
import logfire

logfire.configure(token='')
logfire.instrument_openai()

agent = Agent('openai:gpt-4o')

result = agent.run_sync(
    'How does pyodide let you run Python in the browser? (short answer please)'
)

print(f'output: {result.output}')
