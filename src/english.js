import { useState, useEffect } from "react";

function English() {
  // const basicPronoun = "I ";
  // Agregar otros pronombres
  const miscPhrase = " TV";
  //Agregar otros finales ? Adverbios?

  const [verbPhrase, setVerbPhrase] = useState("watch");
  const irregularVerbs = { write: ["wrote", "written"] };
  const [basicPronoun, setPronoun] = useState("I");
  const [time, setTime] = useState("");
  var basicPhrase = basicPronoun + " " + verbPhrase + " " + miscPhrase;
  const [phrase, setPhrase] = useState(basicPhrase);

  var typeOfVerb = "regular";
  // Faltan
  // "irregular" aca voy a tener que buscar en una lista

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

  // //Implementar estos despues
  // if (typeOfVerb === "regularE") {
  //   pastProp = "d";
  // }
  // if (typeOfVerb === "regularY") {
  //   // enjoy es excepcion
  //   pastProp = "ied";
  // }

  // console.log(lastletter);

  function pastParticiple() {
    var verb = verbPhrase;

    // const irregularVerbs = {"write": [ [ "wrote", "written" ] ]}
    if (verb in irregularVerbs) {
      if (time === "pastSimple") {
        verb = irregularVerbs[verb][0];
      } else {
        verb = irregularVerbs[verb][1];
      }
    } else if (typeOfVerb === "regularE") {
      pastProp = "d";
    } else if (typeOfVerb === "regularY") {
      // enjoy es excepcion
      if (verb !== "enjoy") {
        verb = verb.slice(0, -1);
        pastProp = "ied";
      } else {
        //enjoy y otros
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
    console.log(pronoun);
    switch (typeOfVerb) {
      case "regularE":
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
    var pronoun = basicPronoun;
    console.log(pronoun);
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

  useEffect(() => {
    switch (time) {
      // Tiempos verbales Presentes:
      // Present Continuous: I am watching TV
      case "presentContinuous":
        setPhrase(
          basicPronoun + presentConjunction() + verbPhrase + "ing" + miscPhrase
        );
        break;
      // Present Perfect Simple: I have watched TV
      case "presentPerfectSimple":
        setPhrase(
          basicPronoun +
            pastPerfectConjunction() +
            pastParticiple() +
            miscPhrase
        );
        break;
      // Present Perfect Continuous: I have been watching TV
      case "presentPerfectContinuous":
        setPhrase(
          basicPronoun +
            pastPerfectConjunction() +
            " been " +
            verbPhrase +
            "ing" +
            miscPhrase
        );
        break;

      // Tiempos verbales Pasados:
      // Past Simple: I watched TV
      case "pastSimple":
        setPhrase(basicPronoun + " " + pastParticiple() + "" + miscPhrase);
        break;
      // Past Continuous: I was watching TV
      case "pastContinuous":
        setPhrase(
          basicPronoun + pastConjunction() + verbPhrase + "ing" + miscPhrase
        );
        break;
      // Past Perfect Simple: I had watched TV
      case "pastPerfectSimple":
        setPhrase(basicPronoun + " had " + pastParticiple() + miscPhrase);
        break;
      // Past Perfect Continuous: I had been watching TV
      case "pastPerfectContinuous":
        setPhrase(
          basicPronoun + " had been " + verbPhrase + "ing" + miscPhrase
        );
        break;
      // Tiempos verbales Futuros:
      // Future Simple: I will watch TV
      case "futureSimple":
        setPhrase(basicPronoun + " will " + verbPhrase + "" + miscPhrase);
        break;
      // Future Continuous: I will be watching TV
      case "futureContinuous":
        setPhrase(basicPronoun + " will be " + verbPhrase + "ing" + miscPhrase);
        break;
      // Future Perfect Simple: I will have watched TV
      case "futurePerfectSimple":
        setPhrase(basicPronoun + " will have " + pastParticiple() + miscPhrase);
        break;
      // Future Perfect Continuous: I will have been watching TV
      case "futurePerfectContinuous":
        setPhrase(
          basicPronoun + " will have been " + verbPhrase + "ing" + miscPhrase
        );
        break;

      default:
        // Present Simple: I watch TV
        setPhrase(basicPhrase);
        break;
    }
  }, [time, verbPhrase, basicPronoun]);

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
  function setnewPronoun(pronoun) {
    console.log(pronoun);
    setPronoun(pronoun);
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
      {/* Example Verbs */}
      <h2>Try another verb and see the changes</h2>
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

      {/* // Pronouns */}
      <h2>or try another pronoun</h2>
      <button className="verbButton" onClick={() => setnewPronoun("I")}>
        I
      </button>
      <button className="verbButton" onClick={() => setnewPronoun("You")}>
        You
      </button>
      <button className="verbButton" onClick={() => setnewPronoun("He/She/It")}>
        He/She/It
      </button>
      <button className="verbButton" onClick={() => setnewPronoun("We")}>
        We
      </button>
      <button className="verbButton" onClick={() => setnewPronoun("They")}>
        They
      </button>
    </div>
  );
}

export default English;
