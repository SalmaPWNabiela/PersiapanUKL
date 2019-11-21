import React from 'react'
// import axios from 'axios'
import {login} from './AuthFunction'
import swal from 'sweetalert'

import {Link} from 'react-router-dom'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email : '',
            password : '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res => {
            if(res){
                swal("Login Berhasil", " ", "success");
                this.props.history.push('/Book')
            }
            else{
                swal("Login Gagal", " ", "error");
            }
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row bg-warning">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Please Sign In
                            </h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" 
                                className="form-control" 
                                name="email" 
                                placeholder="Enter Email Address" 
                                defaultValue={this.state.email}
                                onChange={this.handleChange}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" 
                                className="form-control" 
                                name="password" 
                                placeholder="Enter your Password" 
                                defaultValue={this.state.password}
                                onChange={this.handleChange}>
                                </input>
                            </div>
                            <button type="submit" className="btn btn-lg btn-dark btn-block">
                                Sign In
                            </button>
                        </form>
                        <Link to='/register'>Register</Link>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Login