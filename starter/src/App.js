import "./App.css";
import ListBooks from "./components/ListBooks";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchBook from "./components/SearchBook";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBook />} />
      </Routes>
    </div>
  );
}

export default App;