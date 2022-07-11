import React, { createContext } from 'react';
import Header from './Components/Header';

let userContext =  createContext(null);
const App2 = () => {
  return (
    <userContext.Provider value={{name:"Jeewan", age:"24", loaction:"Sankhamul"}}>
        <Header/>
    </userContext.Provider>
  )
}

export default App2;
export {userContext};