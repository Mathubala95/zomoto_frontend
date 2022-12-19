import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {  getDish } from './api/dish';

function ListDishes() {
  const params = useParams();
  const [dishes,setDishes] = useState([])

  useEffect(() => {
    getDishes()
  }, [])

  async function getDishes(){
    try {
      const dishes = await getDish(params.rId)
      setDishes(dishes.data)
    }catch (error) {
      alert("Something went wrong")
    }
  }

  return (
    <div class="container-fluid">

    <h1 class="h3 mb-2 text-gray-800">Restraunts Detail</h1>
    <Link to={`/zomato/portal/create-dishes/${params.rId}`} className="btn btn-primary btn-sm">Create Dish</Link>

    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    
                    <tbody>
                      {
                        dishes.map((dish) => {
                          return <tr>
                          <th>{dish.name}</th>
                          <th>{dish.type}</th>
                          <th>{dish.price}</th>
                          <th>{dish.ingredients}</th>
                          <td>
                            <img src={`${dish.url}`} width={"50"} height={"50"}/>
                          </td>
                      </tr>

                        })
                      }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
  )
}

export default ListDishes