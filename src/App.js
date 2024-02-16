import React, { useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const sec0 = useRef();
  const sec1 = useRef();
  const sec2 = useRef();
  const sec3 = useRef();

  const [mode, setMode] = useState("light");

  const scrollHandler = (elmRef) => {
    window.scrollTo({
      top: elmRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar
        sec0={sec0}
        sec1={sec1}
        sec2={sec2}
        sec3={sec3}
        scrollHandler={scrollHandler}
        mode={mode}
      />
      <Home sec0={sec0} sec3={sec3} scrollHandler={scrollHandler} />
      <Projects sec1={sec1} />
      <About sec2={sec2} />
      <Contact sec3={sec3} />
    </div>
  );
}

export default App;
