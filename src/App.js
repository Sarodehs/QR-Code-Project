
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
// Web_Site Start
import Home from './Components/Web_Site/home';
import Pricing from './Components/Web_Site/pricing';
import ContactUs from './Components/Web_Site/contactus';
import LogIn from './Components/Web_Site/login';
import Register from './Components/Web_Site/register';
import Registernow from './Components/Web_Site/registernow';
import Checkout from './Components/Web_Site/checkout';
import Payment from './Components/Web_Site/payment';
import Paysuccess from './Components/Web_Site/paysuccess';



// Web_Site End

// Admin start
import AdminSignin from  './Components/Admin/Pages/AdminSignIn';
import AdminDashboard from './Components/Admin/Pages/AdminDashboard';
import AdminTransactionsData from './Components/Admin/Pages/A_Transactions';
import AdminCustomerData from './Components/Admin/Pages/A_Customer'
import AdminTicketData from './Components/Admin/Pages/A_Ticket';
import RequestForService from './Components/Admin/Pages/RequestForService';
import  ActivitieDetails from './Components/Admin/Pages/ActivitiesDetails';
import CustomerDetails from './Components/Admin/Pages/CustomerDetails';
import AdminTicketEdit from './Components/Admin/Pages/TicketEdit'

// Admin end

// Hotel_Owner start 

import Signup from './Components/Hotel_Owner/SignupPages/Signup';
import Relogin from './Components/Hotel_Owner/SignupPages/Relogin'
import Details from './Components/Hotel_Owner/SignupPages/Details';
import Branch from './Components/Hotel_Owner/SignupPages/Branch';
import Addbranch from './Components/Hotel_Owner/SignupPages/Addbranch';
import AddLogo from './Components/Hotel_Owner/SignupPages/AddLogo';
import Generateqrcode from './Components/Hotel_Owner/SignupPages/Generateqrcode';
import Downlodeqrcode from './Components/Hotel_Owner/SignupPages/Downlodeqrcode';

import SelectTheme from './Components/Hotel_Owner/Select/SelectTheme';
import SelectFont from './Components/Hotel_Owner/Select/SelectFont';
import SelectWallpaper from './Components/Hotel_Owner/Select/SelectWallpaper';
import SelectMenu from './Components/Hotel_Owner/Select/SelectMenu';


import Dashboard from './Components/Hotel_Owner/Pages/Dashboard';
import Faq from './Components/Hotel_Owner/Pages/Faq';
import Contact from './Components/Hotel_Owner/Pages/Contact';

import EditRestaurantProfile from './Components/Hotel_Owner/Setting/EditRestaurantProfile';
import ManageCategory from './Components/Hotel_Owner/Setting/ManageCategory';
import AddCategory from './Components/Hotel_Owner/Setting/AddCategory';
import ChangeTheme from './Components/Hotel_Owner/Setting/ChangeTheme';
import ChangeFont from './Components/Hotel_Owner/Setting/ChangeFont';
import ChangePassword from './Components/Hotel_Owner/Setting/ChangePassword';
import GenerateQRCode from './Components/Hotel_Owner/Setting/GenerateQRCode';
import DownlodeQRCode from './Components/Hotel_Owner/Setting/DownlodeQRCode';
import AddBranch from './Components/Hotel_Owner/Setting/AddBranch';

import AddDish from './Components/Hotel_Owner/Menu/AddDish';
import EditDish from './Components/Hotel_Owner/Menu/EditDish';
import Starters from './Components/Hotel_Owner/Menu/Starters';
import Curries from './Components/Hotel_Owner/Menu/Curries';
import Fries from './Components/Hotel_Owner/Menu/Fries';
import Soups from './Components/Hotel_Owner/Menu/Soups';
import RiceBiriyani from './Components/Hotel_Owner/Menu/RiceBiriyani';
import Dessert from './Components/Hotel_Owner/Menu/Dessert';
import Drinks from './Components/Hotel_Owner/Menu/Drinks';
import Shakes from './Components/Hotel_Owner/Menu/Shakes';
import Special from './Components/Hotel_Owner/Menu/Special';


