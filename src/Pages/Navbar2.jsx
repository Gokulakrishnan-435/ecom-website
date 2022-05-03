import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImCart } from "react-icons/im";

const Navbar2 = () => {
  let basket = useSelector(state => state.reducer.basket);
  return (
    <section className="w-full h-20 bg-zinc-900">
      <article className="flex w-4/5 mx-auto justify-between">
        <Link to="/">
          <div className="font-bold text-4xl p-3 text-white">
           eShoppers
          </div>
        </Link>
        <div className="w-4/5 p-4  ">
          <input
            type="search"
            placeholder="Search your products"
            className="w-full h-10 p-3 rounded-md"
          />
          {/* <BsSearch className='text-2xl text-white p'/> */}
        </div>
        <div>
          <ul className="flex p-5">
            <li className="mx-2 text-white flex ">
              <FaUserAlt className="text-3xl mx-4 -m-2 fill-yellow-400" />
              <Link to="/register">SignUp</Link>
            </li>
            <li className="mx-2 text-white flex">
              <AiOutlineLogin className="text-3xl mx-4 -m-2 fill-yellow-400" />
              <Link to="/login"> LogIn</Link>
            </li>
            <li className="mx-2 text-white flex">
              <Link to="/checkout">
                <ImCart className="font-bold text-3xl mx-4 -m-2  fill-yellow-400" />
              </Link>
              <sup className=" text-sm">{basket && basket.length}</sup>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar2;
