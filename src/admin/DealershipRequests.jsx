import React, { useState } from 'react'
import AdminSideBar from './AdminSideBar'
import './dealershiprequests.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetActiveDealerships, GetActiveFalseDealerships, MarkAsRead } from '../Api/DealerShips/DealerShipSlice'


function DealershipRequests() {
  const activeDealers = useSelector(state => state.dealerships.activeDealerships)
  const activeFalseDealers = useSelector(state => state.dealerships.activeFalseDealerships)
  const dispacth = useDispatch()
  useState(() => {
    dispacth(GetActiveDealerships())
    dispacth(GetActiveFalseDealerships())
  }, [dispacth])
  const handleMarkAsread = (id) => {
    dispacth(MarkAsRead(id))
  }
  return (
    <div className='dealership-requests' >
      <AdminSideBar />
      <div className="requests-grid">
        <span className="requests-titles">Viewed DealerShip Requests</span>
        {
          activeFalseDealers.map((dealer, index) => (
            <div key={index + 1} className="request-card">
              <span className="request-card-index">{index + 1}</span>
              <h3>Name:</h3>
              <span className="request-card-name">{dealer.name}</span>
              <h3>Email:</h3>
              <span className="request-card-name">{dealer.email}</span>
              <h3>Description:</h3>
              <span className="request-card-name">{dealer.description}</span>
              <h3>Websites:</h3>
              <span className="request-card-name">{dealer.websites}</span>
              <h3>Address:</h3>
              <span className="request-card-name">{dealer.address}</span>
            </div>
          ))
        }
      </div>
      <div className="requests-grid">
        <span className="requests-titles">Unviewed DealerShip Requests</span>
        {
          activeDealers.map((dealer, index) => (
            <div key={index + 1} className="request-card">
              <span className="request-card-index">{index + 1}</span>
              <h3>Name:</h3>
              <span className="request-card-name">{dealer.name}</span>
              <h3>Email:</h3>
              <span className="request-card-name">{dealer.email}</span>
              <h3>Description:</h3>
              <div className="request-card-name">{dealer.description}</div>
              <h3>Websites:</h3>
              <span className="request-card-name">{dealer.websites}</span>
              <h3>Address:</h3>
              <span className="request-card-name">{dealer.address}</span>
              <div className='view-status'>
                <span style={{color:"red"}} >Unviewed</span>
                <button type='button' onClick={() =>handleMarkAsread(dealer.ID)} >Mark as viewed</button>
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default DealershipRequests