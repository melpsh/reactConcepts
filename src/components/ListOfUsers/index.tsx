// import React, { useState } from "react";

// const index = () => {

//     const [name, setName] = useState<string>("");
//     const [list, setList] = useState<string[]>([]);

//     const handleAddingMember = () => {
//         setList([...list,name]);
//         setName("")
//         console.log(list);
//     }

//     const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//         if (event.key === "Enter") {
//           handleAddingMember();
//         }
//       };

//   return (
//     <>
//     <input type="text" placeholder="add the member name" value={name} onChange={(e)=> setName(e.target.value)}/>
//     <button onClick={handleAddingMember} onKeyPress={handleKeyPress}>Add a member</button>
//     <ul>
//         {list.map((item,index) => (
//             <li key={index}> {item} </li>
//         ))}
//     </ul>
//     </>
//   )
// };

// export default index;
