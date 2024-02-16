import React from "react";

export default function Home({ sec0, sec3, scrollHandler }) {
  return (
    <main ref={sec0}>
      <section className="main-content">
        <div className="intro-name">
          HI,I AM <br /> HARIKRISHNA MEESALA
        </div>
        <div className="c2">
          <div className="typed-out">A Frontend Developer...</div>
        </div>
        <p>
          A goal oriented entry level computer science graduated front-end
          developer passionate about building accessible and user friendly
          websites.
        </p>
        <div className="social-platforms">
          <div className="contact-btn" onClick={() => scrollHandler(sec3)}>
            <h3>CONTACT ME</h3>
            <div className="black-dot"></div>
          </div>
          <div className="linkedin-logo">
            <a
              href="https://www.linkedin.com/in/harikrishna-meesala-145244226/"
              target="_blank" rel="noreferrer"
            >
              <i
                className="fa fa-linkedin"
                style={{ fontSize: "24px", color: "#D3E97A" }}
              ></i>
            </a>
          </div>
          <div className="linkedin-logo">
            <a href="https://github.com/HariMeesala" target="_blank" rel="noreferrer">
              <i
                className="fa fa-github"
                style={{ fontSize: "24px", color: "#D3E97A" }}
              ></i>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="professional-image"></div>
      </section>
    </main>
  );
}
