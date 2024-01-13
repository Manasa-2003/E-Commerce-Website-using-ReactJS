import React, { Component, useState } from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactDOM from "react-dom";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styles from './Home.module.css';
import imgGirl from './assets/images/defaultImage.jpg';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Cart from './Cart';
import Artworks from './Artworks';
import Help from './Help';
import Navigationbar from './Navigationbar';
const axios = require('axios');



class Home extends Component {


render(){
  return (
  <>  
<div className={styles.navbgcolor}>
   <Navigationbar />
    </div>
<div className={styles.bodybgcolor}>
<div style={{textAlign:'left',"padding-top":150,"paddingLeft":140,"fontSize":55}}> SHOP FOR </div>
<div style={{textAlign:'left',"paddingLeft":65,"fontSize":75,fontFamily:"GoldmanBold"}}>ART YOU'LL</div>
<div style={{textAlign:'left',"paddingLeft":170,"fontSize":76,fontFamily:"GoldmanBold"}}>LOVE</div>
<Link to={'/artworks'}>
<button variant="contained" style={{height: 55,
                    width:200,
                    marginLeft :50,
                    marginRight:1050,
                    marginTop :20 , backgroundColor:"pink"}} className="btn btn-primary" > SHOP NOW </button>
</Link>  
<div className={styles.leftalignment}>
   <img  style={{
                position: 'absolute',
                height:650,
                width:900,
                right:5,
                top: 55,
          }}  src={('https://images.squarespace-cdn.com/content/v1/55246d58e4b08ad5c0f6111f/1595736383488-4JBXMUJKQ7JGMOL4MVIK/SCSxBCC_2.jpeg')}></img>
   </div>

   <div >

   </div>




     <div className={styles.container}>
  <div className={styles.box}>
    <Link to='./artworks'>
  <button style={{height:40,marginBottom:10,backgroundColor:"#98A8F8"}}   className="btn btn-primary"  >view more</button> 
  </Link>
    <img  style={{marginBottom:12}} src="https://www.stylemotivation.com/wp-content/uploads/2019/08/image_892.jpeg"/>
   <b>Paintings</b>
  </div>
 
  <div className={styles.box}>
  <Link to='./artworks' >
    <button  style={{height:40,marginBottom:10,backgroundColor:"#98A8F8"}}  className="btn btn-primary" >view more</button>
   </Link>
    <img style={{marginBottom:12}} src="https://www.designbolts.com/wp-content/uploads/2020/01/Free-Sketching-Paper-Mockup-PSD.jpg"/>
    <b>Sketching</b>
  </div>

  <div className={styles.box}>
  <Link to='./artworks' >
  <button  style={{height:40,marginBottom:10,backgroundColor:"#98A8F8"}}   className="btn btn-primary" >view more</button>
  </Link>
    <img style={{marginBottom:12}}src="https://www.pauletpaula.com/wp-content/uploads/2019/01/embroidery-hoop.jpg"/>
    <b style={{marginTop:100}}>Hoop Arts</b>

  </div>
  <div className={styles.box}>
  <Link to='./artworks' >
      <button  style={{height:40,marginBottom:10,backgroundColor:"#98A8F8"}}   className="btn btn-primary">view more</button>
    </Link>
    <img style={{marginBottom:12}} src="https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/home/sg-visitors-guide/art-craft-500x454.jpg"/>
     <b>Others</b>
  </div>
</div>
 
<br/>

</div>


<div className={styles.container_imgtext}>
  <img style={{width:'95%', height:'60%'}} src="https://cdn.searchassociates.com/Pages/News/2019/AdobeStock_254473887_reduced.jpg" />
  <div className={styles.centered}>
    <br></br>
    <br></br>
    <br></br>
    <b>Give Us feedback</b><br></br>
    <p style={{fontSize: 20}}>**Feel free to share your feedback**</p>
   
    
      <Link to={'/forcheck'}>
      <Button type="Button"> Feedback! </Button>
      </Link>
     
  </div>

</div>

< Footer />
    </>
  );
        }
}

export default Home;