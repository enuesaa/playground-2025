import { Recorder } from './Recorder';

export default function App() {
  return (
    <div>
      <header style={{ backgroundColor: "#f5f5f5", padding: "10px", marginBottom: "20px" }}>
        <h1>rrweb 検証アプリ</h1>
        <p>1. 「記録開始」を押す → 2. 色々操作する → 3. 「記録停止」を押す → 4. 「再生」を押す</p>
      </header>

      <div style={{ padding: "20px" }}>
        <h2>Page 1</h2>
        <input placeholder="テキストを入力" style={{ marginBottom: "10px", display: "block" }} />
        <button style={{ marginBottom: "10px", display: "block" }}>ボタンをクリック</button>
      </div>

      <Recorder />
    </div>
  );
}
