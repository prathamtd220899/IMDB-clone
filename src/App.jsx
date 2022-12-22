import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import Header from "./components/Header/Header";
import Movie from "./pages/MovieDetails/MovieDetails";
import MovieList from "./components/MovieList/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
