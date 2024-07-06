import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './component/main';
import Show_item from './component/fetch_api/show_item';
import All_Product from './component/fetch_api/all_product';
import { Data } from './component/fetch_api/data';
import './css/style.css'
import Stripe from './component/payment_stripe/Stripe';
import store from './store/store';
import SignUp from './component/dashboard/signup';
import SignIn from './component/dashboard/signin';
import TotalProduct from './component/dashboard/total_product';
import TotalSale from './component/dashboard/total_sale';
import Dashboard from './component/dashboard/main_dashboard';
import BookOrder from './component/dashboard/bookOrder';

function App() {
  console.log('BASE URL:', process.env.REACT_APP_BASE_URL);

  return (
    <>
    
<Data >
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all_product" element={<All_Product />} />
        <Route path='/stripe' element={<Stripe/>} />
        <Route path="/show_item/:id" element={<Show_item />} />
        <Route path="/signup" element={<SignUp/>} />

        <Route path="/signin" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

        <Route path="/total_product" element={<TotalProduct/>} />
        <Route path="/total_sale" element={<TotalSale/>} />
        <Route path="/book_order" element={<BookOrder/>} />





      </Routes>
    </Router>
    </Provider>
    </Data>
    </>
  
  );
}

export default App;
