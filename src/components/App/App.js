import React from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "../Header/Header.js";
import { Item } from "../Item/Item";
import { List } from "../List/List";

// import { Routes, Route } from "react-router-dom";
function store({match}) {
    let {id } = match.params;
    const imageHasLoaded = true;
}
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