//  Hotel_Owner End





function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Web_Site start */}
          <Route path='/' element={ <Home />  } />
          <Route path='/pricing/' element={  <Pricing /> } />
          <Route path='/contactus/' element={  <ContactUs /> } />
          <Route path='/login/' element={  <LogIn /> } />
          <Route path='/register/' element={ <Register />  }></Route>       
          <Route path='/registernow/' element={ <Registernow />  } />
          <Route path='/checkout/' element={ <Checkout/> }/>
          <Route path='/payment/' element={ <Payment/> }/>
          <Route path='/paysuccess/' element={ <Paysuccess/> }/>
          {/* Web_Site start */}

          {/* Admin start */}

          <Route path='/super-admin-login/' element={<AdminSignin/>} />
          <Route path='/admin-dashboard/' element={<AdminDashboard />} />
          <Route path='/admin-transaction/' element={<AdminTransactionsData />} />
          <Route path='/admin-customer-tbl/' element={<AdminCustomerData />} />
          <Route path='/admin-ticket-tbl/' element={<AdminTicketData />} />
          <Route path='/req-for-service/' element={<RequestForService />} />
          <Route path='/activitie-details/' element={<ActivitieDetails />} />
          <Route path='/customer-details/' element={<CustomerDetails />} />
          <Route path='/ticket-edit/' element={<AdminTicketEdit/>}/>

          {/* Admin end */}

          {/* Hotel_Owner start */}
          <Route path='/Signup/' element={<Signup />} />
          <Route path='/Relogin/' element={<Relogin />} />

          <Route path='/Details/' element={<Details />} />
          <Route path='/Branch/' element={<Branch />} />
          <Route path='/AddLogo/' element={<AddLogo />} />
          <Route path='/Generateqrcode/' element={<Generateqrcode />} />
          <Route path='/Downlodeqrcode/' element={<Downlodeqrcode />} />

          <Route path='/Addbranch/' element={<Addbranch />} />
          <Route path='/AddLogo/' element={<AddLogo />} />

          <Route path='/SelectTheme/' element={<SelectTheme />} />
          <Route path='/SelectFont/' element={<SelectFont />} />
          <Route path='/SelectWallpaper/' element={<SelectWallpaper />} />
          <Route path='/SelectMenu/' element={<SelectMenu />} />


          <Route path='/Dashboard/' element={<Dashboard />} />

          <Route path='/AddDish/' element={<AddDish />} />
          <Route path='/EditDish/' element={<EditDish />} />

          <Route path='/Menu/Starters/' element={<Starters />} />
          <Route path='/Menu/Curries/' element={<Curries />} />
          <Route path='/Menu/Fries/' element={<Fries />} />
          <Route path='/Menu/Soups/' element={<Soups />} />
          <Route path='/Menu/RiceBiriyani/' element={<RiceBiriyani />} />
          <Route path='/Menu/Dessert/' element={<Dessert />} />
          <Route path='/Menu/Drinks/' element={<Drinks />} />
          <Route path='/Menu/Shakes/' element={<Shakes />} />
          <Route path='/Menu/Special/' element={<Special />} />


          <Route path='/Setting/EditRestaurantProfile/' element={<EditRestaurantProfile />} />

          <Route path='/Setting/ManageCategory/' element={<ManageCategory />} />
          <Route path='/AddCategory/' element={<AddCategory />} />

          <Route path='/Setting/ChangeTheme/' element={<ChangeTheme />} />
          <Route path='/Setting/ChangeFont/' element={<ChangeFont />} />
          <Route path='/Setting/ChangePassword/' element={<ChangePassword />} />
          <Route path='/Setting/GenerateQRCode/' element={<GenerateQRCode />} />
          <Route path='/Setting/GenerateQRCode/DownlodeQRCode/' element={<DownlodeQRCode />} />
          <Route path='/Setting/AddBranch/' element={<AddBranch />} />


          <Route path='/Faq/' element={<Faq />} />
          <Route path='/Contact/' element={<Contact />} />


           {/* Hotel_Owner End */}
        </Routes>

      </Router>


    </>
  );
}

export default App;
