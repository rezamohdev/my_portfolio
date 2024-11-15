import React from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "../Header/Header.js";
import { Item } from "../Item/Item";
import { List } from "../List/List";
import {Route, Router} from "react-router-dom";

// import { Routes, Route } from "react-router-dom";
function store({match}) {
    let {id } = match.params;
    const imageHasLoaded = true;
    return (
        <>
            <List selectedId={id} />
            <AnimatePresence>
                {
                    id && imageHasLoaded && <Item id={id} key="item"/>
                }
            </AnimatePresence>
        </>
    )
}
function App() {
  return (
    <div className="App">
      <Header />
        <Router>
            <Route path={["/:id", "/"]} component={store} />
        </Router>
    </div>
  );
}

export default App;
