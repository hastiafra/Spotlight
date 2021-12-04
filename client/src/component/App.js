import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

//children
import SignIn from "./signIn/SignIn";


const App = () =>{
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          {/* <Route path="/signIn" >
            <SignIn />
          </Route>
          <Route path="/profile/:id">
            <Profile/>
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
