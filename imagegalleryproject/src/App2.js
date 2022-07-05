import React, { useEffect, useLayoutEffect } from "react";

const App2 = () => {
  useEffect(() => {
    //component DID Mount
    console.log("use Effect Hook!!!");
  }, []);
  useLayoutEffect(() => {
    console.log("use Layout Effect Hook!!!");
  }, []);
  return <div>appppp</div>;
};

export default App2;
