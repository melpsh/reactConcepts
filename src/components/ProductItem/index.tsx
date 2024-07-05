import { Link, useParams } from "react-router-dom";

const index = () => {
  const {id} =useParams()
  return (
    <div className="border">
      <div>{id}</div>
      <Link 
      className="border rounded-md bg-gray-300 w-16 h-8 m-2 justify-center items-center"
      to={`/Product`}>Products</Link>
    </div>
  )
};

export default index;