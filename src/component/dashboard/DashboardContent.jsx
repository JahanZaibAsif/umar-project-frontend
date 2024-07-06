import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useApi } from '../fetch_api/data';
import axios from 'axios';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

function DashboardContent() {
  const [order, setOrder] = useState([]);

  const { Product } = useApi();

  useEffect(() => {
    const fetchTotalOrder = async()=>{
      const token = localStorage.getItem('token'); 
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/all_order`, {
        method:'GET',
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });    
        setOrder(response.data.data.length);
      
    }
    fetchTotalOrder();
  }, [order]);
 
  
  return (
    <>
        <div className="content">

       <Navbar/>
          {/* Sale & Revenue Start */}

      <div className="container-fluid pt-4 px-6">
        <div className="row g-4">
          <div className="col-sm-6 col-xl-6">
          <Link to="/total_sale">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-line fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">ToTal Order</p>
                <h6 className="mb-0">{order}</h6>
              </div>
            </div>
            </Link>
          </div>
         <div className="col-sm-6 col-xl-6">
         <Link to="/total_product">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-bar fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Total Product</p>
                <h6 className="mb-0">{Product && Product.length}</h6>
              </div>
            </div>
            </Link>
          </div>
         <div className="col-sm-6 col-xl-6">
         <Link to="booking_detail">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-area fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Booking Detail</p>
                <h6 className="mb-0">$1234</h6>
              </div>
            </div>
            </Link>
          </div>
         <div className="col-sm-6 col-xl-6">
         <Link to="">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-pie fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Total Revenue</p>
                <h6 className="mb-0">$1234</h6>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Sale & Revenue End */}
      
              

           
            </div>
        </>
  )
}

export default DashboardContent