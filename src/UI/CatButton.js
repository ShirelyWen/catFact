import { useDispatch } from "react-redux";

import { FETCH_FACT } from "../actions";
import classes from "./CatButton.module.css";

const CatButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({ type: FETCH_FACT });
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      New Fact
    </button>
  );
};

export default CatButton;
