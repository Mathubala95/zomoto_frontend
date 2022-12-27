import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createDish } from './api/dish'

function CreateDishes() {
  const params = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues : {
      name : "",
      type : "",
      price : "",
      url : "",
      ingredients : ""
    },

    onSubmit : async (values) => {
      try {
        await createDish(params.rId, values);
        navigate(`/zomato/portal/list-dishes/${params.rId}`)
      }catch(error){
        alert("Something went wrong")

      }
    }
  })
  return (
    <div className='container'>
     <form onSubmit={formik.handleSubmit}>
     <div className='row'>
        <div className='col-lg-4'>
          <label>Name</label>
          <input 
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
          type={"text"} className="form-control"/>
        </div>
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
          <label>Price</label>
          <input 
          name='price'
          onChange={formik.handleChange}
          value={formik.values.price}
          type={"number"} className="form-control"/>
        </div>
        <div className='col-lg-12'>
          <label>Image</label>
          <input 
          name='url'
          onChange={formik.handleChange}
          value={formik.values.url}
          type={"text"} className="form-control"/>
        </div>
        <div className='col-lg-12'>
          <label>ingredients</label>
          <input 
          name='ingredients'
          onChange={formik.handleChange}
          value={formik.values.ingredients}
          type={"text"} className="form-control"/>
        </div>
        <div className='col-lg-12'>
        <input type={"submit"} value="Submit" className='btn btn-primary mt-2'/>
        </div>
      </div>
     </form>
    </div>
  )
}

export default CreateDishes