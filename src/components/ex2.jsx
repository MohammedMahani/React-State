import { useState } from "react";

function Colors() {
  const colors = ["yello", "green", "red"];
  const [currentColor, setColor] = useState(colors[0]);
  const handleClick = (color) => {
    setColor(color);
  };

  return (
    <div style={{ backgroundColor: currentColor }}>
      {colors.map((color, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleClick(color);
            }}
          >
            {color}
          </button>
        );
      })}
    </div>
  );
}

export default Colors;
