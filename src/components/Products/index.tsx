import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IData {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const index = () => {
  const [posts, setPosts] = useState<[]>([]); 

  const fetchingData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  };

  console.log(posts);

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      {posts.map((item: IData) => (
        <div key={item.id}>
          <Link to={`/product/${item.id}`}>{item.title}</Link>
          <p>{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default index;
