import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './UserSlice';


function LoginPage() {
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/dashboard");
    dispatch(
      login({
        username: formdata.username,
      })
    );
  };
  const dispatch = useDispatch();
  const nav = useNavigate();
 


  return (
    <div className={`loginContainer`}>
      <div className="forms-container">
        <div className="signin-signup" >
          <form action="#" className="sign-in-form loginForm" onSubmit={handleSubmit}>
            <h2 className="title">Login</h2>

            <div className='input-field'>
            <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
            <input className='LoginInput' name="username" type='text' placeholder='Username' value={formdata.username}
            onChange={handleChange}/>
            </div>
           
            
            <div className='input-field'>
            <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
            <input className='LoginInput' name='password' type='password'   placeholder='Password' value={formdata.password}
            onChange={handleChange}/>
            </div>
          
            <button className='btn' >Sign In</button>
           
            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
              </a>
            </div>
          </form>
          
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="contentLogin">
            <h3 className='loginh3'>New here?</h3>
            <p className='loginp'>
              Do Sign in Here!
            </p>
             <button className="btn transparent" >
              Sign up
              </button>
          </div>
          <img src="/img/dogLogin1.svg" class="image" alt="" />
        </div>
        
      </div>
    </div>
  )}

  export default LoginPage





  // const [formData, setFormData] = useState({
    //     username: '',
    //     password: '',
    //   });
    // const navigate = useNavigate();
    //   const [errors, setErrors] = useState({});
    //   const [isSubmitted, setIsSubmitted] = useState(false);
    
    //   const validateForm = () => {
    //     const newErrors = {};
    //     if (!formData.username.trim()) {
    //       newErrors.username = 'Username is required';
    //     }
    //     if (!formData.password) {
    //       newErrors.password = 'Password is required';
    //     } else if (formData.password.length < 6) {
    //       newErrors.password = 'Password must be at least 6 characters long';
    //     }
    //     else{
    //       navigate("/Sidebar");
    //     }
    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const isValid = validateForm();
    //     if (isValid) {
    //       // You can submit the form data to your server or perform other actions here.
    //       setIsSubmitted(true);
    //     }
    //   };
    // const handleNavigate= () => {
    //     navigate("/signup");
    //   };