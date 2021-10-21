const UserGuess = ({ userGuess }) => {
  return (
    <tr>
      <td>{userGuess.name}</td>
      <td>{userGuess.numberGuessed}</td>
      <td>{userGuess.numberActual}</td>
    </tr>
  );
};
export default UserGuess;
