import FormUserGuess from "./FormUserGuess";
import ResultTable from "./ResultTable";

const MainPage = () => {
  /*Defauts: La table ne se refresh pas lorsqu'un nouveau guess est ajouté et le nombre genere qui est affiche est le tout nouveau, pas celui venant avant*/

  return (
    <>
      <h1>Examen Intra</h1>
      <FormUserGuess />
      <ResultTable />
    </>
  );
};
export default MainPage;
