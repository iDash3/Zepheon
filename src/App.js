import { useState } from "react";
import "./App.css";
import SquaredButton from "./components/SquaredButton";

function App() {
  const [color, setColor] = useState(0);
  const colors = ["#ee7b6c", "#007eac", "#003249", "#090C08"];

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: colors[color] }}>
        <p>Zepheon</p>
        <div
          style={{
            display: "flex",
          }}
        >
          {colors.map((color, colorIdx) => (
            <SquaredButton color={color} onClick={() => setColor(colorIdx)} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
