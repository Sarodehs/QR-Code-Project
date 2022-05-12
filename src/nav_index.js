import React from "react";
import Sidebar from "./Navigation/Sidebar";
import ReactDOM from "react-dom";
import Select from "react-select";
import "./Navigation/navigation.css";


function App() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);





