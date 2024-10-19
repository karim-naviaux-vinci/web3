import React from "react";
import { useState } from "react";

// eslint-disable-next-line react/display-name
const Boite = () => {
    const colors = ["red", "green", "blue", "yellow", "purple"];
    const [color, setColor] = useState(0);


    const handleClick = () => {
        const newColor = color + 1;
        setColor(newColor);
        if(color === colors.length - 1) {
            setColor(0);
        }
    }

    return (
        <div>
            <div style={{ backgroundColor: colors[color], height: "50px", width: "50px" }}>
            </div>
            <button onClick={handleClick}>
                {color === colors.length - 1 ? colors[0] : colors[color + 1]}
            </button>
        </div>
    );
}

export default Boite;