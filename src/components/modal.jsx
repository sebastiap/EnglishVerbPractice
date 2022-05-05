import { colorPallete } from "../resources/colorPallete";
import text from "../resources/pageText";

function Modal() {
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
  return (
    <div>
      <div className="modal-content">
        <span className="close">&times;</span>
        <h1 style={{ color: getNewColor() }}>VERB TENSES HELP</h1>
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
