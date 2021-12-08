import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";


//children
import Home from "./signIn/Home";
import Location from "./location/Location";
import Loading from "./Loading";


const App = () =>{
  return (
    
    <>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
           {/* <Route path="/loading" >
            <Loading />
          </Route> */}
          <Route path="/location">
            <Location/>
          </Route> 
        </Switch>
      </div>
    </>
  
  );
};

export default App;
