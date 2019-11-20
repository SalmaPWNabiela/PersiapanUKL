import React, {Component} from 'react';
import axios from 'axios'
import './App.css'

import {Link} from 'react-router-dom'

class Register extends React.Component{
  constructor(){
      super()
      this.state={
          id: '',
          name : '',
          email : '',
          password : '',
      }
  }
  handleChange = (e) =>{
      this.setState({ [e.target.name] : e.target.value })
  }
  handleSubmit = async(e) => {
      e.preventDefault()
      console.log(this.state)
      await axios.post("http://127.0.0.1:8000/api/register" , this.state)
      this.props.history.push('/login');
  }

    render(){
        return(
            <div className="container">
                  <form onSubmit={this.handleSubmit} >
                      <input type="hidden" name="id" value="" onChange={this.handleChange} />
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" className="form-control" name="name" placeholder="Enter Email Address" onChange={this.handleChange}/>
                      </div>
                      <div className="form-group">
                          <label for="email">Email</label>
                          <input type="text" className="form-control" name="email" placeholder="Enter Email Address" onChange={this.handleChange}/>
                      </div>
                      <div className="form-group">
                          <label for="password">Password</label>
                          <input type="password" className="form-control" name="password" placeholder="Enter your Password" onChange={this.handleChange}/>
                      </div>
                      <button type="submit" className="btn btn-outline-primary">Register</button>
                      <a type="button" className="btn btn-outline-primary" href="/Home">Back</a>
                  </form>
                    <Link to="/" >Login</Link>
              </div>
           
        )
    }
}
export default Register;
