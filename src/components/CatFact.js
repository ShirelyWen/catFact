import { useSelector } from "react-redux";
import Card from "../UI/Card";

const CatFact = () => {
  const { fact, fetchFactStatus, errorMsg } = useSelector((state) => state);

  return (
    <Card>
      {fetchFactStatus === "pending" && <p>Loading...</p>}
      {fetchFactStatus === "fetching" && <p>Loading...</p>}
      {fetchFactStatus === "success" && <p>{fact}</p>}
      {fetchFactStatus === "failure" && <p>{errorMsg}</p>}
    </Card>
  );
};

export default CatFact;
