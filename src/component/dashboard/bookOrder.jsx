import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import axios from 'axios';
import verifyToken from '../auth/verifyToken'
import { useNavigate } from 'react-router-dom';

function BookOrder() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const isAdmin = verifyToken();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}//all_order`);

                if (!response.data) {
                    throw new Error('Failed to fetch orders');
                }
                setOrders(response.data.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();


        if (!isAdmin) {
            navigate('/signin');
        }
        if (!isAdmin) {
            return null;
        }
    

    }, [isAdmin, navigate,verifyToken]);
    return (
        <>
            <Sidebar />
            <div className="content">
                <Navbar />

                {/* Total Sale */}
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-light text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Book Order</h6>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-dark">
                                        <th scope="col">Order ID</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Total Price</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">User PhoneNo</th>
                                        <th scope="col">User City</th>
                                       <th scope="col">User Address</th>
                                       <th scope="col">Bill</th>

                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders && orders.map(order => (
                                        <tr key={order._id}>
                                            <td>{order._id}</td>
                                            <td>{order.product_name}</td>
                                            <td>${order.total_price}</td>
                                            <td>{order.user_name}</td>
                                            <td>{order.user_phoneNumber}</td>
                                            <td>{order.user_city}</td>
                                            <td>{order.user_address}</td>
                                            <td>{order.paymentStatus ? (
                                                  <button className='btn btn-success'>Paid</button>
                                              ) : (
                                                  <button className='btn btn-danger'>Unpaid</button>
                                              )}
                                            </td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Total Sale End */}
            </div>
        </>
    );
}

export default BookOrder;
