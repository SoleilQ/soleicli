import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";

const Hello = () => {
  const [text, setText] = useState("Hello Solei!");

  return <span onClick={() => setText("Hi!")}>{text}</span>;
};

const Layout = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Hello />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("solei") as HTMLElement
);
root.render(React.createElement(App));
