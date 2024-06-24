import CounterItem from "./CounterItem";

export default function CounterList({ counters, dispatch }) {
  return (
    <>
      <ul>
        {counters.map((ele) => {
          return (
            <CounterItem
              key={ele._id}
              id={ele._id}
              count={ele.count}
              dispatch={dispatch}
            />
          );
        })}
      </ul>
    </>
  );
}
