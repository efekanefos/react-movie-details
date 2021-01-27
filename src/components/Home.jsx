import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./moviefiles/CardStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Home(props) {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);
  return (
    <Container fluid id="homeback" className="text-center d-block text-white">
      <Row>
        <Col sm={12}>
          <h1 data-aos="fade-up" id="homeTitle">
            {" "}
            Welcome to Movie Details Website!{" "}
          </h1>{" "}
        </Col>
        <Col sm={12}>
          <h3 className="pb-5" data-aos="fade-up">
            To Find Some Details About Awesome Movies Please Check Out the
            Movies Section{" "}
          </h3>{" "}
          <Link
            data-aos="fade-up"
            to={`/movies/`}
            className="btn text-white d-block mx-auto"
            id="gotoMovie"
          >
            <i className="fas fa-film pr-2"></i>Get Started
          </Link>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}

export default Home;
