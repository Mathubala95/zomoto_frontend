import React from 'react'
import { Link } from 'react-router-dom'


function Zomato() {
  return (
    <div className='container-fluid text-center'>
      <div className='row '>
        <div className='col-lg-12'>
          <div class="card text-bg-dark">
            <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5qb3lpbmclMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80 " class="card-img" alt="..." />
            <div class="card-img-overlay  ">
              <h1 style={{ color: "wheat" }} class="card-title ">WELCOME TO ZOMATO</h1>
              <h3 style={{ color: "wheat" }} class="card-text mt-5">* Every meal matters   * Shaping the future of food    * Never have a bad meal</h3>
              <h3 style={{ color: "wheat" }} class="card-text mt-5 "><small>Let's Go</small></h3>
              <Link to={"/zomato"} className='btn btn-primary mr-2 mt-3'>Admin</Link>
              <Link to={"/zomato"} className='btn btn-primary mt-3 ml-5'>User</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zomato


