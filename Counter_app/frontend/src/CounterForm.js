import { useState } from "react";
import axios from "axios";
export default function CounterForm({ dispatch }) {
  const [count, setCount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      count: Number(count),
    };
    console.log(data);
    axios.post("http://localhost:3121/api/counters", data).then((res) => {
      const result = res.data;
      dispatch({ type: "ADD-COUNTERS", payload: result });
    });
  };
  return (
    <>
      <h5>Add counter</h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Enter Count value : </label>

        <input
          type="number"
          id="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
}
