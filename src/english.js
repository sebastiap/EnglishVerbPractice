import { useState, useEffect } from "react";
import irregularVerbs from "./resources/irregularVerbs";
import { colorPallete } from "./resources/colorPallete";
const irregularVerbsArray = Object.keys(irregularVerbs);

function English() {
  const [miscPhrase, setMiscPhrase] = useState(" TV");
  const [verbPhrase, setVerbPhrase] = useState("watch");
  const [color, setColor] = useState("green");

  const [basicPronoun, setPronoun] = useState("I");
  const [time, setTime] = useState("");
  var basicPhrase = basicPronoun + " " + verbPhrase + " " + miscPhrase;
  const [phrase, setPhrase] = useState(basicPhrase);

  //Opciones
  const [darkmode, setDarkmode] = useState(false);
  const [hideVerbs, setHideVerbs] = useState(true);

  var typeOfVerb = "regular";

  let lastletter = verbPhrase[verbPhrase.length - 1];
  let pastProp = "";
  switch (lastletter) {
    case "y":
      typeOfVerb = "regularY";
      break;
    case "e":
      if (verbPhrase in irregularVerbs) {
        typeOfVerb = "irregularE";
      } else {
        typeOfVerb = "regularE";
      }
      break;
    default:
      typeOfVerb = "regular";
  }

  function pastParticiple() {
    var verb = verbPhrase;

    if (verb in irregularVerbs) {
      if (time === "pastSimple") {
        verb = irregularVerbs[verb][0][0];
      } else {
        verb = irregularVerbs[verb][0][1];
      }
    } else if (typeOfVerb === "regularE") {
      pastProp = "d";
    } else if (typeOfVerb === "regularY") {
      // enjoy es excepcion
      if (verb !== "enjoy") {
        verb = verb.slice(0, -1);
        pastProp = "ied";
      } else {
        //enjoy y otras excepciones
        pastProp = "ed";
      }
    } else {
      //regulares sin terminacion especial
      pastProp = "ed";
    }
    return (verb = verb + pastProp);
  }
  function pastConjunction() {
    var pronoun = basicPronoun;
    let pastConj;
    if (pronoun === "I" || pronoun === "He/She/It") {
      pastConj = " was ";
    } else {
      pastConj = " were ";
    }
    //presente
    return pastConj;
  }
  function pastPerfectConjunction() {
    var pronoun = basicPronoun;
    let pastConj;
    if (pronoun === "He/She/It") {
      pastConj = " has ";
    } else {
      pastConj = " have ";
    }
    //presente
    return pastConj;
  }
  function presentConjunction() {
    var pronoun = basicPronoun;
    switch (pronoun) {
      case "I":
        return " am ";
      case "You":
        return " are ";
      case "He/She/It":
        return " is ";
      default:
        return " are ";
    }
  }
  function adjustContinous() {
    let modifVerb = verbPhrase;
    if (typeOfVerb === "irregularE") {
      modifVerb = modifVerb.slice(0, -1);
    }
    return modifVerb + "ing";
  }

  //useEffect

  useEffect(() => {
    switch (time) {
      // Tiempos verbales Presentes:
      // Present Continuous: I am watching TV
      case "presentContinuous":
        setPhrase(
          basicPronoun +
            presentConjunction() +
            adjustContinous() +
            miscPhrase +
            " at this moment."
        );
        break;
      // Present Perfect Simple: I have watched TV
      case "presentPerfectSimple":
        setPhrase(
          basicPronoun +
            pastPerfectConjunction() +
            pastParticiple() +
            miscPhrase +
            " today"
        );
        break;
      // Present Perfect Continuous: I have been watching TV
      case "presentPerfectContinuous":
        setPhrase(
          basicPronoun +
            pastPerfectConjunction() +
            " been " +
            adjustContinous() +
            miscPhrase +
            " until recently."
        );
        break;

      // Tiempos verbales Pasados:
      // Past Simple: I watched TV
      case "pastSimple":
        setPhrase(
          basicPronoun +
            " " +
            pastParticiple() +
            "" +
            miscPhrase +
            " yesterday."
        );
        break;
      // Past Continuous: I was watching TV
      case "pastContinuous":
        setPhrase(
          basicPronoun +
            pastConjunction() +
            adjustContinous() +
            miscPhrase +
            " last time I checked."
        );
        break;
      // Past Perfect Simple: I had watched TV
      case "pastPerfectSimple":
        setPhrase(
          basicPronoun +
            " had " +
            pastParticiple() +
            miscPhrase +
            " since yesterday."
        );
        break;
      // Past Perfect Continuous: I had been watching TV
      case "pastPerfectContinuous":
        setPhrase(
          basicPronoun +
            " had been " +
            adjustContinous() +
            miscPhrase +
            " for a week."
        );
        break;
      // Tiempos verbales Futuros:
      // Future Simple: I will watch TV
      case "futureSimple":
        setPhrase(
          basicPronoun + " will " + verbPhrase + "" + miscPhrase + " tomorrow."
        );
        break;
      // Future Continuous: I will be watching TV
      case "futureContinuous":
        setPhrase(
          basicPronoun +
            " will be " +
            adjustContinous() +
            miscPhrase +
            " next week."
        );
        break;
      // Future Perfect Simple: I will have watched TV
      case "futurePerfectSimple":
        setPhrase(
          basicPronoun +
            " will have " +
            pastParticiple() +
            miscPhrase +
            " in the afternoon."
        );
        break;
      // Future Perfect Continuous: I will have been watching TV
      case "futurePerfectContinuous":
        setPhrase(
          basicPronoun +
            " will have been " +
            adjustContinous() +
            miscPhrase +
            " for a month this friday."
        );
        break;

      default:
        // Present Simple: I watch TV
        setPhrase(basicPhrase + " everyday.");
        break;
    }

    // setColor("green");
    const randomColor =
      colorPallete[Math.floor(Math.random() * colorPallete.length)];
    color !== randomColor ? setColor(randomColor) : setColor("#230007");
  }, [time, verbPhrase, basicPronoun]);

  function setIrregularVerb(Iverb) {
    const verb = Iverb["verbo"];
    setVerbPhrase(verb);
  }

  function setVerb(verb) {
    if (verb === "watch") {
      setMiscPhrase(" TV");
    } else if (verb === "study") {
      setMiscPhrase(" english");
    } else if (verb === "enjoy") {
      setMiscPhrase(" the show");
    } else {
      setMiscPhrase(" something");
    }
    console.log(miscPhrase);
    setVerbPhrase(verb);
  }

  function setnewPronoun(pronoun) {
    setPronoun(pronoun);
  }

  return (
    <div
      style={darkmode ? { background: "lightgrey" } : { background: "white" }}
    >
      <h1>Hello Student</h1> <button>?</button>
      {darkmode ? (
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      ) : (
        <></>
      )}
      <h2>Select a Time and the phrase will change</h2>
      <p style={{ color: color }} className="phrase" id="Phrase">
        {phrase}
      </p>
      <div className="buttonWrapper">
        <button onClick={() => setTime("pastSimple")}>Simple Past </button>
        <button onClick={() => setTime("pastContinuous")}>
          {" "}
          Past Continuous
        </button>
        <button onClick={() => setTime("pastPerfectSimple")}>
          Past Perfect
        </button>
        <button onClick={() => setTime("pastPerfectContinuous")}>
          Past Perfect Continuous
        </button>
      </div>
      <div className="buttonWrapper">
        <button onClick={() => setTime("")}>Simple Present </button>
        <button onClick={() => setTime("presentContinuous")}>
          Present Continuous
        </button>
        <button onClick={() => setTime("presentPerfectSimple")}>
          Present Perfect
        </button>
        <button onClick={() => setTime("presentPerfectContinuous")}>
          Present Perfect Continuous
        </button>
      </div>
      <div className="buttonWrapper">
        <button onClick={() => setTime("futureSimple")}>Simple Future </button>
        <button onClick={() => setTime("futureContinuous")}>
          Future Continuous
        </button>
        <button onClick={() => setTime("futurePerfectSimple")}>
          Future Perfect
        </button>
        <button onClick={() => setTime("futurePerfectContinuous")}>
          Future Perfect Continuous
        </button>
      </div>
      <h2>You can try another pronoun</h2>
      <div className="buttonWrapperVerb">
        <button className="verbButton" onClick={() => setnewPronoun("I")}>
          I
        </button>
        <button className="verbButton" onClick={() => setnewPronoun("You")}>
          You
        </button>
        <button
          className="verbButton"
          onClick={() => setnewPronoun("He/She/It")}
        >
          He/She/It
        </button>
        <button className="verbButton" onClick={() => setnewPronoun("We")}>
          We
        </button>
        <button className="verbButton" onClick={() => setnewPronoun("They")}>
          They
        </button>
      </div>
      <h2>You can also try another verb and see the changes</h2>
      <div className="buttonWrapperVerb">
        <button className="verbButton" onClick={() => setVerb("watch")}>
          Watch
        </button>
        <button className="verbButton" onClick={() => setVerb("study")}>
          Study
        </button>
        <button className="verbButton" onClick={() => setVerb("enjoy")}>
          Enjoy
        </button>
        <button className="verbButton" onClick={() => setVerb("write")}>
          Write
        </button>
        <button className="verbButton" onClick={() => setVerb("steal")}>
          Steal
        </button>
      </div>
      <h2 className="more">More options</h2>
      <button className="hideButton" onClick={() => setDarkmode(!darkmode)}>
        Low Contrast Mode
      </button>
      {hideVerbs ? (
        <button className="hideButton" onClick={() => setHideVerbs(false)}>
          Show More Verbs
        </button>
      ) : (
        <div>
          <button className="hideButton" onClick={() => setHideVerbs(true)}>
            Hide Extra Verbs
          </button>
          <div className="buttonWrapperVerb">
            {irregularVerbsArray.map((verbo) => (
              <button
                //Revisar esto
                key={verbo}
                className="verbButton"
                onClick={() => setIrregularVerb({ verbo })}
              >
                {verbo}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default English;
