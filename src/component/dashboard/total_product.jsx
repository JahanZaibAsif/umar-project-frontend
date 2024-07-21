import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import { useApi } from '../fetch_api/data';
import axios from 'axios';
import Swal from 'sweetalert2';
import verifyToken from '../auth/verifyToken'
import { useNavigate } from 'react-router-dom';

function TotalProduct() {
    const { Product } = useApi();
    const [products, setProducts] = useState([]);


    const [ProductData, setProductData] = useState({
        product_name: '',
        product_price: '',
        product_detail: '',
        product_quantity: '',
        product_picture: null
    });
    const [EditData, setEditData] = useState({
        _id: '',
        product_name: '',
        product_price: '',
        product_detail: '',
        product_picture: null
    });

    const handleChange = (e) => {
        if (e.target.name === 'product_picture') {
            setProductData({ ...ProductData, [e.target.name]: e.target.files[0] });
        } else {
            setProductData({ ...ProductData, [e.target.name]: e.target.value });
        }
    };

    useEffect(() => {
        if (Product) {
            setProducts(Product);
        }
    }, [Product]);
    const navigate = useNavigate();
    const isAdmin = verifyToken();

    useEffect(() => {
        if (!isAdmin) {
            navigate('/signin');
        }
        if (!isAdmin) {
            return null;
        }
    }, [isAdmin, navigate,verifyToken]);

    

    const handleEditChange = (e) => {
        if (e.target.name === 'product_picture') {
            setEditData({ ...EditData, [e.target.name]: e.target.files[0] });
        } else {
            setEditData({ ...EditData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('product_name', ProductData.product_name);
            formData.append('product_price', ProductData.product_price);
            formData.append('product_detail', ProductData.product_detail);
            formData.append('product_picture', ProductData.product_picture);
            formData.append('product_quantity', ProductData.product_quantity);
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/create_product`, formData);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your Product added successfully!',
            });
            
            setProductData({
                product_name: '',
                product_price: '',
                product_detail: '',
                product_quantity: '',
                product_picture: null,
            });
            setProducts([...products, response.data]);
        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    };

    const handleEdit = (product) => {
        setEditData(product);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('product_name', EditData.product_name);
            formData.append('product_price', EditData.product_price);
            formData.append('product_detail', EditData.product_detail);
            formData.append('product_detail', EditData.product_detail);

            if (EditData.product_picture) {
                formData.append('product_picture', EditData.product_picture);
            }
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/update_product/${EditData._id}`, formData);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your Product updated successfully!',
            });
            setProducts(products.map(p => (p._id === EditData._id ? response.data : p)));
        } catch (error) {
            console.error('Error updating data on server:', error);
        }
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`${process.env.REACT_APP_BASE_URL}/delete_product/${id}`);
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                    );
                    setProducts(products.filter(product => product._id !== id));
                } catch (error) {
                    console.error('Error deleting product:', error);
                }
            }
        });
    };

    return (
        <>
            <Sidebar />
            <div className="content">
                <Navbar />
                {/* Add Product Model */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="mb-3">
                                        <label htmlFor="product_name" className="form-label">Product Name</label>
                                        <input type="text" className="form-control" id="product_name" name="product_name" value={ProductData.product_name} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="product_price" className="form-label">Product Price</label>
                                        <input type="text" className="form-control" id="product_price" name="product_price" value={ProductData.product_price} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="product_picture" className="form-label">Product Picture</label>
                                        <input type="file" className="form-control mt-2" name="product_picture" onChange={handleChange} />
                                        {ProductData.product_picture && (<p>Selected file: {ProductData.product_picture.name}</p>)}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="product_detail" className="form-label">Product Detail</label>
                                        <input type="text" className="form-control" id="product_detail" name="product_detail" value={ProductData.product_detail} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="product_quantity" className="form-label">Product Quantity</label>
                                        <input type="number" className="form-control" id="product_quantity" name="product_quantity" value={ProductData.product_quantity} onChange={handleChange} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button name='submit' className="btn btn-primary">Add Product</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Add Product Model */}
                {/* Edit Product Model */}
                <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="editModalLabel">Edit Product</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleUpdate} encType="multipart/form-data">
                                    <div className="mb-3">
                                        <label htmlFor="edit_product_name" className="form-label">Product Name</label>
                                        <input type="text" className="form-control" id="edit_product_name" name="product_name" value={EditData.product_name} onChange={handleEditChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="edit_product_price" className="form-label">Product Price</label>
                                        <input type="text" className="form-control" id="edit_product_price" name="product_price" value={EditData.product_price} onChange={handleEditChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="edit_product_picture" className="form-label">Product Picture</label>
                                        <input type="file" className="form-control mt-2" name="product_picture" onChange={handleEditChange} />
                                        {EditData.product_picture && (<p>Selected file: {EditData.product_picture.name}</p>)}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="edit_product_detail" className="form-label">Product Detail</label>
                                        <input type="text" className="form-control" id="edit_product_detail" name="product_detail" value={EditData.product_detail} onChange={handleEditChange} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button name='submit' className="btn btn-primary">Update Product</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Edit Product Model */}
                {/* Total Product */}
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-light text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Total Product</h6>
                            <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Product</button>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-dark">
                                        <th scope="col">ID</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Price</th>
                                        <th scope="col">Product Picture</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products && products.map(value => (
                                        <tr key={value._id}>
                                            <td>{value._id}</td>
                                            <td>{value.product_name}</td>
                                            <td>{value.product_price}</td>
                                            <td><img src={value.product_picture} height={100} width={100} alt="" /></td>
                                            <td>
                                                <button className='btn btn-primary m-2' data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handleEdit(value)}>Edit</button>
                                                <button onClick={() => handleDelete(value._id)} className="btn btn-danger m-2">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Total Product End */}
            </div>
        </>
    );
}

export default TotalProduct;
