import React from 'react';
import {AppContext} from './AppContext';


export default function Home() {

  const {value, setValue} = React.useContext(AppContext)

  return (
    <div>
    <h1>Home</h1>

    <h4>
    <i>
      {value}
    </i>
    </h4>

    <button onClick={()=>{
      setValue("context value changed from home page...")
    }} >
    click here to change
    </button>

    </div>
  )
}
