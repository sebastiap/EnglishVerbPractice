import { useState, useEffect } from "react";
import { colorPallete } from "../resources/colorPallete";
import text from "../resources/pageText";

function Modal() {
  const [miscPhrase, setMiscPhrase] = useState(" TV");
  const [verbPhrase, setVerbPhrase] = useState("watch");
  var randomColor = "grey";
  var antColor = "whitewheat";
  function getNewColor() {
    randomColor = colorPallete[Math.floor(Math.random() * colorPallete.length)];
    if (randomColor === antColor) {
      return "whitewheat";
    } else {
      return randomColor;
    }
  }
  return (
    <div>
      <div class="modal-content">
        <span class="close">&times;</span>
        <div className=".modal-content-container">
          {text.map(([linea, linea2]) => (
            <p class="modal-content-text" style={{ color: getNewColor() }}>
              <b>{linea}</b> - {linea2}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
