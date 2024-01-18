import { useFormik } from 'formik';
import React from 'react'
import "../pages/form.css"
import "./newproduct.css"
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { UpdatePassworAsync } from '../Api/Admin/AdminSlice';
import AdminSideBar from './AdminSideBar';

const formSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});
const id = localStorage.getItem('token')
const aid = parseInt(id)
console.log(aid)
function UpdatePassword() {
    const success = useSelector(state => state.admin.success)
    const loading = useSelector(state => state.admin.loading)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            id: aid,
            currentPassword: '',
            newPassword: '',
        },
        validationSchema: formSchema,
        onSubmit: values => {
            console.log("update")
            dispatch(UpdatePassworAsync(values))
        },
    });

    return (
        <>
            <AdminSideBar />
            <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
                <form className='form-form' onSubmit={formik.handleSubmit}>
                    <span className='form-title' >
                        Admin Update Password
                    </span>
                    {
                        loading &&
                    <img style={{width:48}} src={require('../assets/icons/loading.gif')}/>
                    }
                    {
                        success &&
                        <span style={{color:"green"}} >Password Update Succesfuly</span>
                    }
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.currentPassword}
                    />
                    {formik.touched.currentPassword && formik.errors.currentPassword && (
                        <div className="error">{formik.errors.currentPassword}</div>
                    )}
                    <label htmlFor="newPassword"> New Password</label>
                    <input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.newPassword}
                    />
                    {formik.touched.currentPassword && formik.errors.currentPassword && (
                        <div className="error">{formik.errors.currentPassword}</div>
                    )}
                    <button className='form-form-btn' type="submit">Update</button>
                </form>
            </div>
        </>
    )
}

export default UpdatePassword