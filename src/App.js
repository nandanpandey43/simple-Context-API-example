import React from 'react';
import Home from './Home';
import About from './About';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {AppContext} from './AppContext';


export default function App() {

  const [value, setValue] = React.useState("Initial Value")

  return (
    <div className="App">

    <BrowserRouter>
    <nav>
      <ul>
        {/* <li><Link to="/" > Index </Link></li> */}
        <li><Link to="/home" > Home </Link></li>
        <li><Link to="/about" > About </Link></li>
      </ul>
    </nav>
    


    <AppContext.Provider value={{value, setValue}}>

      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />

    </AppContext.Provider >

    </BrowserRouter>



      
    </div>
  );
}
