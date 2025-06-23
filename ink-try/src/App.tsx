import { useApp } from "ink";
import { useEffect } from "react";
import { Counter } from "./Counter";

export function App() {
  const { exit } = useApp();

  useEffect(() => {
    setTimeout(() => {
      exit();
    }, 5000);
  }, []);

  return <Counter />;
}
