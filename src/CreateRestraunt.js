import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { createRestraunt } from './api/restraunts';

function CreateRestraunt() {
  const navigate = useNavigate()
  const formik =useFormik({
    initialValues : {
      name : "",
      type : "",
      address : {
        line1 : "",
        line2 : "",
        state : "",
        city : "",
        country : "",
        pincode : ""
      },
      ownerName : "",
      ownerEmail : "",
      ownerPhone : "",
      url : "",
      openTime : "",
      closeTime : ""      
    },

   onSubmit : async (values) => {
    try{
      console.log(values)
      await createRestraunt(values)
      navigate("/zomato/portal/list-restraunts")
    }catch (error){
      alert("Something went wrong")
    }
   } 
  });
  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>
          <div className='col-lg-12'>
            <label>Restraunt Name</label>
            <input 
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            type={"text"} 
            className="form-control"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <label>Type</label>
            <select 
             name='type'
             onChange={formik.handleChange}
             value={formik.values.type}
            className='form-control'>
              <option value={"veg"}>Veg</option>
              <option value={"nonveg"}>Non-Veg</option>
            </select>
          </div>
          <div className='col-lg-4'>
            <label>Open Time</label>
            <input 
             name='openTime'
             onChange={formik.handleChange}
             value={formik.values.openTime}
            type="time" 
            className="form-control"/>
          </div>
          <div className='col-lg-4'>
            <label>Close Time</label>
            <input 
             name='closeTime'
             onChange={formik.handleChange}
             value={formik.values.closeTime}
            type="time" 
            className="form-control" />
          </div>
          <div className='col-lg-4'>
            <label>Owner Name</label>
            <input 
             name='ownerName'
             onChange={formik.handleChange}
             value={formik.values.ownerName}
            type={"text"} 
            className="form-control"/>
          </div>
          <div className='col-lg-4'>
            <label>Phone Number</label>
            <input  
            name='ownerPhone'
            onChange={formik.handleChange}
            value={formik.values.ownerPhone}
            type={"text"} 
            className="form-control"/>
          </div>
          <div className='col-lg-4'>
            <label>Email</label>
            <input  
            name='ownerEmail'
            onChange={formik.handleChange}
            value={formik.values.ownerEmail}
            type={"text"} 
            className="form-control"/>
          </div>
        </div>
        <div className='row'>
        <div className='col-lg-12'>
            <label>Image URL</label>
            <input 
             name='url'
             onChange={formik.handleChange}
             value={formik.values.url}
             type={"text"} 
             className="form-control"/>
          </div>
        </div>
        <h3>Address</h3>
        <div className='row'>
        <div className='col-lg-4'>
            <label>Line 1</label>
            <input 
             name='address.line1'
             onChange={formik.handleChange}
             value={formik.values.address.line1}
             type={"text"} 
             className="form-control"/>
          </div>
          <div className='col-lg-4'>
            <label>Line 2</label>
            <input 
             name='address.line2'
             onChange={formik.handleChange}
             value={formik.values.address.line2}
             type={"text"} 
             className="form-control"/>
          </div>
          <div className='col-lg-4'>
            <label>City</label>
            <input 
             name='address.city'
             onChange={formik.handleChange}
             value={formik.values.address.city}
             type={"text"} 
             className="form-control"/>
          </div>
          <div className='col-lg-4'>
            <label>State</label>
            <input 
             name='address.state'
             onChange={formik.handleChange}
             value={formik.values.address.state}
             type={"text"} 
             className="form-control"/>
          </div>
          <div className='col-lg-4'>
            <label>Country</label>
            <input 
             name='address.country'
             onChange={formik.handleChange}
             value={formik.values.address.country}
             type={"text"} 
             className="form-control"/>
          </div>
          <div className='col-lg-4'>
            <label>Pincode</label>
            <input 
             name='address.pincode'
             onChange={formik.handleChange}
             value={formik.values.address.pincode}
             type={"text"} 
             className="form-control"/>
          </div>
        </div>
        <input type={"submit"} value="submit" className='btn btn-primary mt-2'/>
      </form>
    </div>
  )
}

export default CreateRestraunt