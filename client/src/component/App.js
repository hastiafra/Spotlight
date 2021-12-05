import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";


//children
import Home from "./signIn/Home";
import Location from "./location/Location";


const App = () =>{
  return (
    
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          {/* {/* <Route path="/signIn" >
            <SignIn />
          </Route> */}
          <Route path="/location">
            <Location/>
          </Route> 
        </Switch>
      </div>
    </BrowserRouter>
  
  );
};

export default App;
