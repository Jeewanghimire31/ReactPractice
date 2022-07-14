import React from "react";
import LoggedIn from "./component/state/LoggedIn";
import User from "./component/state/User"
// import Button from "./component/button";
// import Container from "./component/container";
// import Input from "./component/input";
// import Greet from './component/greet';
// import Person from './component/person';
// import Personlist from './component/personlist';
// import Status from "./component/status";

function App() {
  // const personName = {
  //   first:"Jeewan",
  //   last:"Ghimire"
  // }

  // const nameList= [
  //   {
  //     first:"jeewan",
  //     last:"Ghimire"
  //   },
  //   {
  //     first:"Hello",
  //     last:"HY"
  //   },
  //   {
  //     first:"Welcome",
  //     last:"Home"
  //   }
  // ]
  return (
    <div>
      {/* <Greet name ="Jeewan Ghimire" contact={9867823952} />
      <Greet name ="pramesh karki" contact={9842473580} />

      <Person name={personName} />

      <Personlist names={nameList}/>

      <Status status="success"/>

      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />

      <Input
        handleChange={(event) => {
          event.preventDefault();
          console.log(event);
        }}
        />
        <Container styles={{border:".1rem solid red", padding:"1rem", margin:"1rem"}}/> */}


        <LoggedIn />
        <User/>
    </div>
  );
}

export default App;
