import './App.css';
import logo from './logo.svg';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import List from "./views/List";
import Detail from "./views/Detail";
import Add from "./views/Add";
import Edit from "./views/Edit";
import Category from "./views/Category";
import UserProvider from "./providers/UserProvider";
import Menu from "./components/Menu";


//raz wykonywane przy stracie

function App() { //odswiezane co render
    return (
        <UserProvider>


            <BrowserRouter>
                <Menu/>

                <Container>
                    <Routes>
                        <Route path="/" element={<Category/>}/>
                        <Route path="/list" element={<List/>}/>
                        <Route path="/detail">
                            <Route path={':id/edit'} element={<Edit/>}/>
                            <Route path={':id'} element={<Detail/>}/>
                        </Route>
                        <Route path="/add" element={<Add/>}/>
                    </Routes>
                </Container>

            </BrowserRouter>

        </UserProvider>

    );
}

export default App;

