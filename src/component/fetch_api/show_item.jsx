import React from 'react';


function Show_item({item}) {

  return (
    <div className=''>
     <div class="modal fade" id="show_item" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog   modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Show Product Detail</h5>
        <button type=" button" class="close bg-danger text-light ms-auto border-0" 
        data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="row">
          <div className="col-sm-6 mt-4"><h4>{item && item.product_name}</h4></div>
          <div className="col-sm-6"><img height={100} width={150} src={item && item.product_picture} alt="" /></div>
        </div>
        <div className="row">
          <div className="col-sm-12 mt-4">
            <h4>Rs  : 
               <span className='text-danger'>${item && item.product_price}</span>
            </h4>
            </div>
          <div className="col-sm-12 mt-4">
            <h4>
             <span className='text-primary'>Product Detail</span>: {item && item.product_detail}
             </h4>
             </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
       </div>
    
  )
}

export default Show_item