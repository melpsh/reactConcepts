import React, { memo } from "react";
import { IButton } from "./type";

const Button = ({children, title}: IButton) => {
  console.log('BTN component');
  return (
    <>
    <h1>
      Melinaa
    </h1>
    <button className="p-5 border border-black">{children? children:title}</button>
    </>
  )
};

export default memo(Button);

//HOC => high order component
// ye component behesh pass midi ye component behet pass mide