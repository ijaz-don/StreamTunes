import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/header.css'
import image1 from './images/logo2.jpg'
import home from './images/home.svg'
import browse from './images/browse.png'
import search from './images/search.png'
import { Button } from 'react-bootstrap';

function ColorSchemesExample() {
  return (
    <div id='wrapper'>
      <div id='body'>
      <Navbar  data-bs-theme="dark" id='navbar'>
        <Container>
        <Navbar.Brand href="#home">
          <div id='list1'>
            <img
              alt=""
              src={image1}
              width="70px"
              height="70px"
              // className="d-inline-block align-top img1"
            />
          </div>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <div id='list2'>
              <img 
                src={home}
                height={"80%"}
                width={"80%"} 
                id='home' />
              </div>
            </Nav.Link>
            <Nav.Link href="#features">
              <div id='list3'>
                <button id='butt1'><img src={search} alt=""  height={"25px"}  width={"25px"}   /></button>
              <input type="search" id='inp' placeholder='What do yo want to play?' />
              <img src={browse} height={"40px"}  width={"40px"}  id='browsing'/>
              </div>
            </Nav.Link>
            <div className="four5wrap">
            <div className="four5">
            <div id='list4'>
            <Nav.Link href="#features">Premium</Nav.Link>
            <Nav.Link href="#features">Support</Nav.Link>
            <Nav.Link href="#features">Download</Nav.Link>
            </div>
            <div id='list5'>
            <Nav.Link href="#features">
              <span id='installsvg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16"  height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
            </svg> </span>
              Install app
            </Nav.Link>
            <Nav.Link href="#features">Sign up</Nav.Link>
            </div>        
            </div>
            </div>
            <div id="Header-login">
            <Button variant="light" id='Header-login-id'>login</Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  );
}

export default ColorSchemesExample;