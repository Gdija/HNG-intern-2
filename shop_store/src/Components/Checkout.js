import React from "react";
import Nav from "./Nav";
import "../Assets/checkout.css";
import Footer from "./Footer";

function Checkout() {
  return (
    <>
      <Nav />
      <div className="checkout-container lg:items-center lg:justify-center lg:h-screen max-lg:py-4 ">
        <h2 className="heading">Check Out</h2>
        <div className="checkout-content lg:flex lg:space-x-8">
          <div className="form lg:w-2/3 sm:w-1/3 sm:ml-2">
            <form className="ml-24 mt-8 space-y-6">
              {/* <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4"> */}
              <div className="flex flex-col text-left">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 text-black text-900 font-inter"
                >
                  House Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter house address"
                  className=" font-inter px-4 py-3.5 bg-white text-gray-800 w-80 text-sm border rounded-md focus:border-[#ea00b7] outline-none"
                />
              </div>

              <div className="flex flex-col text-left">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-black text-900 font-inter"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  className=" font-inter col-span-full px-4 py-3.5 bg-white text-gray-800 w-80 text-sm border rounded-md focus:border-[#ea00b7] outline-none"
                />
              </div>
              <div className="flex flex-col text-left">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-black text-900 font-inter"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  placeholder="Enter phone number"
                  className=" font-inter col-span-full px-4 py-3.5 bg-white text-gray-800 w-80 text-sm border rounded-md focus:border-[#ea00b7] outline-none"
                />
              </div> 
              <div className="flex flex-col text-left font-inter font-normal">
                <p className="delivery w-60 pl-2 py-2 ">Delivery Fee <span class="ml-10 font-bold">NGN 1,550</span></p>
              </div>
            </form>
          </div>
          <div className="order-content rounded-md lg:w-1/3 md:pt-10 mb-2 sm:w-2/3">
            <h3 className="text-left ml-10 text-lg font-inter font-bold text-white">
              Order Sumary
            </h3>
            <ul class="text-gray-800 mt-6 space-y-3">
              <li class="text-white flex flex-wrap gap-4 text-sm mx-10">
                Millo Refil 800g{" "}
                <span class="ml-auto font-bold">NGN 3,200</span>
              </li>
              <li class="text-white flex flex-wrap gap-4 text-sm mx-10">
                Millo Refil 800g{" "}
                <span class="ml-auto font-bold">NGN 3,200</span>
              </li>
              <li class="text-white flex flex-wrap gap-4 text-sm mx-10">
                Millo Refil 800g{" "}
                <span class="ml-auto font-bold">NGN 3,200</span>
              </li>
              <li class="text-white flex flex-wrap gap-4 text-sm mx-10">
                Millo Refil 800g{" "}
                <span class="ml-auto font-bold">NGN 3,200</span>
              </li>
              <li class="text-white flex flex-wrap gap-4 text-sm mx-10">
                Millo Refil 800g{" "}
                <span class="ml-auto font-bold">NGN 3,200</span>
              </li>
              <li>
                <hr className="mt-6 mx-10 border-white sm:mx-10 lg:my-8" />
              </li>
              <li class="text-white flex flex-wrap gap-4 text-xl mx-10 font-bold">
                Subtotal<span class="ml-auto font-bold">NGN 16,000</span>
              </li>
              <li>
                <hr className="mt-6 mx-10 border-white sm:mx-10 lg:my-8" />
              </li>
              <li class="text-white flex flex-wrap gap-4 text-xl mx-10 font-bold">
                Delivery fee<span class="ml-auto font-bold">NGN 1,550</span>
              </li>
              <li>
                <hr className="mt-6 mx-10 border-white sm:mx-10 lg:my-8" />
              </li>
              <li class="text-white flex flex-wrap gap-4 text-xl mx-10 font-bold">
                Total<span class="ml-auto font-bold">NGN 17,550</span>
              </li>
            </ul>
            <hr className="mt-6 mx-10 border-white sm:mx-10 lg:my-8" />

            <div class="flex flex-wrap gap-4 mt-8 justify-center pb-8">
              <button
                type="button"
                class="button font-inter font-medium w-64 px-7 py-3.5 text-sm tracking-wide bg-white hover:bg-gray-50 rounded-md"
              >
                <span className="gradient-text">Complete Order</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
