import axios from 'axios';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { useFormik } from "formik";
import jwt_decode from 'jwt-decode';
import './Login.css';


const userSchemaValidation = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required").min(8)
})



function Login() {
    let navigate=useNavigate()


  const {handleSubmit,handleChange, errors,touched, values}=useFormik({
    initialValues :{
        email:"",
        password:"",
    },
    validationSchema : userSchemaValidation,
    onSubmit:async(values)=>{
      try {
        let res = await axios.post(`${url}/users/login`, values);
        console.log(res); 
        toast.success(res.data.message);
        sessionStorage.setItem('token', res.data.token);
        console.log(res.data.token)
        sessionStorage.setItem('userId', res.data.userId);
        console.log('userId', res.data.userId)

        navigate('/restaurant');
      } catch (error) {
        toast.error(error.response.data.message);
      }

    }
  })


useEffect(() => {
  if (sessionStorage.getItem('token')) {
    var token = sessionStorage.getItem('token');
    try {
      const decodedToken = jwt_decode(token); 
      const expirationTimestamp = decodedToken.exp;
      const currentTimestamp = Math.floor(Date.now() / 1000);

      if (expirationTimestamp < currentTimestamp) {
        console.log('Token has expired');
        sessionStorage.removeItem('token'); 
        navigate('/'); 
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }
}, [navigate]);


    return (
        <div className='login-wrapper'> 
            <h1 style={{"textAlign":"center","marginTop":"30px"}}>Login Here!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className='hat' style={{marginRight:"210px", marginTop:"10px"}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email address" className="email"  name="email"  value={values.email}
                   onChange={handleChange}/>
          {touched.email && errors.email ? <p style={{color:"crimson"}}>{errors.email}</p>:""}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className='hat1' style={{marginRight:"235px"}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter the Password" className="password"  name="password"  value={values.password}
                   onChange={handleChange}/>
          {touched.password && errors.password ? <p style={{color:"crimson"}}>{errors.password}</p>:""}
        </Form.Group>
        <br></br>
        <Button variant="primary" type='submit' className='sub'  style={{marginRight:"235px"}}>
          Submit
        </Button> <br></br>
        <br></br>
        <Button variant="primary"  onClick={()=>navigate('/forgot')}  className='sub1'>
          Forgot Password
        </Button>
        <Button variant="primary"  onClick={()=>navigate('/signup')} style={{marginLeft:"30px"}} className='sub1'>
        Create Account
        </Button>
      </Form>

      </div>

    );
  }

  export default Login;



// Login.js


// import React, { useEffect } from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { url } from '../App';
// import './Login.css';


// const userSchemaValidation = yup.object({
//   email: yup.string().email('Invalid email format').required('Email is required'),
//   password: yup.string().required('Password is required').min(8),
// });

// function Login() {
//   const navigate = useNavigate();



  


//   const { handleSubmit, handleChange, errors, touched, values } = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: userSchemaValidation,
//     onSubmit: async (values) => {
//       try {
//         const res = await axios.post(`${url}/users/login`, values);
//         console.log('API Response:', res.data);
//         toast.success(res.data.message);
//         // sessionStorage.setItem('token', res.data.token);
//         // sessionStorage.setItem('user', res.data.user._id);
       
//         sessionStorage.setItem('token', res.data.token);
//         console.log(res.data.token)
      
//         sessionStorage.setItem('userId', res.data.user._id,);
//         console.log(res.data.user._id);

//         navigate('/');
//       } catch (error) {
//         toast.error(error.response.data.message);
//       }


//     },
//   });

//   useEffect(() => {
//     if (sessionStorage.getItem('token')) {
//       const token = sessionStorage.getItem('token');
//       try {
//         const decodedToken = jwt_decode(token);
//         const expirationTimestamp = decodedToken.exp;
//         const currentTimestamp = Math.floor(Date.now() / 1000);

//         if (expirationTimestamp < currentTimestamp) {
//           console.log('Token has expired');
//           sessionStorage.removeItem('token');
//           navigate('/');
//         }
//       } catch (error) {
//         console.error('Error decoding token:', error);
//       }
//     }
//   }, [navigate]);

//   return (
//     <div className="login-wrapper">
//       <Form className="login-form" onSubmit={handleSubmit}>
//         <h1 className="login-title">Login Here!</h1>
//         <Form.Group className="mb-3">
//           <Form.Label className="form-label">Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email address"
//             className="form-input"
//             name="email"
//             value={values.email}
//             onChange={handleChange}
//             style={{"width":"90%"}}
//           />
//           {touched.email && errors.email ? <p className="error-message">{errors.email}</p> : ''}
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label className="form-label">Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter the Password"
//             className="form-input"
//             name="password"
//             value={values.password}
//             onChange={handleChange}
//             style={{"width":"90%"}}
//           />
//           {touched.password && errors.password ? <p className="error-message">{errors.password}</p> : ''}
//         </Form.Group>
//         <Button type="submit" className="submit-button" onClick={() => navigate("/restaurant")} >
//           Submit
//         </Button>
     
//         <br/>
//         <Link to="/forgot" className="forgot-link" style={{"paddingTop":"10px"}}>
//           Forgot Password
//         </Link>
//         <br/>
//         <br />
//         <Link to="/signup" className="create-account-link" >
//           Create Account
//         </Link>
//       </Form>
//     </div>
//   );
// }

// export default Login;


