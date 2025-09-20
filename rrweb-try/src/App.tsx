import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import { Player } from './Player';
import { Recorder } from './Recorder';

function Page1() {
  return (
    <div>
      <h2>Page 1</h2>
      <Link to="/page2">Go to Page 2</Link>
      <input placeholder="Type something" />
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h2>Page 2</h2>
      <Link to="/">Go back Page 1</Link>
      <button>Click me</button>
    </div>
  );
}

export function App() {
  const [events, setEvents] = useState<any[]>([]);

  return (
    <BrowserRouter>
      <Recorder onEvents={setEvents} />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
      {events.length > 0 && <Player events={events} />}
    </BrowserRouter>
  );
}
