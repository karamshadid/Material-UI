import React from "react";
import { MovieContext } from "./Context";
import Movie from "./Movie";

export default function MovieList() {
  const [state] = React.useContext(MovieContext);
  //console.log(state);

  return (
    <div>
      {state.map(names => (
        <Movie
          key={names.id}
          name={names.movie}
          rating={names.rating}
          release={names.release}
        />
      ))}
    </div>
  );
}
