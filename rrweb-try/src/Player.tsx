import { useEffect, useRef } from "react";
import { Replayer } from "rrweb";

type Props = { events: any[] };

export function Player({ events }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!events.length || !containerRef.current) return;
    const replayer = new Replayer(events, {
      root: containerRef.current,
      // @ts-ignore
      showController: true,
    });
    replayer.play();
  }, [events]);

  return (
    <div
      ref={containerRef}
      style={{
        border: "1px solid #ccc",
        width: "800px",
        height: "600px",
        marginTop: "20px",
      }}
    />
  );
}
