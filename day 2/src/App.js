import logo from "./logo.svg";
import "./App.css";

function App() {
  // let name = "Jeewan Ghimire";
  // const printName = ()=>"Hey Buddy!!!"

  // const date = new Date().getFullYear();  

  const colors = ["red", "yellow", "dirtyFellow"];
  const index = Math.floor(Math.random()*3);
  return (
    <div className="App">
      {/* Hello {name} its so going well */}

      {/* <p>Hey What you are doing</p> */}

      {/* {printName()}  */}

      {/* {date} */}

      I like
      {" "+colors[index]+" Color"}


    </div>
  );
}

export default App;
