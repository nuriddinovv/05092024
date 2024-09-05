import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          to="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <span className="ml-3 text-xl">Company name</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 Company —
          <Link
            to={"/"}
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
          >
            @knyttneve
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            to={"/"}
            className="text-gray-500 grayscale hover:grayscale-0 transition-all
          "
          >
            <img
              className="w-6 mx-1"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
              alt=""
            />
          </Link>
          <Link
            to={"/"}
            className="text-gray-500 grayscale hover:grayscale-0 transition-all
          "
          >
            <img
              className="w-6 mx-1"
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg"
              alt=""
            />
          </Link>
          <Link
            to={"/"}
            className="text-gray-500 grayscale hover:grayscale-0 transition-all
          "
          >
            <img
              className="w-6 mx-1 "
              src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
              alt=""
            />
          </Link>
        </span>
      </div>
    </footer>
  );
}
<svg
  fill="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  className="w-5 h-5"
  viewBox="0 0 24 24"
>
  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
</svg>;
