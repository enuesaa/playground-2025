from aws_durable_execution_sdk_python import DurableContext, StepContext, durable_execution, durable_step
from aws_durable_execution_sdk_python.config import Duration

@durable_step
def handle(step_context: StepContext, i: int):
    step_context.logger.info(f"{i}: start")

@durable_execution
def lambda_handler(event, context: DurableContext):
    handle(1)
    context.wait(Duration.from_seconds(1))
    handle(2)
    context.wait(Duration.from_seconds(2))
    handle(3)
    context.wait(Duration.from_seconds(3))

    return {"ok": True}
