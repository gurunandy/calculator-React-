import Calculator from "./Calculator";
import { useReducer } from "react";
import reducer from "./reducer";

function Calc() {
  const [enteredValue, dispatch] = useReducer(reducer, []);

  const handleClick = (e) => {
    dispatch({
      type: e.currentTarget.getAttribute("data-value"),
    });
  };

  return <Calculator enteredValue={enteredValue} handleClick={handleClick} />;
}

export default Calc;
