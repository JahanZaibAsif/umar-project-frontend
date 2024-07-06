import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import Sidebar from './sidebar';
import DashboardContent from './DashboardContent';
import verifyToken from '../auth/verifyToken'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const isAdmin = verifyToken();
  console.log('Is Admin:', isAdmin);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/signin');
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="container-fluid position-relative bg-white d-flex p-0">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}

export default Dashboard;
