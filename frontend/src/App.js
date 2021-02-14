import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import form_component from "./components/form_component";
import list_component from "./components/list_component";

function App() {
  return (
    <Router>
      <Route path="/" exact component={form_component} />
      <Route path="/" exact component={list_component} />
    </Router>
  );
}

export default App;
