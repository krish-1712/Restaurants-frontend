import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './Forgot.css';

const userSchemaValidation = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
});

const Forgot = () => {
  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: userSchemaValidation,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${url}/users/reset`, { values });
        console.log(response)
        toast.success(response.data.message);

        if (response.status === 200) {
          toast.success(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  });

  return (
    <div className="forgot-wrapper">
      <Form className="forgot-form" onSubmit={handleSubmit}>
        <h1 className="forgot-title">Forgot Password</h1>
        <h4 className="for">Enter the Email Address Associated With Your Account</h4>
        <Form.Group className="mb-3">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email address"
            className="form-input"
            name="email"
            value={values.email}
            onChange={handleChange}
            style={{ "width": "90%" }}
          />
          {touched.email && errors.email ? <p className="error-message">{errors.email}</p> : ''}
        </Form.Group>
        <Button type="submit" className="submit-button">
          Continue
        </Button>
      </Form>
    </div>
  );
};

export default Forgot;
