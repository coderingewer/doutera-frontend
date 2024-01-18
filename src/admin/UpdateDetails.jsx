import { Field, FieldArray, FormikProvider, useFormik } from 'formik';
import "../pages/form.css"
import "./newproduct.css"
import { useDispatch, useSelector } from 'react-redux';
import AdminSideBar from './AdminSideBar';
import { React, useState } from 'react';
import { GetDetailsAsync, UpdateDetailsAsync } from '../Api/Details/DetailSlice';
import { UploadImage, UploadVideo } from '../Api/Cluodinary/UploadFile';


function UpdateDetails() {
    const dispatch = useDispatch();
    const details = useSelector(state => state.details.details)
    const url = useSelector(state => state.fileUpload.url)
  const videoUrl = useSelector(state => state.fileUpload.videoUrl)
  const success = useSelector(state => state.fileUpload.success)
  const loading = useSelector(state => state.fileUpload.loading)
  const [inValidType, setİnvalidType] = useState(false)

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
    }, [dispatch])

    const [file, setFile] = useState(null)
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log(event.target.files[0])
      setFile(file);
    };
    const handleUpload = (file) => {
      file == null ? setİnvalidType(true) :
        dispatch(UploadImage(file)) && setİnvalidType(false)
  
    }
    const setFormikValue = (value) => {
  
      formik.setFieldValue(value, url)
    }
    const setFormikValueVid = (value) => {
      formik.setFieldValue(value, videoUrl)
    }
    const handleUploadVideo = async (file) => {
      file == null ? setİnvalidType(true) :
        dispatch(UploadVideo(file))
    }
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
                <div className="file-upload-container">
            {
              inValidType && <span style={{ color: "red" }} >File not selected</span>
            }
            {
              loading &&
              <img style={{ width: "48px" }} src={require("../assets/icons/loading.gif")} alt="" />
            }
            {
              success && <span style={{ color: "green" }} >Uploaded</span>
            }
            <input className='upload-file' accept='.mp4' onChange={(event) => handleFileChange(event)} type="file" />
            <button disabled={loading ? true : false} className='upload-btn' type='button' onClick={() => handleUploadVideo(file)} >Upload New Video</button>
            {
              success &&
              <button type='button' onClick={() => setFormikValueVid("homeVideo")} >Use Uploaded Video</button>
            }
          </div>
                    <label htmlFor="name">Contact Page Image Url</label>
                <input
                    className='active-marketplaces'
                    id="contactPageImageUrl"
                    name="contactPageImageUrl"
                    onChange={formik.handleChange}
                    value={formik.values.contactPageImageUrl}
                />
                <div className="file-upload-container">
              {
                inValidType && <span style={{ color: "red" }} >File not selected</span>
              }
              {
                loading &&
                <img style={{ width: "48px" }} src={require("../assets/icons/loading.gif")} alt="" />
              }
              {
                success && <span style={{ color: "green" }} >Uploaded</span>
              }
              <input accept=".jpg, .jpeg, .png, .gif" className='upload-file' onChange={(event) => handleFileChange(event)} type="file" />
              <button disabled={loading ? true : false} className='upload-btn' type='button' onClick={() => handleUpload(file)} >Upload New Image</button>
              {
                success && 
              <button type='button' onClick={() => setFormikValue("contactPageImageUrl")} >Use Uploaded Image</button>
              }
            </div>
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