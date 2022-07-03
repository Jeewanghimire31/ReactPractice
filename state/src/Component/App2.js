import React from 'react'
import { useState } from 'react';


const App2 = () => {

    const [text, setText] = useState("");
  return (
    <div>
        
        <input type="text" onChange={(e)=>{setText(e.target.value)}}/>

        {text}
    </div>
  )
}

export default App2