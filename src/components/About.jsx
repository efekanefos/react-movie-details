import React, { useEffect } from "react";
import "./moviefiles/CardStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";

function About(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="aboutback"
      className="text-center d-block text-white container-fluid"
    >
      <div data-aos="fade-up" className="row">
        <h1 id="aboutTitle" className="pb-4">
          {" "}
          About This Website{" "}
        </h1>{" "}
      </div>
      <div data-aos="fade-up" className="row">
        <p id="aboutWebsite" className="d-block mx-auto px-5">
          This website includes movies and information about them. It's a react
          project that teached me how to deal with react-router. This website
          has 4 different sections. Home section is the first page of the
          website. It just welcomes you with warm tone. Movies section has a
          search bar and cards of movies. You can use the search bar to find
          which movie you want to look easily. If you want to read about the
          details of the movies just use read more buttons. In the Contact
          section you can see my contact informations and you can use them to
          contact me. And lastly about section describes what this website can
          and what it has.{" "}
        </p>
      </div>
      <h2 id="tech" data-aos="fade-up" className="pt-4">
        Tech
      </h2>
      <ul
        data-aos="fade-up"
        id="social"
        className="pt-3 mt-2 d-flex align-items-center justify-content-center"
      >
        <li className="pr-4">
          <i id="boot" className="fab fa-bootstrap"></i>
        </li>
        <li className="pr-4">
          <i id="react" className="fab fa-react"></i>
        </li>
        <li className="pr-4">
          <i id="css" className="fab fa-css3-alt"></i>
        </li>
        <li className="pr-4">
          <i id="html" className="fab fa-html5"></i>
        </li>
      </ul>
    </div>
  );
}

export default About;
