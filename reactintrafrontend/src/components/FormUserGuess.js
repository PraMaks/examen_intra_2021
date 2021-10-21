import { useState } from "react";
import axios from "axios";
import Result from "./Result";

const FormUserGuess = () => {
  const [name, setName] = useState("");
  const [numberGuessed, setNumberGuessed] = useState(0);
  const [result, setResult] = useState("");
  const [isFirstUse, setIsFirstUse] = useState(true);

  const minimumNumber = 1;
  const maximumNumber = 6;

  function generateNumberActual() {
    return Math.floor(
      Math.random() * (maximumNumber - minimumNumber + 1) + minimumNumber
    );
  }

  const [numberActual, setNumberActual] = useState(generateNumberActual);

  function compareGuessToActual() {
    if (parseInt(numberGuessed, 10) === parseInt(numberActual, 10)) {
      setResult("Bravo");
      return;
    } else {
      setResult("Manqué");
      return;
    }
  }

  function isFirstUsed() {
    if (!isFirstUse) {
      return <Result numberActual={numberActual} result={result} />;
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    setIsFirstUse(false);

    if (!name || numberGuessed > 6 || numberGuessed <= 0 || !numberGuessed) {
      alert(
        "SVP Remplir les champs et verifier que votre guess est entre 1 et 6 (inclusivement)"
      );
      return;
    }

    compareGuessToActual();
    setNumberActual(generateNumberActual());

    axios
      .post(
        "http://localhost:9090/save/" +
          name +
          "/" +
          numberGuessed +
          "/" +
          numberActual
      )
      .then((response) => {
        console.log("Envoi");
      })
      .catch((error) => {
        console.log("Erreur!" + error);
      });

    setName("");
    setNumberGuessed(0);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Votre Nom: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Votre guess: </label>
        <input
          type="number"
          value={numberGuessed}
          onChange={(e) => setNumberGuessed(e.target.value)}
        />
        <br />
        <button>Coup de dé</button>
      </form>

      {isFirstUsed()}
    </>
  );
};
export default FormUserGuess;
