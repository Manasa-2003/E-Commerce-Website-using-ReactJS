import React, { useState, useRef,useEffect } from "react";
import {Modal} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styles from './Contact.module.css'
import Navigationbar from "./Navigationbar";
import Axios from "axios";

export default function Checkbo(){
  const url="http://localhost:3010/data";
  const input = useRef();
  const input1=useRef();
  const input2=useRef();
  const input3=useRef();

  const initialValues = { name: "", email: "", phonenumber: "" };
  const [studentData, setStudentData] = useState([]);
  var data={
    name:"",
    email:"",
    phonenumber:"",
    message:""
  }
var addToList = e => {
  data.name=input.current.value;
  data.email=input1.current.value;
  data.phonenumber=input3.current.value;
  data.message=input2.current.value
  const updatedStudentData = [...studentData];
  updatedStudentData.push(data);
   setStudentData(updatedStudentData);
  e.preventDefault();
  setStudentData(updatedStudentData);
    
  const response = Axios.post(url,data,{headers:{"Content-Type" : "application/json"}});
};

const tableRows = studentData.map((data) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phonenumber}</td>
      <td>{data.message}</td>
    </tr>
  );
});


const [name, setName] = useState("");
const [email,setEmail]=useState("");

const [phonenumber,setPhonenumber]=useState("");
const [message,setMessage] =useState("");
const onChangeHandler = (fieldName, value)=>{
  if(fieldName === "name"){
    setName(value);
  }
  else if(fieldName==="email"){
    setEmail(value);
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if ( re.test(value) ) {
   
  }
  else {

  }
  }

  else if(fieldName==="phonenumber"){
    setPhonenumber(value);
    let re=/^[0-9\b]+$/
    if(re.test(value)){

    } 
    else{

    }
   
  }

  else if(fieldName==="message"){
    setMessage(value);
  }
}


 
return(
    <>
  <Navigationbar />
    <div className={styles.container}>
      <div className={styles.checkin}>
        <form onSubmit={addToList}>
         <Modal.Body>
          <Form.Group>
            <h1>Contact Us</h1>
            <Form.Label>We will get in touch with you soon!</Form.Label>
            <br />
            <input type="text" ref={input} value={name} placeholder="Name" onChange={(e)=>{onChangeHandler("name",e.target.value)}} style={{width: "300px",height:"50px"}} />
            <br></br>
            <br></br>
            <input type="email" value={email} ref={input1} placeholder="Email"   onChange={(e)=>{onChangeHandler("email",e.target.value)}} style={{width: "300px",height:"50px"}}/>
            <br></br>
            <br></br>
            <input type="text" ref={input3} value={phonenumber} placeholder="Phone Number" onChange={(e)=>{onChangeHandler("phonenumber",e.target.value)}}  style={{width: "300px",height:"50px"}} required/>
            <br></br>
            <br></br>
            <input type="text" ref={input2} value={message} placeholder="Message" onChange={(e)=>{onChangeHandler("message",e.target.value)}} style={{width: "300px",height:"100px"}} required/>
            <br></br>
          </Form.Group>
        </Modal.Body>
        <br></br>
       
        <Button style={{backgroundColor:"#FFB9B9"}} type="sumbit">Add to List</Button>
       
        
      </form>
    
    </div>
  <div className={styles.requ}>
   < img style={{marginTop:30}}src= {require("./assets/images/contactus.png")} />
   </div>

      
      </div>
      
      <div className={styles.hell}>
        <br>
      </br>
      
      <br>
      </br>
      <table className={styles.table1}>
        <thead >
          <tr className={styles.tr1}>
            <th className={styles.th1}>Name</th>
            <th className={styles.th1}>Email</th>
            <th className={styles.th1}>PhoneNumber</th>
            <th className={styles.th1}>Message</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
   </div>
      </>
  )
}