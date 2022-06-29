export const reducerName = (state, action) => {
  switch (action) {
    case "John":
      return { name: "John", age: 34 };
    case "Billy":
      return { name: "Billy", age: 25 };
    default:
      return { name: "unknown", age: "unknown" };
  }
}

export const reducerLocalization = (state, action) => {
  switch (action) {
    case "US":
      return { country: "USA", language: "English" };
    case "FR":
      return { country: "France", language: "French" };
    default:
      return { country: '', language: '' };
  }
}
