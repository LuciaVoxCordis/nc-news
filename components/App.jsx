import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Navigation from "./navigation";
import SearchProvider from "./RouteHandler";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <SearchProvider />
    </>
  );
}

export default App;
