import React from 'react';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter , Switch, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error"
import About from "./Pages/About"

const App = () => {
    return (
       <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/about" exact component={About} />
               <Route component={Error} />
           </Switch>
       </BrowserRouter>
    );
};

export default App;
