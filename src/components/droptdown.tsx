"use client";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className={`font-semibold text-lg inline-flex items-center hover:text-blue-600 transition-all duration-300 
        ${isOpen ? "text-blue-600" : ""}`}
        onClick={toggleDropdown}
      >
        Porcentagens{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-52 roundedLg shadowLg bg-white ring-1 ring-black ring-opacity-5">
          <ul role="menu" aria-orientation="vertical">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
                onClick={closeDropdown}
              >
                Calcular Valor
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
                onClick={closeDropdown}
              >
                Calcuar Porcentagem
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
