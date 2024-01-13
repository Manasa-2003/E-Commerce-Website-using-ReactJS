import React, { Component } from 'react';
import swal from 'sweetalert';
import styles from './Register.module.css';
import { Button, TextField, Link } from '@material-ui/core';

const myStyle={
      backgroundColor:"white"
          };
  
export default class RegisterAdmin extends React.Component {
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
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = () => {
    localStorage.setItem("user", this.state.username);
    localStorage.setItem("passwo",this.state.password);
    console.log(this.state.username);
    console.log(this.state.password);
    this.props.history.push('/admin');
    }
  

  render() {
    return (
      <div style={myStyle} >
      <div className={styles.bodchange}>
      <div >
      <div className={styles.modernForm}>
       
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
          <Link href="/admin">
            Login
          </Link>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}