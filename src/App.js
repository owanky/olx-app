import './App.css';
import logo from './logo.svg';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import List from "./views/List";
import Detail from "./views/Detail";


//raz wykonywane przy stracie

function App() { //odswiezane co render
  return (
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <Image src={logo} width={40} height={40}/>
                Ania
              </Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <LinkContainer to="/list">
                <Nav.Link>List</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/detail">
                <Nav.Link>Detail</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>


        <Container>
          <Routes>
            <Route path="/" element={<h1>Hello</h1>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/detail" element={<Detail/>}/>
          </Routes>
        </Container>
      </BrowserRouter>

  );
}

export default App;

