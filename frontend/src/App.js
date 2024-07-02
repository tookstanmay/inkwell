import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/About.js";
import { Home } from "./components/Home.js";
import { Navbar } from "./components/Navbar.js";
import NoteState from "./context/notes/NoteState.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import "./components/navbar.css";
import Alert from "./components/Alert.js";
import { Contact } from "./components/Contact.js";
import { Github } from "./components/Github.js";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <NoteState>
      <Router>
        <div className="App">
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <Switch>
            <Route key={"about"} exact path="/about">
              <About />
            </Route>
            <Route key={"contact"} exact path="/contact">
              <Contact />
            </Route>
            <Route key={"github"} exact path="/github">
              <Github />
            </Route>
            <Route key={"home"} exact path="/">
              <Home />
            </Route>
            <Route key={"login"} exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route key={"signup"} exact path="/signup">
              <Signup showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
