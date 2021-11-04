import React, { useState } from "react";

function App() {
  const [firstColor, setFirstColor] = useState({ r: 120, g: 255, b: 240 });
  const [secondColor, setSecondColor] = useState({ r: 10, g: 20, b: 30 });
  const [angle, setAngle] = useState(1);
  console.log(angle)
  return (
    <div className="App">
      <div
        className="color"
        style={{
          background: `linear-gradient(${angle}deg,rgb(${firstColor.r}, ${firstColor.g},${firstColor.b}), rgb(${firstColor.r}, ${firstColor.g},${firstColor.b}))`,
          width: "800px",
          height: "300px",
        }}
      ></div>

      <h2>{`linear-gradient(${angle}deg,rgb(${firstColor.r},${firstColor.g},${firstColor.b}),rgb(${secondColor.r},${secondColor.g},${secondColor.b}))`}</h2>

      <div>
        <input
          type="range"
          style={{ width: "800px" }}
          max={180}
          min={0}
          step={1}
          value={angle}
          onChange={(e) => setAngle(e.target.value)}
        />
      </div>
      <div >
        {/* rgb(255,255,255) */}
        <input
          type="range"
          style={{ width: "800px" }}
          max={255}
          min={0}
          step={1}
          value={firstColor.r}
          onChange={(e) => setFirstColor({ ...firstColor, r: e.target.value })}
        /*  color= {r:23,g:3, b:5}
           {...color,r:27}  {r:23, g:3, b:5, r:27}    => {r:27,g:3, b:5} */


        />
        <input
          type="range"
          style={{ width: "800px" }}
          max={255}
          min={0}
          step={1}
          value={firstColor.g}
          onChange={(e) => setFirstColor({ ...firstColor, g: e.target.value })}
        />
        <input
          type="range"
          style={{ width: "800px" }}
          max={255}
          min={0}
          step={1}
          value={firstColor.b}
          onChange={(e) => setFirstColor({ ...firstColor, b: e.target.value })}
        />
      </div>

      <div >
        {/* rgb(255,255,255) */}
        <input
          type="range"
          style={{ width: "800px" }}
          max={255}
          min={0}
          step={1}
          value={secondColor.r}
          onChange={(e) =>
            setSecondColor({ ...secondColor, r: e.target.value })
          }
        />
        <input
          type="range"
          style={{ width: "800px" }}
          max={255}
          min={0}
          step={1}
          value={secondColor.g}
          onChange={(e) =>
            setSecondColor({ ...secondColor, g: e.target.value })
          }
        />
        <input
          type="range"
          style={{ width: "800px" }}
          max={255}
          min={0}
          step={1}
          value={secondColor.b}
          onChange={(e) =>
            setSecondColor({ ...secondColor, b: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default App;
