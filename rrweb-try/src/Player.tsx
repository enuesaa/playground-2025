import { useRef, useState } from "react";
import { Replayer } from "rrweb";

type Props = {
  events: any[]
}
export function Player({ events }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const replayerRef = useRef<Replayer | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (containerRef.current) {
      replayerRef.current = new Replayer(events, {
        root: containerRef.current,
      })
      replayerRef.current.play();
      setPlaying(true);
    }
  }

  const handlePause = () => {
    if (replayerRef.current) {
      replayerRef.current.pause();
      setPlaying(false);
    }
  }

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
