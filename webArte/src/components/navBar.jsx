import React from "react";
import Button from "./button";

export default function NavBar() {
  return (
    <header class="text-gray-300 body-font border-b-2 border-blue-400 mb-5">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-400 mb-4 md:mb-0">
        <a href="http://localhost:5173">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
             <path  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

          </svg>
          </a>
          <span class="ml-3 text-xl text-white">Conoce de Arte</span>
         
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="http://localhost:5173/artistas" class="mr-5 hover:text-blue-400">Artistas</a>
          <a class="mr-5 hover:text-blue-400">Second Link</a>
          <a href="http://localhost:5173/login" class="mr-5 hover:text-blue-400 ">Login</a>
          <a href="http://localhost:5173/register" class="mr-5 hover:text-blue-400 ">Register</a>
        </nav>
        {/* <button class="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
}
