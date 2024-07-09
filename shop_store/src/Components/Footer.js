import React from "react";
import appImg from '../Assets/images/appedit2.png';
import ggleImg from '../Assets/images/play2-Photoroom.png';

function Footer() {
  return (
    <div className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-8 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 mr-10">
            <h1 className="text-white font-irish text-3xl font-normal">
              Jules Groceries
            </h1>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="pr-4 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 6L12 11L4 6H20ZM4 18V8.238L12 13L20 8.238V18H4Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Email page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 2C4.46243 2 2 4.46243 2 7.5V16.5C2 19.5376 4.46243 22 7.5 22H16.5C19.5376 22 22 19.5376 22 16.5V7.5C22 4.46243 19.5376 2 16.5 2H7.5ZM16.5 4C18.433 4 20 5.567 20 7.5V16.5C20 18.433 18.433 20 16.5 20H7.5C5.567 20 4 18.433 4 16.5V7.5C4 5.567 5.567 4 7.5 4H16.5ZM17 5C16.4477 5 16 5.44772 16 6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6C18 5.44772 17.5523 5 17 5ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22.46 6.011c-.793.351-1.644.588-2.538.695.912-.547 1.614-1.413 1.944-2.443-.854.508-1.8.876-2.805 1.074a4.515 4.515 0 0 0-7.691 4.116 12.804 12.804 0 0 1-9.302-4.718 4.515 4.515 0 0 0 1.397 6.021 4.475 4.475 0 0 1-2.046-.566v.057a4.514 4.514 0 0 0 3.622 4.421 4.532 4.532 0 0 1-2.042.077 4.515 4.515 0 0 0 4.213 3.132A9.062 9.062 0 0 1 2 19.532a12.773 12.773 0 0 0 6.924 2.032c8.305 0 12.843-6.876 12.843-12.842 0-.196-.004-.392-.012-.586a9.168 9.168 0 0 0 2.251-2.332l.002-.003z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="pl-4 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22.675 0H1.325C0.594 0 0 0.593 0 1.326V22.674C0 23.407 0.594 24 1.325 24H12.82V14.708H9.692V11.076H12.82V8.413C12.82 5.301 14.71 3.673 17.467 3.673C18.821 3.673 19.887 3.77 20.194 3.811V7.002H18.185C16.58 7.002 16.275 7.82 16.275 9.007V11.076H20.072L19.605 14.708H16.275V24H22.675C23.406 24 24 23.407 24 22.674V1.326C24 0.593 23.406 0 22.675 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M23.499 6.203c-.265-1.119-1.213-2.004-2.353-2.234C18.779 3.5 12 3.5 12 3.5s-6.779 0-9.146.469c-1.141.23-2.088 1.115-2.353 2.234C0 8.725 0 12 0 12s0 3.275.501 5.797c.265 1.119 1.213 2.004 2.353 2.234C5.221 20.5 12 20.5 12 20.5s6.779 0 9.146-.469c1.141-.23 2.088-1.115 2.353-2.234C24 15.275 24 12 24 12s0-3.275-.501-5.797zM9.601 15.39v-6.78l6.535 3.39-6.535 3.39z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Youtube account</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-inter font-bold text-white">
              Legal
            </h2>
            <ul className="text-white  text-base font-inter font-normal">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-xl font-inter font-bold text-white">
                Company
              </h2>
              <ul className="text-white  text-base font-inter font-light">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-inter font-bold text-white">
              Download Jules Grocies Mobile App
              </h2>
              <div className="bg-white w-28 flex space-x-4">
                <img 
                src={appImg}
                />
                <img 
                src={ggleImg}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-white sm:text-center font-inter">
            © 2024 Jules Groceries. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
