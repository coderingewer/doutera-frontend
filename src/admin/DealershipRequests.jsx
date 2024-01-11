import React from 'react'
import AdminSideBar from './AdminSideBar'
import './dealershiprequests.css'


function DealershipRequests() {
  return (
    <div className='dealership-requests' >
      <AdminSideBar/>
      <div className="requests-grid">
        <span className="requests-titles">Viewed DealerShip Requests</span>
        <div className="request-card">
          <span className="request-card-index">1</span>
          <span className="request-card-name">John Doe</span>
          <div className='view-status'>
            <span >Viewed</span>
          </div>
        </div>
      </div>
      <div className="requests-grid">
        <span className="requests-titles">Unviewed DealerShip Requests</span>
        <div className="request-card">
          <span className="request-card-index">1</span>
          <span className="request-card-name">John Doe</span>
          <div className='view-status'>
            <span >Viewed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealershipRequests