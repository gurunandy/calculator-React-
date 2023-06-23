const calculateValues = (arrValues) => {
  let result = arrValues.join("");
  if (result) {
    result = eval(result);
    //   result = result.toFixed(10);
    result = String(result);
    return result;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "clear": {
      return [];
    }
    case "erase": {
      let Arr = [...state];
      if (Arr.length === 0) {
        return Arr;
      } else {
        return Arr.slice(0, -1);
      }
    }
    case "equal": {
      let finalResult = [];
      finalResult.push(calculateValues(state));
      return finalResult;
    }
    default:
      if (action.type !== "equal") {
        let newArr = [...state, action.type];
        return newArr;
      } else return state;
  }
};

export default reducer;
