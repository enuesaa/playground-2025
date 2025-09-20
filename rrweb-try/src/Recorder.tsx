import { useEffect, useRef } from "react";
import { record } from "rrweb";

export function Recorder({ onEvents }: { onEvents: (events: any[]) => void }) {
  const eventsRef = useRef<any[]>([]);

  useEffect(() => {
    const stopFn = record({
      emit(event: any) {
        eventsRef.current.push(event);
      },
    });
    // @ts-ignore
    return () => stopFn();
  }, []);

  return (
    <button
      onClick={() => onEvents([...eventsRef.current])}
      style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}
    >
      再生用に取得
    </button>
  );
}