import { useState } from "react";
import { colorPallete } from "../resources/colorPallete";
import text from "../resources/pageText";

function Modal(props) {
  var randomColor = "grey";
  var antColor = "whitewheat";
  function getNewColor() {
    randomColor = colorPallete[Math.floor(Math.random() * colorPallete.length)];
    if (randomColor === antColor) {
      antColor = "whitewheat";
      return antColor;
    } else {
      antColor = randomColor;
      return randomColor;
    }
  }

  function showModal() {
    props.changeView();
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={showModal}>
          &times;
        </span>
        <h1 style={{ color: getNewColor() }}>VERB TENSES HELP</h1>
        <div className=".modal-content-container">
          {text.map(([linea, linea2]) => (
            <p
              key={linea}
              className="modal-content-text"
              style={{ color: getNewColor() }}
            >
              <b>{linea}</b> - {linea2}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
