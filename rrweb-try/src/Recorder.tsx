import { useCallback, useEffect, useRef, useState } from "react";
import { record } from "rrweb";

export function Recorder({ onEvents, onRecordingStart }: { onEvents: (events: any[]) => void; onRecordingStart?: () => void }) {
  const [eventCount, setEventCount] = useState(0);
  const [recording, setRecording] = useState(false);
  const eventsRef = useRef<any[]>([]);

  const startRecording = useCallback(() => {
    eventsRef.current = [];
    setEventCount(0);
    onRecordingStart?.();
    setRecording(true);
  }, [onRecordingStart]);

  const stopRecording = useCallback(() => {
    setRecording(false);
  }, []);

  const playRecording = useCallback(() => {
    onEvents([...eventsRef.current]);
  }, [onEvents]);

  useEffect(() => {
    if (!recording) return;

    let updateTimeout;

    const stopFn = record({
      emit(event: any) {
        eventsRef.current.push(event);

        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => {
          setEventCount(eventsRef.current.length);
        }, 100);
      },
    });

    return () => {
      clearTimeout(updateTimeout);
      stopFn();
    };
  }, [recording]);

  return (
    <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? "記録停止" : "記録開始"}
      </button>
      {eventCount > 0 && (
        <button onClick={playRecording} style={{ marginLeft: 10 }}>
          再生 ({eventCount} events)
        </button>
      )}
    </div>
  );
}