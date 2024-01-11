import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import React from 'react'
import TopBar from '../bars/TopBar';
import "./form.css"
import * as Yup from 'yup';
import { addDealersihpsAsync } from '../Api/DealerShips/DealerShipSlice';

const formSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    address: Yup.string().required('The space required for us to examine to see if you are in the appropriate area'),
    websites: Yup.string().required('Space required for us to review your eligibility'),

});


function DealerShip() {
    const dispacth = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            websites: '',
            description: ''
        },
        validationSchema: formSchema,
        onSubmit: values => {
            dispacth(addDealersihpsAsync(formik.values))
            alert("Your form sent successfully");
            window.location.href = "/";
        },
    });

    return (
        <div className='form-form-page'>
            <TopBar />
            <form className='form-form' onSubmit={formik.handleSubmit}>
                <span className='form-title' >
                    Become Our Authorized Dealer
                </span>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="error">{formik.errors.email}</div>
                )}
                <label htmlFor="text">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <div className="error">{formik.errors.firstName}</div>
                )}
                <label htmlFor="text">The region where you want to be an authorized dealer</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address && (
                    <div className="error">{formik.errors.address}</div>
                )}
                <label htmlFor="text">Links to your active marketplaces </label>
                <textarea
                    className='active-marketplaces'
                    id="websites"
                    name="websites"
                    rows={4}
                    onChange={formik.handleChange}
                    value={formik.values.websites}
                />
                {formik.touched.websites && formik.errors.websites && (
                    <div className="error">{formik.errors.websites}</div>
                )}

                <label htmlFor="text">Description </label>
                <textarea
                    className='active-marketplaces'
                    id="description"
                    name="description"
                    rows={4}
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                <button className='form-form-btn' type="submit">Submit</button>

            </form>
        </div>
    )
}

export default DealerShip