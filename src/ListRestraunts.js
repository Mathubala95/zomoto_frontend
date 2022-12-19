import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listRestraunt } from './api/restraunts'

function ListRestraunts() {
    const [restraunts, setRestraunts] = useState([])
    useEffect(() => {
        getRestraunt()
    }, [])

    async function getRestraunt() {
        try {
            let res = await listRestraunt()
            setRestraunts(res.data);
        } catch (error) {
            alert("Something went wrong")
        }
    }

    return (
        <div class="container-fluid">

            <h1 class="h3 mb-2 text-gray-800">Restraunts</h1>
            <Link to={"/zomato/portal/create-restraunts"} className='btn btn-primary'>Create Restraunt</Link>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Restraunt Name</th>
                                    <th>Type</th>
                                    <th>Open Time</th>
                                    <th>Close Time</th>
                                    <th>Owner Name</th>
                                    <th>Owner Number</th>
                                    <th>Owner Email</th>
                                    <th>Restraunt</th>
                                    <th>Address</th>
                                    
                                </tr>
                            </thead>

                            <tbody>
                                {restraunts.map((res) => {
                                    return (
                                        <tr>
                                            <td>{res.name}</td>
                                            <td>{res.type}</td>
                                            <td>{res.openTime}</td>
                                            <td>{res.closeTime}</td>
                                            <td>{res.ownerName}</td>
                                            <td>{res.ownerEmail}</td>
                                            <td>{res.ownerPhone}</td>
                                            <td><img src={res.url} width="50" height="50"></img></td>                                          
                                            {/* <td>{res.address}</td> */}

                                            <td>
                                                <Link to={`/zomato/portal/list-dishes/${res._id}`} className='btn btn-sm btn-primary'>View Dish</Link>

                                            </td>
                                        </tr>

                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListRestraunts
