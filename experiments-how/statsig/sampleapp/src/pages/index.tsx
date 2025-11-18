import { useStatsigClient } from "@statsig/react-bindings";

export default function Page() {
  const { client } = useStatsigClient();

  const handleClick: React.MouseEventHandler = (e) => {
    client.logEvent("add_to_cart", "SKU_12345", {
      price: "9.99",
      item_name: "diet_coke_48_pack",
    });
  }

  return (
    <>
      a

      <div>aaaa</div>
      <div>ccc</div>
      <span>aa</span>
      <button onClick={handleClick}>click</button>
    </>
  )
}
