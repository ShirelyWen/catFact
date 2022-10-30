import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_FACT } from "./actions";
import CatFact from "./components/CatFact";
import CatButton from "./UI/CatButton";
import classes from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch({ type: FETCH_FACT });
  }, [dispatch]);

  return (
    <Fragment>
      <div className={classes.container}>
        <CatFact />
        <div className={classes.buttonContainer}>
          <CatButton />
          <p>Counter: {counter}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
