import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import UnctonrolledComponent from "./components/UncontrolledComponent.jsx";
import ControlledComponent from "./components/ControlledComponent.jsx"
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <UnctonrolledComponent />
      <ControlledComponent />
    </div>
  );
}

export default App;
