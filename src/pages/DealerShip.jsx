import { useFormik } from 'formik';
import React from 'react'
import TopBar from '../bars/TopBar';
import "./dealership.css"
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    region: Yup.string().required('The space required for us to examine to see if you are in the appropriate area'),
    activeMarketplaces: Yup.string().required('Space required for us to review your eligibility'),

});

const position = [51.505, -0.09]

function DealerShip() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            region: '',
            activeMarketplaces: '',
        },
        validationSchema: formSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='dealership-form-page'>
            <TopBar />
            <form className='dealership-form' onSubmit={formik.handleSubmit}>
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
                <label htmlFor="text">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <div className="error">{formik.errors.firstName}</div>
                )}
                <label htmlFor="text">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                    <div className="error">{formik.errors.lastName}</div>
                )}
                <label htmlFor="text">The region where you want to be an authorized dealer</label>
                <input
                    id="region"
                    name="region"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.region}
                />
                {formik.touched.region && formik.errors.region && (
                    <div className="error">{formik.errors.region}</div>
                )}
                <label htmlFor="text">Links to your active marketplaces </label>
                <textarea
                    className='active-marketplaces'
                    id="activeMarketplaces"
                    name="activeMarketplaces"
                    rows={4}
                    onChange={formik.handleChange}
                    value={formik.values.activeMarketplaces}
                />
                {formik.touched.activeMarketplaces && formik.errors.activeMarketplaces && (
                    <div className="error">{formik.errors.activeMarketplaces}</div>
                )}
                <button className='dealership-form-btn' type="submit">Submit</button>

            </form>
        </div>
    )
}

export default DealerShip