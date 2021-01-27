import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import tabs from "./data/tabs";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/moviefiles/CardStyle.css";

function App() {
  const findMyPages = tabs.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.url}
      component={item.component}
    />
  ));

  return (
    <BrowserRouter>
      <NavBar tabs={tabs} />{" "}
      <Container fluid id="main">
        <Row>
          <Col className="p-0 m-0">
            <Switch> {findMyPages} </Switch>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </BrowserRouter>
  );
}

export default App;
