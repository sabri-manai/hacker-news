import React from 'react';
import {Nav, Navbar} from "react-bootstrap"
import { Link } from 'react-router-dom';
import '../App.css';
const NavBar = () => {
    const linkStyle ={
        // display:"flex",
        // justifyContent:"space-around",
        // width:"150px",
            }
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="navbrand" href="#home">Hacker News</Navbar.Brand>
        <Nav  >
            <Link className="navstyle" to="/">Top Storie</Link>
            <Link className="navstyle" to="/Top-Authors">Top Authors</Link>
            <Link className="navstyle" to="/recomended-stories">Recomended Stories</Link>
        </Nav>
  </Navbar>
    )
}

export default NavBar
