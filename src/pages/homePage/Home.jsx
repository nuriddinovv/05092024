import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/cardComponent/Card";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container flex flex-wrap gap-2">
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.image}
          title={item.title}
          desc={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}
