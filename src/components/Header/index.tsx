import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
    <header>
        <nav className="flex justify-around">
          <Link to={'/'} >Home</Link>
          <Link to={'/product'}>Products</Link>
          {/* <Link to={"/about"}>About</Link> */}
          <Link to={`/about`}>About</Link>
        </nav>
    </header>
    </>
  )
};

export default index;
