import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./moviefiles/CardStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact(props) {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);
  return (
    <Container
      fluid
      id="contactback"
      className="text-center d-block text-white"
    >
      <h1 data-aos="fade-up" id="contactTitle" className="pb-4">
        Contact Me Anytime You Want
      </h1>{" "}
      <img
        data-aos="fade-up"
        id="myPic"
        src="https://scontent.fada2-1.fna.fbcdn.net/v/t31.0-8/16422921_10208296000774449_8064855304088973995_o.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_ohc=Z6uyW3_uhGYAX9YRxZC&_nc_ht=scontent.fada2-1.fna&oh=6b5c04ee9a0191c19d3402cf98c7a610&oe=603444A4"
        alt="me"
      />
      <ul
        data-aos="fade-up"
        id="social"
        className="pt-3 mt-2 d-flex align-items-center justify-content-center"
      >
        <li className="pr-4">
          <a href="https://www.linkedin.com/in/efekan-efe/">
            <i id="linked" className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="pr-4">
          <a href="https://www.instagram.com/efekannefee/">
            <i id="insta" className="fab fa-instagram-square"></i>
          </a>
        </li>
        <li className="pr-4">
          <a href="https://mobile.twitter.com/efekannefee">
            <i id="twitter" className="fab fa-twitter-square"></i>
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Contact;
