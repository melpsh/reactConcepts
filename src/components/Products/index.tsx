import { useEffect, useState } from "react";
import { IProducts } from "./types";

const index = ({title}: IProducts) => {
  const [counter, setCounter] = useState(0);
  
  const handleClick = () => { 
    setCounter(counter+1);
   }
   
   useEffect(() => {
    console.log('inside the product cpmt');
    console.log(title);
  }, [title]);
   
  
  return (
    <>
    <div className="flex justify-center items-center h-screen">Product</div>
    <span>
      {counter}
    </span>
    <button onClick={handleClick}>click me</button>
    </>
  )
};

export default index;
