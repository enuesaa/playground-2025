import { useEffect, useState } from "react";
import { record } from "rrweb";
import { Player } from './Player';

export function Recorder() {
  const [events, setEvents] = useState<any[]>([]);
  const [recording, setRecording] = useState(false);

  const startRecording = () => {
    setRecording(true);
  }
  const stopRecording = () => setRecording(false);

  useEffect(() => {
    if (!recording) return;

    const stopFn = record({
      emit(event: any) {
        setEvents((v) => [...v, event])
      },
    });

    return () => {
      stopFn !== undefined && stopFn();
    }
  }, [recording]);

  return (
    <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? "記録停止" : "記録開始"}
      </button>

      <div style={{ marginTop: "40px", padding: "20px", border: "2px solid #ddd" }}>
        <h3>録画再生</h3>
        <Player events={events} />
      </div>
    </div>
  );
}