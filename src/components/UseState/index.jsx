import React, { useState } from "react";

// Functional updates:
// If the new state is computed using the previous state, 
// you can pass a function to setState.
// The function will receive the previous value, and return an updated value.

const UseState = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  }
  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  }
  const resetCount = () => {
    setCount(0);
  }

  const userJohn = () => {
    setUser({ name: 'John', age: 34 });
  }
  const userBill = () => {
    setUser({ name: 'Bill', age: 49 });
  }

  const toDoList = () => {
    setList(['buy groceries', 'cook lunch', 'vacuum', 'workout']);
  }
  const shoppingList = () => {
    setList(['bread', 'apples', 'milk', 'chicken', 'eggs', 'oranges']);
  }

  return (
    <>
      <h4>useState - passing a function:</h4>
      <div>If the new state is computed using the previous state, you can pass a function to setState.</div>
      <br />
      <div>Counter: {count}</div>
      <br />
      <button onClick={increaseCount}>Icrease count</button>
      <button onClick={resetCount}>Reset count</button>
      <button onClick={decreaseCount}>Decrease count</button>
      <h4>useState - with an object value:</h4>
      <div>User: {user.name}</div>
      <div>Age: {user.age}</div>
      <button onClick={userJohn}>John</button>
      <button onClick={userBill}>Bill</button>
      <br />
      <h4>useState - with an array value:</h4>
      <button onClick={toDoList}>To Do List</button>
      <button onClick={shoppingList}>Shopping List</button>
      <p>List:</p>
      <ul>
        {list.map((listItem) => (
          <li key={listItem}>{listItem}</li>)
        )}
      </ul>
    </>
  );
};

export default UseState;
