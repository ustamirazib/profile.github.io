import React from 'react';
import './App.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Profile from './component/Profile';
import Tentang from './component/Tentang';
import Foto from './component/Foto';


function pageFoto(){
  return <Foto />
}

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar bg="light">
          <Navbar.Toggle />
            <Container>
                <Nav className="mr-auto">
                    <Nav.Link>PROFILE</Nav.Link>
                </Nav>
              </Container>
            <main>
                <Route path="/foto" exact component={pageFoto} />
            </main>
      </Navbar>

      {/* Jumbotron || Profile  */}
      <Profile />
      
      {/*  Tentang Saya  */}
      <Tentang />
    </div>
    </BrowserRouter>
  );
}

export default App;
