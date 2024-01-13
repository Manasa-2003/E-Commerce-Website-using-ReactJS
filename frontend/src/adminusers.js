import React, { Component, useState,useEffect} from 'react';
import './AdminUsers.css'
import AdminNavigation from './AdminNavigation';
import Axios from 'axios';
function AdminUsers(){
   
  const [userData,setuserData]=useState([]);
  const datas=["username","password"]
  var dat=["",""]
  const handleDelete=async(username)=>{
    await Axios
    .delete('http://localhost:8080'+username)
    .then(res => alert("deleted success"));
    getData();
};

  const getData=()=>{

    fetch('http://localhost:8080'
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
        setuserData(myJson);
      });
  }

  useEffect(()=>{
    getData()
  
  },[])

  return(
    <>
   
    <AdminNavigation />
    <br></br>
    <h1>LIST OF ALL THE WEBSITE USERS</h1>
    <br></br>
    <br></br>
    <div className="helloworld">
  <table id='students'>


 <th style={{fontSize:"30px"}}>Username</th>
 <th style={{fontSize:"30px"}}>Password</th>
    {userData.map((item) => (
           <><tr>
           
        
            <td style={{fontSize:"25px"}}>{item.username}</td>
            <td style={{fontSize:"25px",textAlign:"center"}}>{item.password}</td>
            
       
            </tr></>

      ))}
      </table>

      </div>
            

            
        </>
        
  );
}

export default AdminUsers