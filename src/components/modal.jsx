import { useState, useEffect } from "react";
import { colorPallete } from "../resources/colorPallete";

function Modal() {
  const [miscPhrase, setMiscPhrase] = useState(" TV");
  const [verbPhrase, setVerbPhrase] = useState("watch");
  return (
    <div>
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Simple Past</p>
        <p>Past Continous</p>
        <p>Past Perfect </p>
        <p>Past Perfect Continous</p>
        <p>Simple Present</p>
      </div>
    </div>
  );
}

export default Modal;
