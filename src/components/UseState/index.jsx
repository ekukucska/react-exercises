import React, { useState } from "react";

// Functional updates:
// If the new state is computed using the previous state, 
// you can pass a function to setState.
// The function will receive the previous value, and return an updated value.

const UseState = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [hero, setHero] = useState({ name: "Superman", team: "Justice League" });

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

  const setHeroToIronMan = () => {
    setHero((prevVal) => {
      return {
        ...prevVal,
        name: "Iron Man",
        team: "Avengers"
      };
    });
  }
  const setHeroToWolverine = () => {
    setHero((prevVal) => {
      return { name: "Deadpool" };
    });
  }
  const setHeroToSuperman = () => {
    setHero((prevVal) => {
      return {
        ...prevVal,
        name: "Superman",
        team: "Justice League"
      }
    });
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
      <br />
      <h4>useState - updating state object with spread syntax:</h4>
      <p>Hero name: {hero.name}</p>
      <p>Team: {hero.team}</p>
      <button onClick={setHeroToIronMan}>Iron Man</button>
      <button onClick={setHeroToWolverine}>Deadpool</button>
      <button onClick={setHeroToSuperman}>Superman</button>
      <br />
      <p><i>*Wolverine only passes the changed parameter, while Superman and Iron Man use the spread syntax, to keep all parameters, even those that remain the same.</i></p>
    </>
  );
};

export default UseState;
