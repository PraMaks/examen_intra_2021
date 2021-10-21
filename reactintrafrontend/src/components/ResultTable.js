import { useState, useEffect } from "react";
import axios from "axios";
import UserGuess from "./UserGuess";

const ResultTable = () => {
  const [userGuessList, setUserGuessList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9090/getAll`)
      .then((response) => {
        setUserGuessList(response.data);
        console.log(response.data);
        console.log(userGuessList);
      })
      .catch((err) => {});
  }, []);

  function getUserGuessList() {
    console.log(userGuessList);
    return (
      <>
        {userGuessList.map((userGuess) => (
          <UserGuess
            key={userGuessList.indexOf(userGuess)}
            userGuess={userGuess}
          />
        ))}
      </>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Guess Utilisateur</th>
          <th>Guess généré</th>
        </tr>
      </thead>
      <tbody>{getUserGuessList()}</tbody>
    </table>
  );
};
export default ResultTable;
