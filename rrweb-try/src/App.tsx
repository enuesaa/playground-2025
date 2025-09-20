import { useCallback, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import { Player } from './Player';
import { Recorder } from './Recorder';

function Page1() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Page 1</h2>
      <p>このページで何かアクションしてみてください：</p>
      <input placeholder="テキストを入力" style={{ marginBottom: "10px", display: "block" }} />
      <button style={{ marginBottom: "10px", display: "block" }}>ボタンをクリック</button>
      <Link to="/page2" style={{ display: "block" }}>Page 2へ移動</Link>
    </div>
  );
}

function Page2() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Page 2</h2>
      <p>別のページでもアクションしてみましょう：</p>
      <select style={{ marginBottom: "10px", display: "block" }}>
        <option>選択肢1</option>
        <option>選択肢2</option>
      </select>
      <textarea placeholder="メッセージを書く" style={{ marginBottom: "10px", display: "block" }}></textarea>
      <Link to="/" style={{ display: "block" }}>Page 1に戻る</Link>
    </div>
  );
}

export function App() {
  const [events, setEvents] = useState<any[]>([]);

  const handleEvents = useCallback((newEvents: any[]) => {
    setEvents(newEvents);
  }, []);

  const handleRecordingStart = useCallback(() => {
    setEvents([]);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <header style={{ backgroundColor: "#f5f5f5", padding: "10px", marginBottom: "20px" }}>
          <h1>rrweb 検証アプリ</h1>
          <p>1. 「記録開始」を押す → 2. 色々操作する → 3. 「記録停止」を押す → 4. 「再生」を押す</p>
        </header>

        <Recorder onEvents={handleEvents} onRecordingStart={handleRecordingStart} />

        <main>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </main>

        {events.length > 0 && (
          <div style={{ marginTop: "40px", padding: "20px", border: "2px solid #ddd" }}>
            <h3>録画再生</h3>
            <Player events={events} />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}
