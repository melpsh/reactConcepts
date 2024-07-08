import { useMemo, useRef, useState } from "react";
import Button from "./components/Button/Button";
import "./App.css";

function App() {

  const [number, setNumber] = useState(0);
  const [btnTitle, setBtnTitle] = useState('');

  const handleSecondBtnD = () => {
    setNumber(number+1)
  };

  return (
    <div className="flex flex-col">
      <Button  title={btnTitle}>
        Submit
      </Button>
      <button className="border rounded-md p-5 border-black" onClick={handleSecondBtnD}>Second Button</button>
      <button onClick={()=>setBtnTitle('asghar')}>change title</button>
    </div>
  );
}

export default App;
