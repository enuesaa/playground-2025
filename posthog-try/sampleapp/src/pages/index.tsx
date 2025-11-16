import posthog from 'posthog-js'

export default function Page() {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    posthog.capture('my event', { property: 'value' })
  }
  return (
    <>
      a
      <button onClick={handleClick}>aa</button>
    </>
  )
}
