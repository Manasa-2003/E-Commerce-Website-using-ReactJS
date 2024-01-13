import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import AdminCards from './adminMain.js'
import './AdminNavigation.css'
import FAQS from './FAQ';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Button, TextField, Dialog, DialogActions, LinearProgress,
  DialogTitle, DialogContent, TableBody, Table,
  TableContainer, TableHead, TableRow, TableCell
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import swal from 'sweetalert';
const axios = require('axios');
const user=localStorage.getItem("user");
function AdminNavigation(){
  
    return(
         <>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Avid Arts</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
       
 

       <Nav.Link href="/adminmain" className='homealign'>Home</Nav.Link>
      
        {/*  <Nav.Link href="Artworks">ArtWorks</Nav.Link>
          <Nav.Link href="Dashboard">Artist</Nav.Link>
          <Nav.Link href="FAQS">FAQS</Nav.Link>
          <Nav.Link href="ContactUs">Contact us</Nav.Link>*/}
        </Nav>
       {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
    </Form>*/}
       {/* <Link to={'/cart'}>
          <ShoppingCartIcon style={{width: '100px',height:'40px',color:'grey'}} />
        </Link>*/}


       {/* <NavDropdown title={user} id="navbarScrollingDropdown">
           
            <NavDropdown.Item href="/profile">
              Profile
            </NavDropdown.Item>
            
            <NavDropdown.Item href="/myorders">
              Myorders
            </NavDropdown.Item>
    </NavDropdown>*/}
          <Link to={'/admin'}>
<button style={{backgroundColor:"#7DE5ED"}} className="btn btn-primary" > LOGOUT </button>
</Link>


</Navbar.Collapse>
    </Container>
  </Navbar>       
        </>
        
    );
}

export default AdminNavigation;