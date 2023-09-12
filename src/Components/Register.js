import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const userSchemaValidation = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required').min(8),
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
});

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    },
    validationSchema: userSchemaValidation,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${url}/users/signup`, values);
        console.log(res);
        toast.success(res.data.message);
        sessionStorage.setItem('token', res.data.token);
        navigate('/');
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  });

  return (
    <div className="register-wrapper">
      <Form className="register-form" onSubmit={handleSubmit}>
        <h1 className="register-title">Signup Here!</h1>
        <Form.Group className="mb-3">
          <Form.Label className="form-label">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the First Name"
            className="form-input"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
            style={{ "width": "90%" }}
          />
          {touched.firstname && errors.firstname ? <p className="error-message">{errors.firstname}</p> : ''}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="form-label">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Last Name"
            className="form-input"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            style={{ "width": "90%" }}
          />
          {touched.lastname && errors.lastname ? <p className="error-message">{errors.lastname}</p> : ''}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="form-label">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter the Email Address"
            className="form-input"
            name="email"
            value={values.email}
            onChange={handleChange}
            style={{ "width": "90%" }}
          />
          {touched.email && errors.email ? <p className="error-message">{errors.email}</p> : ''}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter the Password"
            className="form-input"
            name="password"
            value={values.password}
            onChange={handleChange}
            style={{ "width": "90%" }}
          />
          {touched.password && errors.password ? <p className="error-message">{errors.password}</p> : ''}
        </Form.Group>


        <Button type="submit" className="submit-button">
          Signup
        </Button>
      </Form>
    </div>
  );
}

export default Register;
