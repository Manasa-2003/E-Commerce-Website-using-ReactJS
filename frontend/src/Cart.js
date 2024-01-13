import React, { useState,useEffect } from 'react';
import styles from './Cart1.module.css';
import Navigationbar from './Navigationbar';
import Footer from './Footer';

function Cart(){
  const handleThis=()=>{
    alert("Payment done")
  }
var amount=0;
 
  const [cartData,setcartData]=useState([]);
  const getData=()=>{
    fetch('http://localhost:3006/data'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setcartData(myJson);
      });
  }
  const updateAmount=()=>{
    amount=0;
     cartData.map((data)=>{
      
      amount+=data.price
     })
    
  }
  useEffect(()=>{
    getData()
    updateAmount()
  },[])
  
    return(
         <>
    <Navigationbar />
   <br></br>
    {cartData.map((item) => (
     
        <div className={styles.cart_box} key={item.id}>
          <div className={styles.cart_img}>
            
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>

          <div>
          <p style={{color:"white"}}>{amount=amount+item.price}</p>
            <p>{item.price}rs</p>
          </div>
        </div>
      ))}
      <br></br>
      <br></br>
       <div>
        <div className={styles.totalprice}>
            <table>
              <tr>
                <td>Subtotal</td>
                <td>{amount}rs</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>30rs</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{amount+30}rs</td>
              </tr>
            </table>
            
               
          </div>
          <div className={styles.totalprice1}>
          <button style={{backgroundColor:"#7DE5ED"}} className="btn btn-primary" onClick={()=>alert("payent done :)")}>Pay Now</button>
          </div>  
       </div>
        <Footer />
            
        </>
        
    );
}

export default Cart;