import React from "react";
import "./App.css";
// import ReactDOM from'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Tab from "./components/Tab/Tab";
import Details from "./components/Details/Details";
import Checkout from "./components/Checkout/Checkout";
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Header />
            <Tab />
          </Route>
          <Route path="/details/:itemid" component={Details} />
          <Route path="/details"></Route>

          {/* <Route path="*">
            <Redirect path="/"/>
          </Route> */}

          <Route path="/about">
            <h1>About us</h1>
          </Route>
          <Route path="/contact">
            <h1>contact us</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// apiKey: "AIzaSyCjqCPbBYog1aE-ruXXmRp8Kt5Or414Qc4",
// authDomain: "fir-7d4b9.firebaseapp.com",
// databaseURL: "https://fir-7d4b9.firebaseio.com",
// projectId: "fir-7d4b9",
// storageBucket: "fir-7d4b9.appspot.com",
// messagingSenderId: "462327777114",
// appId: "1:462327777114:web:05e6803b828a90141dd563",
// measurementId: "G-FJ6ZR4M90M"

// let content = datas.filter((item) => {
//   // console.log("Item got ", item);
//   //access state here ;
//   let currentState = props.type;
//   return item.category === currentState;
// });
