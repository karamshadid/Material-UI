import React from "react";
import "./App.css";
import Context from "./component/Context";
import MovieList from "./component/MoviesList";
import AddMovie from "./component/AddMovie";
import NavBar from "./component/NavBar";

export default function App() {
  return (
    <Context>
      <div>
        <NavBar />
        <MovieList />
        <AddMovie />
      </div>
    </Context>
  );
}
