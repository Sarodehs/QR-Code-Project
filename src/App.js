
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/home';
import Pricing from './components/pricing';
import ContactUs from './components/contact';
import LogIn from './components/login';
import Register from './components/register';
import Footer from './components/Footer';
import Registernow from './components/registernow';
import Monthly from './components/monthly';
import Checkout from './components/checkout';
import Payment from './components/payment';
import Paysuccess from './components/paysuccess';


function App() {
  return (
    <>

      <Router>

        <Menu />

        <Routes>
          <Route path='/' element={ <Home />  } />
          <Route path='/pricing/' element={  <Pricing /> } />
          <Route path='/contact/' element={  <ContactUs /> } />
          <Route path='/login/' element={  <LogIn /> } />
          <Route path='/register/' element={ <Register />  }></Route>
          {/* <Route element={  < PageNotFound/> }></Route> */}
                  
        </Routes>
             
        <Routes>
          <Route path='register/registernow/' element={ <Registernow />  } />
        </Routes>

        <Routes>
          <Route path='pricing/monthly/' element={ <Monthly/> } />
        </Routes>

        <Routes>
          <Route path='/pricing/checkout/' element={ <Checkout/> }/>
        </Routes>

        <Routes>
          <Route path='/pricing/checkout/payment/' element={ <Payment/> }/>
        </Routes>

        <Routes>
          <Route path='/pricing/checkout/payment/paysuccess/' element={ <Paysuccess/> }/>
        </Routes>


        <Footer />

      </Router>

    </>
  );
}

export default App;



