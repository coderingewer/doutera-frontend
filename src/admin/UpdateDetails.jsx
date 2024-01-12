import { Field, FieldArray, FormikProvider, useFormik } from 'formik';
import "../pages/form.css"
import "./newproduct.css"
import { useDispatch, useSelector } from 'react-redux';
import AdminSideBar from './AdminSideBar';
import { React, useState } from 'react';
import { GetDetailsAsync, UpdateDetailsAsync } from '../Api/Details/DetailSlice';


function UpdateDetails() {
    const dispatch = useDispatch();
    const details = useSelector(state => state.details.details)
    const formik = useFormik({
        initialValues: {
            aboutus: details.aboutus,
            phone: details.phone,
            address: details.address,
            email: details.email,
            markerurl: details.markerurl,
            homeVideo: details.homeVideo,
            contactPageImageUrl: details.contactPageImageUrl,
            homeSubTitle: details.homeSubTitle,
            homeTitle: details.homeTitle,
        },
        onSubmit: async () => {
            await dispatch(
                UpdateDetailsAsync(formik.values)
            );
            alert("Details Updated Successfully")
        },
    });
    useState(() => {
        dispatch(GetDetailsAsync())
        console.log(details)
    }, [dispatch])
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh", overflow: "scroll" }} >
            <AdminSideBar />
            <form className='form-form' onSubmit={formik.handleSubmit}>
                <span className='form-title' >
                    Doutera Informations
                </span>
                <label htmlFor="name">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                <label htmlFor="name">E-mail Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="name">Market Url</label>
                <input
                    id="markerurl"
                    name="markerurl"
                    onChange={formik.handleChange}
                    value={formik.values.markerurl}
                />
                <label htmlFor="name">Address</label>
                <textarea
                    className='active-marketplaces'
                    id="address"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />
                  <label htmlFor="name">Home Video Url</label>
                <input
                    className='active-marketplaces'
                    id="homeVideo"
                    name="homeVideo"
                    onChange={formik.handleChange}
                    value={formik.values.homeVideo}
                />
                    <label htmlFor="name">contact Page Image Url</label>
                <input
                    className='active-marketplaces'
                    id="contactPageImageUrl"
                    name="contactPageImageUrl"
                    onChange={formik.handleChange}
                    value={formik.values.contactPageImageUrl}
                />
                  <label htmlFor="name">Home Title</label>
                <textarea
                    className='active-marketplaces'
                    id="homeTitle"
                    name="homeTitle"
                    onChange={formik.handleChange}
                    value={formik.values.homeTitle}
                />
                    <label htmlFor="name">Home Sub Title</label>
                <textarea
                    className='active-marketplaces'
                    id="homeSubTitle"
                    name="homeSubTitle"
                    onChange={formik.handleChange}
                    value={formik.values.homeSubTitle}
                />
                <label htmlFor="name">About Us</label>
                <textarea
                    className='active-marketplaces'
                    id="aboutus"
                    name="aboutus"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.aboutus}
                />
                <button className='form-form-btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateDetails