 <div className="cell example example5" id="example-5">
 <form>
   <div id="example5-paymentRequest">
   </div>
   <fieldset>
     <legend className="card-only" data-tid="elements_examples.form.pay_with_card">Pay with card</legend>
     <legend className="payment-request-available" data-tid="elements_examples.form.enter_card_manually">Or enter card details</legend>
     <div className="row">
       <div className="field">
         <label for="example5-name" data-tid="elements_examples.form.name_label">Name</label>
         <input id="example5-name" data-tid="elements_examples.form.name_placeholder" className="input" type="text" placeholder="Jane Doe" required="" autocomplete="name"/>
       </div>
     </div>
     <div className="row">
       <div className="field">
         <label for="example5-email" data-tid="elements_examples.form.email_label">Email</label>
         <input id="example5-email" data-tid="elements_examples.form.email_placeholder" className="input" type="text" placeholder="janedoe@gmail.com" required="" autocomplete="email"/>
       </div>
       <div className="field">
         <label for="example5-phone" data-tid="elements_examples.form.phone_label">Phone</label>
         <input id="example5-phone" data-tid="elements_examples.form.phone_placeholder" className="input" type="text" placeholder="(941) 555-0123" required="" autocomplete="tel"/>
       </div>
     </div>
     <div data-locale-reversible>
       <div className="row">
         <div className="field">
           <label for="example5-address" data-tid="elements_examples.form.address_label">Address</label>
           <input id="example5-address" data-tid="elements_examples.form.address_placeholder" className="input" type="text" placeholder="185 Berry St" required="" autocomplete="address-line1"/>
         </div>
       </div>
       <div className="row" data-locale-reversible>
         <div className="field">
           <label for="example5-city" data-tid="elements_examples.form.city_label">City</label>
           <input id="example5-city" data-tid="elements_examples.form.city_placeholder" className="input" type="text" placeholder="San Francisco" required="" autocomplete="address-level2"/>
         </div>
         <div className="field">
           <label for="example5-state" data-tid="elements_examples.form.state_label">State</label>
           <input id="example5-state" data-tid="elements_examples.form.state_placeholder" className="input empty" type="text" placeholder="CA" required="" autocomplete="address-level1"/>
         </div>
         <div className="field">
           <label for="example5-zip" data-tid="elements_examples.form.postal_code_label">ZIP</label>
           <input id="example5-zip" data-tid="elements_examples.form.postal_code_placeholder" className="input empty" type="text" placeholder="94107" required="" autocomplete="postal-code"/>
         </div>
       </div>
     </div>
     <div className="row">
       <div className="field">
         <label for="example5-card" data-tid="elements_examples.form.card_label">Card</label>
         <div id="example5-card" className="input"></div>
       </div>
     </div>
     <button type="submit" data-tid="elements_examples.form.pay_button">Pay $25</button>
   </fieldset>
   <div className="error" role="alert">
     <span className="message"></span></div>
 </form>
 <div className="success">
   <div className="icon">
     {/* <svg width="84px" height="84px" viewBox="0 0 84 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <circle className="border" cx="42" cy="42" r="40" stroke-linecap="round" stroke-width="4" stroke="#000" fill="none"></circle>
       <path className="checkmark" stroke-linecap="round" stroke-linejoin="round" d="M23.375 42.5488281 36.8840688 56.0578969 64.891932 28.0500338" stroke-width="4" stroke="#000" fill="none"></path>
     </svg> */}
   </div>
   <h3 className="title" data-tid="elements_examples.success.title">Payment successful</h3>
   <p className="message"><span data-tid="elements_examples.success.message">Thanks for trying Stripe Elements. No money was charged, but we generated a token: </span><span className="token">tok_189gMN2eZvKYlo2CwTBv9KKh</span></p>
   <a className="reset" href="#">
     {/* <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <path fill="#000000" d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"></path>
     </svg> */}
   </a>
 </div>

 <div className="caption">
   <span data-tid="elements_examples.caption.no_charge" className="no-charge">Your card won't be charged</span>
   <a className="source" href="https://github.com/stripe/elements-examples/#example-5">
     <span data-tid="elements_examples.caption.view_source">View source on GitHub</span>
   </a>
 </div>
</div>