import React, {useState,useEffect } from 'react'
import Buy_Now from './buy_now';
import 'owl.carousel';
import 'slick-carousel';
import { useApi } from './fetch_api/data';
import Header from './header';
import Show_item from './fetch_api/show_item';
import Confirm_Order from './confirm_order';
import Footer from './footer';
import { Link ,useNavigate, } from 'react-router-dom';


function Main() {
const {Product} = useApi();
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  const lastSpaceIndex = text.lastIndexOf(' ', maxLength);
  return text.substr(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxLength) + '...';
};



const [ItemShow, setItemShow] = useState(null);
const navigate = useNavigate();


const handleItemShow = (ItemId) => {
  const showData = Product.find(item => item._id === ItemId);
  setItemShow(showData);
  if (showData) {
    navigate('/show_product', { state: { Data: showData } });
  }};

useEffect(() => {
  if (ItemShow) {
    navigate('/show_product', { state: { Data: ItemShow } });
  }
}, [ItemShow, navigate]);

  return (
    <div>
  <Header/>
  <Buy_Now item={ItemShow}/>
    <Confirm_Order/>

    {/* <!-- Banner Starts Here --> */}
    <div className="banner header-text">
      <div className="owl-banner owl-carousel">
        <div className="banner-item-01">
          <div className="text-content">
            <h4>Best Offer</h4>
            <h2>New Arrivals On Sale</h2>
          </div>
        </div>
        <div className="banner-item-02">
          <div className="text-content">
            <h4>Flash Deals</h4>
            <h2>Get your best products</h2>
          </div>
        </div>
        <div className="banner-item-03">
          <div className="text-content">
            <h4>Last Minute</h4>
            <h2>Grab last minute deals</h2>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Banner Ends Here --> */}

    <div className="latest-products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Latest Products</h2>
              <a href="products.html">view all products <i className="fa fa-angle-right"></i></a>
            </div>
          </div>
         {Product && Product.map(value => (
                    <div className="col-md-4">
                    <div className="product-item">
                      <a href="#"><img src={value.product_picture} height="150px" alt=""/></a>
                      <div className="down-content">
                        <a href="#"><h4>{value.product_name}</h4></a>
                        <h6>${value.product_price}</h6>
                        <p className="product-detail">{truncateText(value.product_detail, 110)}</p> 
                        <div className="row">
                          <div className="col-sm-6 col-6"><button className='btn btn-danger' onClick={() => handleItemShow(value._id)} >
                          <Link to={{
                                 pathname: '/show_product',
                                 state: { Data: ItemShow }
                               }} className='text-light'  >Show Item</Link>
                        </button></div>
                          <div className="col-sm-6 col-6"><button className='btn btn-primary'data-toggle="modal" data-target="#buy_item" onClick={() => handleItemShow(value._id)} >
                          Buy Now
                          </button>
                            </div>
                          </div>                       
                      </div>
                    </div>
                  </div>
         ))}

        </div>
      </div>
    </div>

    <div className="best-features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>STRONG PACKAGINGS
              LIMITED</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <h4>Looking for the best products?</h4>
              <p>"To lead the global shift towards environmentally responsible packaging through innovation,
              education, and commitment to sustain</p>
              <ul className="featured-list">
                <li><a href="#">Patents: Holds multiple patents for biodegradable packaging technologies.</a></li>
                <li><a href="#">Consectetur an adipisicing elit</a></li>
                <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                <li><a href="#">Product Line Expansion: Introducing new products such as edible packaging and
                </a></li>
                <li><a href="#"> Global Reach: Further expanding distribution channels in emerging markets.
                </a></li>
              </ul>
              <Link href="/about  " className="filled-button">Read More</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <img src="assets/images/feature-image.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-content">
              <div className="row">
                <div className="col-md-8">
                  <h4>Creative &amp; Unique <em>STRONG PACKAGINGS
                  LIMITED</em> Products</h4>
                  <p>To revolutionise the disposable packaging industry by providing sustainable, eco-friendly
                  solutions that meet the needs of businesses</p>
                </div>
                <div className="col-md-4">
                  <Link to="/product" className="filled-button">Purchase Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>


   



    <Show_item item={ItemShow}/>
    </div>
  )
}

export default Main