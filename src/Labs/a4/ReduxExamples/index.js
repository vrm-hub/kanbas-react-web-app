import React from "react";
import AddRedux from "./AddRedux";
import CounterReducer from "./CounterRedux";
import HelloReducer from "./HelloRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <HelloReducer />
      <CounterReducer />
      <AddRedux />
      <TodoList />
      <br />
    </div>
  );
};

export default ReduxExamples;
