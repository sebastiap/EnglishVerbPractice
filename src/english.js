import { useState, useEffect } from "react";

function English() {
  const basicPronoun = "I ";
  // For now always a regular verb not ended in e
  // const verbPhrase = "watch";
  const miscPhrase = " TV";
  // Ojo si termina con y - agregar i en el pasado
  // Regular verb terminado en e, agrego solo la d en el pasado

  const [verbPhrase, setVerbPhrase] = useState("watch");
  const [time, setTime] = useState("");
  var basicPhrase = basicPronoun + verbPhrase + " " + miscPhrase;
  const [phrase, setPhrase] = useState(basicPhrase);

  const times = [
    "presentSimple",
    "presentContinuous",
    "presentPerfectSimple",
    "presentPerfectContinuous",
    "pastSimple",
    "pastContinuous",
    "pastPerfectSimple",
    "pastPerfectContinuous",
    "futureSimple",
    "futureContinuous",
    "futurePerfectSimple",
    "futurePerfectContinuous"
  ];
  var typeOfVerb = "regular";
  // Other options are
  // "regularE"
  // "regularY"
  // "irregular" aca voy a tener que buscar en una lista

  let lastletter = verbPhrase[verbPhrase.length - 1];
  let pastProp = "ed";
  switch (lastletter) {
    case "y":
      typeOfVerb = "regularY";
      break;
    case "e":
      typeOfVerb = "regularE";
      break;
    default:
      typeOfVerb = "regular";
  }

  //Implementar estos despues
  if (typeOfVerb === "regularE") {
    pastProp = "d";
  }
  if (typeOfVerb === "regularY") {
    // enjoy es excepcion
    pastProp = "ied";
  }

  // console.log(lastletter);

  function pastParticiple() {
    var verb = verbPhrase;
    if (typeOfVerb === "regularE") {
      pastProp = "d";
    } else if (typeOfVerb === "regularY") {
      // enjoy es excepcion
      if (verb !== "enjoy") {
        verb = verb.slice(0, -1);
        pastProp = "ied";
      } else {
        pastProp = "ed";
      }
    } else {
      pastProp = "ed";
    }
    return (verb = verb + pastProp);
  }

  useEffect(() => {
    switch (time) {
      // Tiempos verbales Presentes:
      // Present Continuous: I am watching TV
      case "presentContinuous":
        setPhrase(basicPronoun + "am " + verbPhrase + "ing" + miscPhrase);
        break;
      // Present Perfect Simple: I have watched TV
      case "presentPerfectSimple":
        setPhrase(basicPronoun + "have " + pastParticiple() + miscPhrase);
        break;
      // Present Perfect Continuous: I have been watching TV
      case "presentPerfectContinuous":
        setPhrase(
          basicPronoun + "have been " + verbPhrase + "ing" + miscPhrase
        );
        break;

      // Tiempos verbales Pasados:
      // Past Simple: I watched TV
      case "pastSimple":
        setPhrase(basicPronoun + "" + pastParticiple() + "" + miscPhrase);
        break;
      // Past Continuous: I was watching TV
      case "pastContinuous":
        setPhrase(basicPronoun + "was " + verbPhrase + "ing" + miscPhrase);
        break;
      // Past Perfect Simple: I had watched TV
      case "pastPerfectSimple":
        setPhrase(basicPronoun + "had " + pastParticiple() + miscPhrase);
        break;
      // Past Perfect Continuous: I had been watching TV
      case "pastPerfectContinuous":
        setPhrase(basicPronoun + "had been " + verbPhrase + "ing" + miscPhrase);
        break;
      // Tiempos verbales Futuros:
      // Future Simple: I will watch TV
      case "futureSimple":
        setPhrase(basicPronoun + "will " + verbPhrase + "" + miscPhrase);
        break;
      // Future Continuous: I will be watching TV
      case "futureContinuous":
        setPhrase(basicPronoun + "will be " + verbPhrase + "ing" + miscPhrase);
        break;
      // Future Perfect Simple: I will have watched TV
      case "futurePerfectSimple":
        setPhrase(basicPronoun + "will have " + pastParticiple() + miscPhrase);
        break;
      // Future Perfect Continuous: I will have been watching TV
      case "futurePerfectContinuous":
        setPhrase(
          basicPronoun + "will have been " + verbPhrase + "ing" + miscPhrase
        );
        break;

      default:
        // Present Simple: I watch TV
        setPhrase(basicPhrase);
        break;
    }
  }, [time, verbPhrase]);

  function setPast() {
    setTime("pastSimple");
  }
  function setPastC() {
    setTime("pastContinuous");
  }
  function setPastP() {
    setTime("pastPerfectSimple");
  }
  function setPastPC() {
    setTime("pastPerfectContinuous");
  }
  function setPresent() {
    setTime("");
  }
  function setPresentC() {
    setTime("presentContinuous");
  }
  function setPresentP() {
    setTime("presentPerfectSimple");
  }
  function setPresentPC() {
    setTime("presentPerfectContinuous");
  }

  function setFuture() {
    setTime("futureSimple");
  }
  function setFutureC() {
    setTime("futureContinuous");
  }
  function setFutureP() {
    setTime("futurePerfectSimple");
  }
  function setFuturePC() {
    setTime("futurePerfectContinuous");
  }

  function setVerb(verb) {
    setVerbPhrase(verb);
  }

  return (
    <div>
      <p>{phrase}</p>
      <div>
        <button onClick={setPast}>Simple Past </button>
        <button onClick={setPastC}> Past Continuous </button>
        <button onClick={setPastP}>Perfect Past </button>
        <button onClick={setPastPC}>Perfect Continuous Past</button>
      </div>
      <div>
        <button onClick={setPresent}>Simple Present </button>
        <button onClick={setPresentC}>Present Continuous </button>
        <button onClick={setPresentP}>Perfect Present </button>
        <button onClick={setPresentPC}>Perfect Continuous Present </button>
      </div>
      <div>
        <button onClick={setFuture}>Simple Future </button>
        <button onClick={setFutureC}>Future Continuous </button>
        <button onClick={setFutureP}>Perfect Future </button>
        <button onClick={setFuturePC}>Perfect Continuous Future </button>
      </div>
      <h2>Try another verb and see the changes</h2>
      <button className="verbButton" onClick={() => setVerb("watch")}>
        Watch{" "}
      </button>
      <button className="verbButton" onClick={() => setVerb("study")}>
        Study{" "}
      </button>
      <button className="verbButton" onClick={() => setVerb("enjoy")}>
        Enjoy{" "}
      </button>
    </div>
  );
}

export default English;
