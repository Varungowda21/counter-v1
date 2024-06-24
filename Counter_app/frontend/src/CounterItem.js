import axios from "axios";

export default function CounterItem(props) {
  // const nextReducer = (state, action) => {
  //   if (action.type == "INC") {
  //     return state + 1;
  //   } else if (action.type == "DEC") {
  //     return state - 1;
  //   } else if (action.type == "RES") {
  //     return 0;
  //   }
  // };

  const { id, count, dispatch } = props;
  // const [nextCount, nextdispatch] = useReducer(nextReducer, count);
  // const [value, setValue] = useState(count);
  const handleInc = () => {
    console.log(id);
    console.log(typeof id);
    const newData = { count: count + 1 };
    axios
      .put("http://localhost:3121/api/counters/" + id, newData)
      .then((res) => {
        const result = res.data;
        console.log(result);
        dispatch({ type: "INC-COUNTER", payload: id });
      });
  };
  const handleDec = () => {
    const newData = { count: count - 1 };
    axios
      .put("http://localhost:3121/api/counters/" + id, newData)
      .then((res) => {
        const result = res.data;
        console.log(result);
        dispatch({ type: "DEC-COUNTER", payload: id });
      });
    // nextdispatch({ type: "DEC" });
  };
  const handleRes = () => {
    const newData = { count: 0 };
    axios
      .put("http://localhost:3121/api/counters/" + id, newData)
      .then((res) => {
        const result = res.data;
        console.log(result);
        dispatch({ type: "RES-COUNTER", payload: id });
      });
    // nextdispatch({ type: "RES" });
  };
  const handleRemove = () => {
    axios.delete("http://localhost:3121/api/counters/" + id).then((res) => {
      const result = res.data;
      console.log(result);
      dispatch({ type: "REM-COUNTER", payload: id });
    });
  };
  const handleUpdateby = () => {
    const input = window.prompt("give counter value");
    if (input) {
      const newData = { count: Number(input) };
      axios
        .put("http://localhost:3121/api/counters/" + id, newData)
        .then((res) => {
          const result = res.data;
          console.log(result);
          dispatch({ type: "UPDBY-COUNTER", payload: { id, input } });
        });
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <li>
          <br></br>
          <button onClick={handleInc}>+</button>
          {count}
          <button onClick={handleDec}>-</button>
          <br></br>
          <button onClick={handleRes}>Reset</button>
          <button onClick={handleUpdateby}>UpdCountBY</button>
          <button onClick={handleRemove}>delete</button>
        </li>
      </div>
    </>
  );
}
