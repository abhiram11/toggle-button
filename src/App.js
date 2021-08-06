import React, { useState } from "react";
import "./styles.css";
import Switch from "./components/Switch";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <Switch
        rounded={true}
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
    </div>
  );
}
