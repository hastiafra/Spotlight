import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";


//children
import Home from "./signIn/Home";
import Location from "./location/Location";
import Loading from "./Loading";
import Search from "./search/Search";


const App = () =>{
  
 //phoneNavBar
  const [opened, setOpened] = useState(false);

  return (
    
    <>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
           <Route path="/search" >
            <Search opened={opened} setOpened={setOpened} />
          </Route>
          <Route path="/location">
            <Location opened={opened} setOpened={setOpened} />
          </Route> 
        </Switch>
      </div>
    </>
  
  );
};

export default App;
