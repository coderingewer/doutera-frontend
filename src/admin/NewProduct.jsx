import {  FieldArray, FormikProvider, useFormik } from 'formik';
import "../pages/form.css"
import "./newproduct.css"
import { useDispatch } from 'react-redux';
import AdminSideBar from './AdminSideBar';
import { React, useState } from 'react';
import { addProductsAsync } from '../Api/Products/ProductSlice';
import { Navigate } from 'react-router-dom';

function NewProduct() {
  const dispatch = useDispatch();
  const subProduct = [{ title: '', detail: '', imageUrl: '' }]
  const [posted, setPosted] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      featuresImg: '',
      featureOne: '',
      featureTwo: '',
      featureThree: '',
      productContainerContent: { title: '', detail: '', videUrl: '' },
      productCarouselItems: [
        { title: '', detail: '', image: '' },
        { title: '', detail: '', image: '' },
        { title: '', detail: '', image: '' },
        { title: '', detail: '', image: '' }
      ],
      subProducts: subProduct,
    },
    onSubmit: async () => {
      await dispatch(
        addProductsAsync(formik.values)
        );
        setPosted(true)
    },
  });
  return (
    <div className='new-product-page' >
      <AdminSideBar />
      <form className='form-form' onSubmit={formik.handleSubmit}>
        <span className='form-title' >
          Add a New Product
        </span>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="name">Features Image Url</label>
        <input
          id="featuresImg"
          name="featuresImg"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.featuresImg}
        />
        <label htmlFor="name">Feature 1</label>
        <input
          id="featureOne"
          name="featureOne"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.featureOne}
        />
        <label htmlFor="name">Feature 2</label>
        <input
          id="featureTwo"
          name="featureTwo"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.featureTwo}
        />
        <label htmlFor="name">Feature 3</label>
        <input
          id="featureThree"
          name="featureThree"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.featureThree}
        />

        {formik.values.productCarouselItems.map((item, index) => (
          <div style={{ textAlign: "left" }} key={index}>
            <h3>Product Carousel Item {index + 1}</h3>
            <label>Title</label>
            <input
              id={`productCarouselItems[${index}].title`}
              name={`productCarouselItems[${index}].title`}
              type="text"
              onChange={formik.handleChange}
              value={formik.values.productCarouselItems[index].title}
            />

            <label>Detail</label>
            <textarea
              className='active-marketplaces'
              id={`productCarouselItems[${index}].title`}
              name={`productCarouselItems[${index}].detail`}
              type="text"
              onChange={formik.handleChange}
              value={formik.values.productCarouselItems[index].detail}
            />
            <label>Image</label>
            <input
              id={`productCarouselItems[${index}].title`}
              name={`productCarouselItems[${index}].image`}
              type="text"
              onChange={formik.handleChange}
              value={formik.values.productCarouselItems[index].image}
            />
          </div>
        ))}
        <div style={{ textAlign: "left" }} >

          <h3 >Product Video</h3>
          <label htmlFor="title">Title</label>
          <input
            id={`productContainerContent.title`}
            name={`productContainerContent.title`}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.productContainerContent.title}
          />
          <label htmlFor="title">Detail</label>
          <textarea
            className='active-marketplaces'

            id={`productContainerContent.detail`}
            name={`productContainerContent.detail`}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.productContainerContent.detail}
          />
          <label htmlFor="title">Video Url</label>
          <input
            id={`productContainerContent.videUrl`}
            name={`productContainerContent.videUrl`}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.productContainerContent.videUrl}
          />
        </div>
        <FormikProvider value={formik}>
          <FieldArray
            name='subProducts'
            render={arrayHelpers => (
              <div style={{ textAlign: "left" }} >{
                formik.values.subProducts.map((item, index) => (
                  <div key={index}>
                    <h3>Sub Product {index + 1}</h3>
                    <label>Title</label>
                    <input
                      id={`subProducts[${index}].title`}
                      name={`subProducts[${index}].title`}
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.subProducts[index].title}
                    />

                    <label>Detail</label>
                    <textarea
                      className='active-marketplaces'

                      id={`subProducts[${index}].detail`}
                      name={`subProducts[${index}].detail`}
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.subProducts[index].detail}
                    />
                    <label>Image</label>
                    <input
                      id={`subProducts[${index}].imageUrl`}
                      name={`subProducts[${index}].imageUrl`}
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.subProducts[index].imageUrl}
                    />
                    <button style={{ border: "none", color: "red", backgroundColor: "transparent", padding: "24px" }} type="button" onClick={() => arrayHelpers.remove(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <button style={{ border: "none", color: "blue", backgroundColor: "transparent", padding: "24px" }} type='button' onClick={() => arrayHelpers.push({ title: '', detail: '', imageUrl: '' })}>Add Sub Product</button>
              </div>
            )
            }
          />
        </FormikProvider>
        <button className='form-form-btn' type="submit">Submit</button>
      </form>
      {posted && <Navigate to="/admin-panel" replace={true}  />}
    </div>
  )
}

export default NewProduct