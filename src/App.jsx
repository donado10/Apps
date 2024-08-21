import React from "react";
import background from "./assets/background.png";
import Container from "./Components/Container";
import Background from "./Components/Background";

function App() {
  return (
    <div className="w-screen min-h-[100vh] flex items-center justify-center flex-col  ">
      <Background />
      <Container />
    </div>
  );
}

export default App;
