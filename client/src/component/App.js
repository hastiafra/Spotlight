import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";


//children
import Home from "./signIn/Home";
import Location from "./location/Location";
import Search from "./search/Search";
import Profile from "./profile/Profile"


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
          <Route path="/location">
            <Location opened={opened} setOpened={setOpened} />
          </Route> 
          <Route path="/search" >
            <Search opened={opened} setOpened={setOpened} />
          </Route>

          <Route path="/profile" >
            <Profile opened={opened} setOpened={setOpened} />
          </Route>
          
        </Switch>
      </div>
    </>
  
  );
};

export default App;
