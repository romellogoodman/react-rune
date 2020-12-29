import { useEffect } from "react";
import RuneJS from "rune.js";

const Rune = (props) => {
  const { container = "#canvas", draw, height, width, onUpdate, play } = props;

  useEffect(() => {
    const rune = new RuneJS({
      container,
      height,
      width,
    });

    window.RUNE = rune;

    draw(rune);

    if (onUpdate) {
      rune.on("update", onUpdate);
    }

    if (play) {
      rune.play();
    } else {
      rune.draw();
    }

    return () => {
      // Remove the svg from the DOM
      console.log("Rune unmount");

      rune.el.remove();
    };
  }, [draw]);

  return null;
};

export default Rune;
