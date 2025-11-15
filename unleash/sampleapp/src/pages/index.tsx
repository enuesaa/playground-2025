import { useFlag, useVariant } from '@unleash/proxy-client-react';

const TestComponent = () => {
  const enabled = useFlag('aaa');
  const b = useVariant('aaa')
  console.log(b)

  return enabled ? 'Flag is enabled' : 'Flag is disabled'
};

export default function Page() {
  return (
    <>
      a
      
      <TestComponent />
    </>
  )
}
