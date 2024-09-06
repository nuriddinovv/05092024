import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/cardComponent/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto py-4">
      <div className="mb-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="w-auto h-96 mx-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-wrap gap-3 gap-y-6">
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
    </div>
  );
}
