import React, {useState } from 'react'
import Buy_Now from './buy_now';
import 'owl.carousel';
import 'slick-carousel';
import { useApi } from './fetch_api/data';
import Header from './header';
import Show_item from './fetch_api/show_item';
import Confirm_Order from './confirm_order';


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

const handleItemShow = (ItemId) => {
  const showData = Product.find(item => item._id === ItemId);
  setItemShow(showData);
};


console.log(ItemShow);

;
  return (
    <div>
  <Header/>
  <Buy_Now item={ItemShow}/>
  <Show_item item={ItemShow}/>
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
                          <div className="col-sm-6 col-6"><button className='btn btn-danger'  data-toggle="modal" data-target="#show_item" onClick={() => handleItemShow(value._id)} >
                            Show Item
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
              <h2>About Sixteen Clothing</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <h4>Looking for the best products?</h4>
              <p><a rel="nofollow" href="https://templatemo.com/tm-546-sixteen-clothing" target="_parent">This template</a> is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. <a rel="nofollow" href="https://templatemo.com/contact">Contact us</a> for more info.</p>
              <ul className="featured-list">
                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                <li><a href="#">Consectetur an adipisicing elit</a></li>
                <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                <li><a href="#">Corporis, omnis doloremque</a></li>
                <li><a href="#">Non cum id reprehenderit</a></li>
              </ul>
              <a href="about.html" className="filled-button">Read More</a>
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
                  <h4>Creative &amp; Unique <em>Sixteen</em> Products</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                </div>
                <div className="col-md-4">
                  <a href="#" className="filled-button">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-content">
              <p>Copyright &copy; 2020 Sixteen Clothing Co., Ltd.
            
            - Design: <a rel="nofollow noopener" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>


   



    <Show_item item={ItemShow}/>
    </div>
  )
}

export default Main