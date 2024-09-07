import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiAlignJustify } from "react-icons/fi";
import MultipleDemo from "../bigMenu/MultipleDemo";
import { Sidebar } from "primereact/sidebar";
import ru_flag from "../../Assets/ru_flag.svg";
import uz_flag from "../../Assets/uz_flag.svg";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="container mb-3">
        <header className="flex justify-between my-2">
          <Link to={"/"} className="text-3xl">
            LOGO
          </Link>
          <div className="card flex justify-center items-center gap-3 z-20">
            <div className="flex gap-3 ">
              <Link className="hover:text-red-500 transition-all" to={"/about"}>
                Biz haqimizda
              </Link>
              <Link
                className="hover:text-red-500 transition-all"
                to={"/contact"}
              >
                Bog'lanish
              </Link>
            </div>

            <div className="card flex justify-content-center">
              <select className="bg-[#FB0F40] outline-none rounded text-white p-2 px-4">
                <option value="uz">Uzbek</option>
                <option value="ru">Rus</option>
              </select>
            </div>
          </div>
        </header>
        <nav className="flex w-full items-center gap-[25px]">
          <div className="">
            <button
              onClick={() => setOpenMenu(() => setVisible(true))}
              className="flex items-center gap-2 bg-[#FB0F40] hover:bg-[#d03939] transition text-white py-[14px] px-[20px] rounded"
            >
              <span className="text-2xl">
                {openMenu ? <IoClose /> : <FiAlignJustify />}
              </span>
              <p className="hidden md:block"> Katalog</p>
            </button>
          </div>
          <div className="w-full">
            <form className="">
              <div className="flex items-center bg-gray-200 px-2 rounded">
                <input
                  type="search"
                  className="w-full p-1 bg-gray-200 outline-none h-[52px]"
                />
                <button className="text-2xl">
                  <CiSearch />
                </button>
              </div>
            </form>
          </div>
          <div className="hidden md:flex">
            <Link to={"/favorite"} className="flex flex-col items-center">
              <span className="text-2xl">
                <MdFavoriteBorder />
              </span>
              Saralangan
            </Link>
          </div>
        </nav>
      </div>
      <div className="">
        <div className="card flex justify-content-center">
          <Sidebar
            className="px-4 py-8 bg-white shadow-2xl w-auto"
            visible={visible}
            onHide={() => setVisible(false)}
          >
            <div className="pt-4">
              <div className="">
                <MultipleDemo />
              </div>
            </div>
          </Sidebar>
        </div>
      </div>
    </div>
  );
}
