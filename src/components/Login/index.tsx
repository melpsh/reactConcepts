import React, { useState } from "react";

const index = () => {
  const [data, setData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
  });

  const handleClick = () => {
    setData({...data,
        firstName:"mahtab",
        lastName:"mohammadi"
    })
  };

  return (
    <>
      <h1>Hello {data.firstName} {data.lastName}</h1>
      <button className="bg-red-300 border rounded-md" onClick={handleClick}>Login</button>
    </>
  );
};

export default index;
