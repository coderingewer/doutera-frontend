import { useFormik } from 'formik';
import React, { useState } from 'react'
import "../pages/form.css"
import "./newproduct.css"
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Login, LoginAsync } from '../Api/Admin/AdminSlice';
import { Navigate } from 'react-router-dom';

const formSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
function AdminLogin() {
  const realTimeLogin = useSelector((state) => state.admin.realLogin);
  const logined = localStorage.getItem("logined") || realTimeLogin
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: values => {
      dispatch(LoginAsync(formik.values))
    },
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <form className='form-form' onSubmit={formik.handleSubmit}>
        <span className='form-title' >
          Admin Login
        </span>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <div className="error">{formik.errors.username}</div>
        )}
        <label htmlFor="text">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}
        <button className='form-form-btn' type="submit">Login</button>
      </form>
      {
                logined && <Navigate to="/admin-panel"/>
            }
    </div>
  )
}

export default AdminLogin