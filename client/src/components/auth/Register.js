import React, { Fragment, useState } from 'react'
// import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'


const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const { name,email,password,password2 } = formData; 

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async(e) => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Passwords do not match', 'danger');
        } else {
        //     const newUser = {
        //         name,
        //         email,
        //         password
        //     }

        //     try {
        //         const config = {
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         }

        //         const body = JSON.stringify(newUser);

        //         const res = await axios.post('/api/users', body, config);
        //         console.log(res.data);
        //     } catch (e) {
        //         console.error(e.response.data)
        //     }
        
            register({name,email,password})
        }
    }

    // Redirect if registered
    if(isAuthenticated){
      return <Redirect to="/dashboard"></Redirect>
    }

    return (
        <Fragment>
        <div className='wrapper-login bg-white'>
           <h1 className="large text-primary">Sign Up</h1>
      <p className="lead text-light"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" action="create-profile.html" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)}  />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            
            value={password} onChange={e => onChange(e)} 
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
           
            value={password2} onChange={e => onChange(e)} 
          />
        </div>
        <input type="submit" className="btn " value="Register" />
      </form>
      <p className="my-1 text-light">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
      </div>
        </Fragment>
    )
};
  
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, register})(Register);
