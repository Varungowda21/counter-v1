import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cm.css";
import { useEffect, useReducer } from "react";
import CounterForm from "./CounterForm";
import CounterList from "./CounterList";
export default function CounterManager() {
  // const [counters, setCounters] = useState([]);
  const counterReducer = (state, action) => {
    if (action.type == "SET-COUNTERS") {
      return [...action.payload];
    } else if (action.type == "ADD-COUNTERS") {
      return [...state, action.payload];
    } else if (action.type == "REM-COUNTER") {
      return state.filter((ele) => {
        return ele._id !== action.payload;
      });
    } else if (action.type == "INC-COUNTER") {
      return state.map((ele) => {
        if (ele._id == action.payload) {
          return { ...ele, count: ele.count + 1 };
        } else {
          return { ...ele };
        }
      });
    } else if (action.type == "DEC-COUNTER") {
      return state.map((ele) => {
        if (ele._id == action.payload) {
          return { ...ele, count: ele.count - 1 };
        } else {
          return { ...ele };
        }
      });
    } else if (action.type == "RES-COUNTER") {
      return state.map((ele) => {
        if (ele._id == action.payload) {
          return { ...ele, count: 0 };
        } else {
          return { ...ele };
        }
      });
    } else if (action.type == "UPDBY-COUNTER") {
      return state.map((ele) => {
        if (ele._id == action.payload.id) {
          return { ...ele, count: action.payload.input };
        } else {
          return { ...ele };
        }
      });
    }
  };
  const [counters, dispatch] = useReducer(counterReducer, []);
  useEffect(() => {
    axios.get("http://localhost:3121/api/counters").then((res) => {
      const result = res.data;
      console.log(result);
      dispatch({ type: "SET-COUNTERS", payload: result });
    });
  }, []);
  console.log(counters);
  return (
    <>
      <div className="center">
        <h1>Counter app</h1>
        <h4>Counter-List : {counters.length}</h4>
        <CounterForm dispatch={dispatch} />
      </div>
      <CounterList counters={counters} dispatch={dispatch} />
    </>
  );
}
