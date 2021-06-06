import React from "react";
import {AppContext} from './AppContext';


export default function About() {

const {value, setValue} = React.useContext(AppContext)

  return (
    <div>
    <h1>About</h1>

    <h4>
    <i>
      {value}
    </i>
    </h4>

    <button onClick={()=>{
      setValue("context value changed from about page...")
    }} >
      click here to change
    </button>

    </div>
  )
}
