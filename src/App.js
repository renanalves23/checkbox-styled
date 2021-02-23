import React, { useState } from "react";
import "./styles.css";

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
  CheckBoxWraper
} from "./styles";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Checkbox />
    </>
  );
}

function Checkbox() {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }
  return (
    <>
      <CheckboxContainer
        checked={checked}
        // disabled
        onClick={handleCheckboxChange}
      >
        <HiddenCheckbox
          onChange={handleCheckboxChange}
          // disabled
          checked={checked}
        />

        {/* <StyledCheckbox checked={checked} /> */}
        {/* <Text checked={checked}>Instagram</Text> */}
      </CheckboxContainer>
    </>
  );
}
