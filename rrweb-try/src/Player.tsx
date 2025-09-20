import { useCallback, useEffect, useRef, useState } from "react";
import { Replayer } from "rrweb";

type Props = { events: any[] };

export function Player({ events }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const replayerRef = useRef<Replayer | null>(null);
  const [playing, setPlaying] = useState(false);
  const eventsHashRef = useRef<string>("");

  const createReplayer = useCallback(() => {
    if (!events.length || !containerRef.current) return;

    if (replayerRef.current) {
      replayerRef.current.destroy();
    }

    replayerRef.current = new Replayer(events, {
      root: containerRef.current,
    });

    setPlaying(false);
  }, [events]);

  useEffect(() => {
    if (!events.length) return;

    const eventsHash = events.length + "_" + (events[0]?.timestamp || "") + "_" + (events[events.length - 1]?.timestamp || "");
    if (eventsHash === eventsHashRef.current) return;

    eventsHashRef.current = eventsHash;

    setTimeout(() => {
      createReplayer();
    }, 50);

    return () => {
      if (replayerRef.current) {
        replayerRef.current.destroy();
        replayerRef.current = null;
      }
    };
  }, [createReplayer, events]);

  const handlePlay = useCallback(() => {
    if (replayerRef.current) {
      replayerRef.current.play();
      setPlaying(true);
    }
  }, []);

  const handlePause = useCallback(() => {
    if (replayerRef.current) {
      replayerRef.current.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={handlePlay} disabled={playing || !events.length}>
          再生
        </button>
        <button onClick={handlePause} disabled={!playing} style={{ marginLeft: 10 }}>
          一時停止
        </button>
      </div>
      <div
        ref={containerRef}
        style={{
          border: "1px solid #ccc",
          width: "800px",
          height: "600px",
        }}
      />
    </div>
  );
}
