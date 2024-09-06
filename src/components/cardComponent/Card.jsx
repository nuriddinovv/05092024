import React from "react";
import "./card.css";
const Card = ({ img, title, desc, price }) => {
  return (
    <div className="w-full md:w-56 h-auto bg-white shadow-md rounded-md flex flex-col justify-start p-5 gap-3 relative card mx-auto">
      <div className="">
        <img src={img} alt={title} className=" h-[200px] mx-auto card_img" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <p className="text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </p>
        </div>
        <hr className="border-2" />
        <div className="flex items-center justify-between">
          <div className="">
            <p>$ {price}</p>
          </div>
          <div className="">
            <button data-quantity="0" class="btn-cart">
              <svg
                class="icon-cart"
                viewBox="0 0 24.38 30.52"
                height="30.52"
                width="24.38"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>icon-cart</title>
                <path
                  transform="translate(-3.62 -0.85)"
                  d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                ></path>
              </svg>
              <span class="quantity"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
