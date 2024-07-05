import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState<number>(0);

  const handleChangeAge = (event: any) => {
    // console.log(event.target);
    setAge(event.target.value);
  };

  const handleCalculateAge = useMemo(() => {
    if(!age) return <></>
    const currentYear = new Date().getFullYear();
    console.log("calculation");
    return currentYear - age;
  },[age]);

  console.log("render");
  return (
    <>
      <div className="wrapper w-full flex flex-col justify-center items-center h-screen">
        <h1>Age Calculator</h1>
        <div className="container flex flex-col justify-center items-center p-5">
          <input
            className="border"
            type="text"
            placeholder="enter your age"
            onChange={handleChangeAge}
          />
          <button onClick={handleCalculateAge} className="">
            submit
          </button>
        </div>
        {handleCalculateAge ? (
          <p>your age is {handleCalculateAge}</p>
        ) : null}
      </div>
    </>
  );
}

export default App;
