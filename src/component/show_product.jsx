import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Buy_Now from './buy_now';
import { useApi } from './fetch_api/data';


function ShowProduct() {

  const [product, setProduct] = useState(null);
  const [ItemBuy , setItemBuy] = useState(null);

  const location = useLocation();
  const data = location.state?.Data;
  const {Product} = useApi();


  const handleItemBuy = (ItemId) => {
    const showData = Product.find(item => item._id === ItemId);
    setItemBuy(showData);
    console.log(ItemBuy)
    
   };

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  if (!product) {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <Buy_Now item={ItemBuy}/>
      <div className="container ms-5 pt-5">
       <div class="card">
         <div class="card-body">
         <div className="row">
          <div className="col-sm-6 mt-5">
            <img src={product.product_picture} alt={product.product_name} />
          </div>
          <div className="col-sm-6 mt-5">
            <h1>{product.product_name}</h1>
            <h5>Price: {product.product_price}$</h5>
            <h6>Quantity: {product.product_quantity}</h6>
            <button className=' btn btn-primary'data-toggle="modal" data-target=".buy_item" onClick={() => handleItemBuy(product._id)} >
             Buy Now
            </button>          
            </div>
        </div>
         </div>
       </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShowProduct;
