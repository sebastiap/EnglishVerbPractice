import { useState } from "react";
import { colorPallete } from "../resources/colorPallete";
import text from "../resources/pageText";
import modalClass from "./modal.module.css";

function Modal(props) {
  const [language, setLanguage] = useState(0);
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
  function changeLanguage() {
    if (language) {
      setLanguage(0);
    } else {
      setLanguage(1);
    }
  }

  return (
    <div className={modalClass.modal}>
      <div className={modalClass.modalcontent}>
        <div className={modalClass.modalheader}>
          <button className={modalClass.langbutton} onClick={changeLanguage}>
            {language ? "Ingles" : "Español"}
          </button>
          <h1 style={{ color: getNewColor() }}>VERB TENSES HELP</h1>
          <span className={modalClass.close} onClick={showModal}>
            &times;
          </span>
        </div>

        <div className={modalClass.modalcontentcontainer}>
          {text[language].map(([linea, linea2]) => (
            <p
              key={linea}
              className={modalClass.modalcontenttext}
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
