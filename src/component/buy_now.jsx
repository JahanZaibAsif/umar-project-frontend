import React, { useState, useEffect } from 'react';
import Confirm_Order from './confirm_order';
import Swal from 'sweetalert2';

function Buy_Now({ item }) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderId, setOrderId] = useState(null);
  const [orderPrice, setOrderPrice] = useState(null);

  const [formData, setFormData] = useState({
    user_name: '',
    user_phoneNumber: '',
    user_city: '',
    user_address: '',
    size: '',
    color: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const ProductIncrement = () => {
    setCount(preCount => preCount + 1);
    updateTotalPrice(count + 1);
  };

  const ProductDecrement = () => {
    if (count > 1) {
      setCount(preCount => preCount - 1);
      updateTotalPrice(count - 1);
    }
  };

  const updateTotalPrice = newCount => {
    setPrice(newCount * (item && item.product_price));
  };

  useEffect(() => {
    if (item) {
      setPrice(item.product_price * count);
    }
  }, [item, count]);

  useEffect(() => {
    const result = count + price;
    setTotalPrice(result);
  }, [count, price]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirmOrder = () => {
    if (!formData.user_name.trim() || !formData.user_phoneNumber.trim() || !formData.size.trim() || !formData.color.trim() || !formData.user_city.trim() || !formData.user_address.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the required fields.',
      });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('product_name', item.product_name);
    formDataToSend.append('productId', item._id);
    formDataToSend.append('product_price', item.product_price);
    formDataToSend.append('count', count);
    formDataToSend.append('total_price', totalPrice);
    formDataToSend.append('user_name', formData.user_name);
    formDataToSend.append('user_phoneNumber', formData.user_phoneNumber);
    formDataToSend.append('user_city', formData.user_city);
    formDataToSend.append('user_address', formData.user_address);
    formDataToSend.append('size', formData.size);
    formDataToSend.append('color', formData.color);

    fetch(`${process.env.REACT_APP_BASE_URL}/store_order`, {
      method: 'POST',
      body: formDataToSend,
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(errorData => {
          throw new Error(errorData.error);
        });
      }
      return response.json(); 
    })
    .then(data => {
      console.log('Order submitted successfully:', data);
      setOrderId(data.data._id);
      setOrderPrice(data.data.total_price);
      setShowConfirmation(true);
      closeBuyNowModal();
      setCount(1);
      setFormData({
        user_name: '',
        user_phoneNumber: '',
        user_city: '',
        user_address: '',
        size: '',
        color: ''
      });
    })
    .catch(error => {
      console.error('Error submitting order:', error);
      Swal.fire({
        icon: 'error',
        title: 'Order Failed',
        text: error.message,
      });
    });
  };

  const closeModal = () => {
    setShowConfirmation(false);
  };

  const closeBuyNowModal = () => {
    const modal = document.getElementById('buy_item');
    modal.classList.remove('show');
    modal.style.display = 'none';
  };

  return (
    <div>
      <Confirm_Order order={{ orderId, orderPrice }} showConfirmation={showConfirmation} closeModal={closeModal} />
      <div className="buy_item modal fade" id="buy_item" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Order Now Product Detail</h5>
              <button type="button" className="close bg-danger text-light ms-auto border-0" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-sm-6 text-center mt-3">{item && item.product_name}</div>
                    <div className="col-sm-6"><img height={70} width={70} src={item && item.product_picture} alt="" /></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-sm-6 text-center mt-3">
                      <div className="row">
                        <div className="col-sm-4 w-80">
                          <button className='border-light' onClick={ProductIncrement}>+</button>
                        </div>
                        <div className="col-sm-4 border">{count}</div>
                        <div className="col-sm-4">
                          <button className='border-light' onClick={ProductDecrement}>-</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-3 border bg-success text-light border rounded-1 text-center">${price}</div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-2 border rounded-2 bg-success text-light text-center">${price}</div>
                  <div className="col-sm-1">+</div>
                  <div className="col-sm-5 border rounded-2 bg-warning text-light text-center">Delivery charges: {count}$</div>
                  <div className="col-sm-1">=</div>
                  <div className="col-sm-3 border rounded-2 bg-danger text-light text-center">Total: ${totalPrice}</div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-6">
                  <select name="size" value={formData.size} onChange={handleInputChange} className='form-select'>
                    <option selected>Select Size</option>
                    <option value="40">XXL: 45</option>
                    <option value="40">XL: 40</option>
                    <option value="40">Large: 38</option>
                    <option value="40">Medium: 35</option>
                    <option value="40">Small: 30</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <select name="color" value={formData.color} onChange={handleInputChange} className='form-select'>
                    <option selected>Select Color</option>
                    <option value="black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="White">White</option>
                  </select>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-6">
                  <input type="text" name='user_name' value={formData.user_name} onChange={handleInputChange} className='form-control mt-2' placeholder='Enter the Name' required />
                </div>
                <div className="col-sm-6">
                  <input type="text" name='user_phoneNumber' value={formData.user_phoneNumber} onChange={handleInputChange} className='form-control mt-2' placeholder='Enter the Phone Number' />
                </div>
                <div className="col-sm-6">
                  <input type="text" name='user_city' value={formData.user_city} onChange={handleInputChange} className='form-control mt-2' placeholder='Enter the City' />
                </div>
                <div className="col-sm-6">
                  <input type="text" name='user_address' value={formData.user_address} onChange={handleInputChange} className='form-control mt-2' placeholder='Enter the Address' />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#confirm_order" onClick={handleConfirmOrder}>Confirm Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy_Now;
