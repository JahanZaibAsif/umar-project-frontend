
import { Link } from "react-router-dom";

function Confirm_Order({order}) {
  const handleCashOnDelivery = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/cashondelivery/confirm_order`, { // Corrected URL
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({orderId:order.orderId })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        
      } else {
        console.error('Failed to confirm order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleOnlineCharge = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/onlinecharge/confirm_order`, { // Corrected URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({orderId:order.orderId })
      });

      if (response.ok) {
        const data = await response.text();
        window.location.href = data;
        console.log(data);
      } else {
        console.error('Failed to confirm order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  //    try {
  //     console.log(order.orderPrice)
  //     const response = await fetch('http://localhost:4000/create_token', { // Corrected URL
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({orderPrice: order.orderPrice })
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data.data.client_secret)
  //     } else {
  //       console.error('Failed to confirm order');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
  // console.log(order.orderPrice)
  }
  
  return (
    <div>
        <div class="modal fade" id="confirm_order" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered " role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Payment Type</h5>
        <button type="button" class="close ms-auto bg-danger text-light border-0" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="row">
            <div className="col-sm-5">
                <button className='btn btn-danger' onClick={handleCashOnDelivery}  >Cash of Delivery</button>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-5">
                <button className='btn btn-success' onClick={handleOnlineCharge} > 
                Online Pay
                </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Confirm_Order