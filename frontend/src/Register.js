import React, { Component } from 'react';
import swal from 'sweetalert';
import styles from './Register.module.css';
import { Button, TextField, Link } from '@material-ui/core';
const axios = require('axios');

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email:'',
      password: '',
      confirm_password: ''
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#B8E8FC"
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = () => {

    axios.post('http://localhost:2000/register', {
      username: this.state.username,
      email:this.state.email,
      password: this.state.password,
    }).then((res) => {
      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });
      this.props.history.push('/');
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
    });
  }

  render() {
    return (
      <div className={styles.bodchange}>
      <div style={{ marginTop: '100px' }}>
      <div className={styles.modernForm}>
        <div className={styles.imageSection}>
          <div className={styles.image}>
            <div className={styles.overlay}></div>
            <img
                src="https://i.ibb.co/wRWNy8q/pexels-yuri-manei-2272854.jpg" 
                alt="pexels-yuri-manei-2272854"/>
          </div>
            
      </div>
      <div className={styles.contactForm}>
        <h1>Registaration Form</h1>
        <div>
          <TextField
            label = "UserName:"
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
            label = "Email:"
            id="standard-basic"
            type="email"
            autoComplete="off"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
            placeholder="Email"
            required
          />
          
          <br /><br />
          <TextField
            label = "Password:"
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
          <TextField
            label = "Confirm Password:"
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="confirm_password"
            value={this.state.confirm_password}
            onChange={this.onChange}
            placeholder="Confirm Password"
            required
          />
          <br /><br />
          <Button
            className={styles.button_style}
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username=='' && this.state.password == ''}
            onClick={this.register}
          >
            Register
            </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/">
            Login
          </Link>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}