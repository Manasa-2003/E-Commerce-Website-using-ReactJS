import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link, Card } from '@material-ui/core';
import styles from './Login1.module.css'
const axios = require('axios');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var checker=0;
var checker1=1;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  
 
  onChange = (e) =>
  { 
    this.setState({ [e.target.name]: e.target.value });
    var nam=e.target.value;
        if(nam.length<5){
           checker=0;
        }
        else{
          checker=1
        }
  }

  onChange1 = (e) =>
  { 
    
    this.setState({ [e.target.name]: e.target.value });
   
     var pass=e.target.value;
     if(pass.length<4){
        checker1=0;
     }
     else{
       checker1=1
     }
  }

  login = () => {

    if(checker==0 || checker1==0){
      alert(this.state.password+" Form validation not satisfied!! "+ this.state.username)
    }
    else{
    const pwd = bcrypt.hashSync(this.state.password, salt);

    axios.post('http://localhost:2000/login', {
      username: this.state.username,
      password: pwd,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      localStorage.setItem("user", this.state.username);
      this.props.history.push('/home');
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error"
        });
      }
    });
  }
  }
  render() {
    return (
      <div style={{marginTop:'100px',marginLeft:'80px',marginRight:'80px'}} >
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <form class="col-md-9">
                  <div className={styles.AppForm}>
                    <div class="shadow-lg">
                        <div class="row">
                            <div class="col-md-6 d-flex justify-content-center align-items-center">
                                <div className={styles.AppFormLeft}>

                                    <h1>Login</h1>
                                    <div class="form-group position-relative mb-4">
                                        <TextField
                                            id="standard-basic"
                                            type="text"
                                            autoComplete="off"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.onChange}
                                            placeholder="User Name"
                                            required
                                        />
                                        <br /><br />
                                        <TextField
                                          id="standard-basic"
                                          type="password"
                                          autoComplete="off"
                                          name="password"
                                          value={this.state.password}
                                          onChange={this.onChange1}
                                          placeholder="Password"
                                          required
                                        />
                                        <br /><br />
                                        <Button
                                          disabled={this.state.username == '' || this.state.password == ''}
                                          onClick={this.login}
                                        >
                                          Login
                                        </Button>
                                    </div>
                            
                          

                            <p class="text-center mt-5">
                                <span>Don't have an account? </span>
                                <br></br> 
                                <Link href="/register">
                                  Register
                                </Link>
                                

                            </p>

                        </div>

                    </div>
                    <div class="col-md-6">
                      <div className={styles.AppFormRight}>
                        <div class="position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                            <br></br>
                            <h2 class="position-relative px-4 pb-3 mb-4">Welcome</h2>
                            <p>Hello, Lets check the new art and buy.. Lets create some<br></br> <b>Come Lets Explore Together!</b></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </form>
    </div>
</div>
</div>
);
}
}