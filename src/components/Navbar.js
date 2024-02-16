import React, { useState } from "react";

export default function Navbar({
  sec0,
  sec1,
  sec2,
  sec3,
  scrollHandler,
  mode,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedElement, setSelectedElement] = useState("1");

  return (
    <nav>
      <div className="logo">HARIKRISHNA MEESALA</div>
      <ul className={isSelected ? "nav-ul-small" : "nav-ul"}>
        <li
          className={selectedElement === "1" ? "selectedLi" : ""}
          onClick={() => {
            scrollHandler(sec0);
            setSelectedElement("1");
          }}
        >
          Home
        </li>
        <li
          className={selectedElement === "2" ? "selectedLi" : ""}
          onClick={() => {
            scrollHandler(sec1);
            setSelectedElement("2");
          }}
        >
          Work
        </li>
        <li
          className={selectedElement === "3" ? "selectedLi" : ""}
          onClick={() => {
            scrollHandler(sec2);
            setSelectedElement("3");
          }}
        >
          About
        </li>
        <li
          className={selectedElement === "4" ? "selectedLi" : ""}
          onClick={() => {
            scrollHandler(sec3);
            setSelectedElement("4");
          }}
        >
          Contact
        </li>
        <span className="nav-animation"></span>
      </ul>
      <div className="menu-icon" onClick={() => setIsSelected(!isSelected)}>
        {!isSelected ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
    </nav>
  );
}
