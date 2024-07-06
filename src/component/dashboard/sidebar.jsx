import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <>
          {/* Sidebar Start */}
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <a href="/dashboard" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">DASHMIN</h3>
          </a>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">

            <Link  to='/total_product' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Product</Link>
          <Link  to='/total_sale' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Total Sale</Link>
          <Link  to='/total_sale' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Book Order</Link>
           
          </div>
        </nav>
      </div>
      {/* Sidebar End */}
      </>
  )
}

export default Sidebar