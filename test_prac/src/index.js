import React from "react";
import ReactDOM from "react-dom";
import Components from "./Component/Component.jsx";
import Comp from "./Component/Component2.jsx";
import TestCall from "./Component/test_props_call.jsx";
import SetState from "./Component/Set_State.jsx";
import Counter from "./Component/Counter.jsx";
import Form from "./Component/Form.jsx";
import Refs from "./Component/Refs.jsx";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Components />,
    <Comp />,
    <TestCall />,
    <SetState />,
    <Counter />
    <Form />
    <Refs />
  </React.StrictMode>,
  document.getElementById("root")
);

// const props_call = [
//   value:{

//   }
// ]
// const props_call = {
//   header1: "How the Dwag?",
//   header2: "Wassup Yo Nigga!",
// };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
