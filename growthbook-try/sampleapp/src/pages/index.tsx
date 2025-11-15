import { useFeatureIsOn } from "@growthbook/growthbook-react";
import { useFeatureValue } from "@growthbook/growthbook-react";

function MyComponent() {
  const enabled = useFeatureIsOn("testkey");
  
  if (enabled) {
    const value = useFeatureValue<boolean>("testkey", false);

    return <div>On: {value}</div>
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
