import React from 'react'
import {Container , Navbar , Nav} from "react-bootstrap"
import {NavLink} from 'react-router-dom'
import{HashLink} from 'react-router-hash-link'
const NavBar = () => {
  return (
    <>



<Navbar  expand="lg">
      <Container>
      <NavLink to="/"><img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="" /></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navlinks ">
        <HashLink to="/#latest">Latest Builds</HashLink>
        <HashLink to="/#process">Process</HashLink>
        <HashLink to="/#service">Services</HashLink>
        <HashLink to="/#contact">Contact Us</HashLink>
        <NavLink to="/Projects">Projects</NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
</Navbar>






    </>
  )
}

export default NavBar