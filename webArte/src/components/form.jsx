import React from "react";
import Bloques from "./bloques";


export default function Formulario({titulo, descripcion, titulo_labenOne, titulo_labenTwo, TextButton}) {
  return (
    //#region Descripcion
    <>
    
  

    <section class="text-gray-400 bg-gray-900 body-font min-h-screen flex flex-col">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-white">{titulo}</h1>
          <p class="leading-relaxed mt-4">{descripcion}
          </p>
          
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-white text-lg font-medium title-font mb-5">
            {titulo}
          </h2>
          
          <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-gray-400">
              {titulo_labenOne}
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-400">
            {titulo_labenTwo}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            {TextButton}
          </button>
          <p class="text-xs mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
    </>
    
  );
}
