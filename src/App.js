import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Scratch from "./pages/scratch";
import { useState } from "react";

function App() {
  const [keys, setKeys] = useState(0);
  return (
    <div className="App">
      <div className="bg-[#183250] h-screen flex flex-col items-center text-white">
        <Navbar keys={keys} />
        <div className="flex items-center justify-center h-full w-full">
          <Routes>
            <Route
              path="/"
              element={<Scratch keys={keys} setKeys={setKeys} />}
            />
            <Route
              path="/scratch"
              element={<Scratch keys={keys} setKeys={setKeys} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
