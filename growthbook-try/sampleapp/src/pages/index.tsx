import { useFeatureIsOn } from "@growthbook/growthbook-react";

function MyComponent() {
  const enabled = useFeatureIsOn("testkey");
  
  if (enabled) {
    return <div>On!</div>
  } else {
    return <div>Off!</div>
  }
}

export default function Page() {
  return (
    <>
      a

      <MyComponent />
    </>
  )
}
