import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';




function App() {
  return (
    <Container className="bg-light " md={12} style={{ margin: "0px", maxWidth: "100%" }}>

      <Row >
        <Header />
      </Row>

      <Row>
      <Footer  />
      </Row>

    </Container>
  );
}

export default App;