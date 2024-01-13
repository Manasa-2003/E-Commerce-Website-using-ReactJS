import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link, Card } from '@material-ui/core';
import styles from './Login1.module.css'


const axios = require('axios');
const myStyle={
 
  marginTop:200,
  width:"100%",
  height: "100%", 
  backgroundPosition: 'center',

          backgroundRepeat: 'no-repeat',
          };
export default class LoginAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {
    if(localStorage.getItem("user")==this.state.username && localStorage.getItem("passwo")==this.state.password){
      this.props.history.push('/adminmain');
    }
    else{
      alert("enter correct credentials");
    }
  }

  render() {
    return (
      <div style={myStyle} >
      <div >
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <form class="col-md-9">
                  <div className={styles.AppForm}>
                    <div class="shadow-lg">
                        <div class="row">
                            <div class="col-md-6 d-flex justify-content-center align-items-center">
                                <div className={styles.AppFormLeft}>
                                    <br></br>
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
                                          onChange={this.onChange}
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
                            
                            <div class="row  mt-4 mb-4">
                                
                                
                            </div>
<br></br>
                            <p class="text-center mt-5">
                                <span>Don't have an account? </span>
                                <br></br> 
                              
                                <Link href="/adminregister">
                                  Register
                                </Link>
                                
<br></br>
                            </p>
<br></br>
                        </div>

                    </div>
                    <div class="col-md-6">
                      <div className={styles.AppFormRight}>
                        <div class="position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                            <br></br>
                            <h2 class="position-relative px-4 pb-3 mb-4">Welcome Admin</h2>
                            <p>Keep track of your users here :) <br></br> </p>
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
</div>

);
}
}