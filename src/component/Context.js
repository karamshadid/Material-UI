import React from "react";
export const MovieContext = React.createContext();
export default function Context(props) {
  const [state, setstate] = React.useState([
    {
      movie: "Casablanca",
      rating: 9,
      release: 1942,
      id: 1
    },
    {
      movie: "Gone girl",
      rating: 8,
      release: 1939,
      id: 2
    },
    {
      movie: "Thunder",
      rating: 6,
      release: 1962,
      id: 2
    }
  ]);

  return (
    <MovieContext.Provider value={[state, setstate]}>
      {props.children}
    </MovieContext.Provider>
  );
}
