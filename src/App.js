
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"

import Signup from './Components/SignupPages/Signup';
import Relogin from './Components/SignupPages/Relogin'
import Details from './Components/SignupPages/Details';
import Branch from './Components/SignupPages/Branch';
import Addbranch from './Components/SignupPages/Addbranch';
import AddLogo from './Components/SignupPages/AddLogo';
import Generateqrcode from './Components/SignupPages/Generateqrcode';
import Downlodeqrcode from './Components/SignupPages/Downlodeqrcode';

import SelectTheme from './Components/Select/SelectTheme';
import SelectFont from './Components/Select/SelectFont';
import SelectWallpaper from './Components/Select/SelectWallpaper';
import SelectMenu from './Components/Select/SelectMenu';


import Dashboard from './Components/Pages/Dashboard';
import Faq from './Components/Pages/Faq';
import Contact from './Components/Pages/Contact';

import EditRestaurantProfile from './Components/Setting/EditRestaurantProfile';
import ManageCategory from './Components/Setting/ManageCategory';
import AddCategory from './Components/Setting/AddCategory';
import ChangeTheme from './Components/Setting/ChangeTheme';
import ChangeFont from './Components/Setting/ChangeFont';
import ChangePassword from './Components/Setting/ChangePassword';
import GenerateQRCode from './Components/Setting/GenerateQRCode';
import DownlodeQRCode from './Components/Setting/DownlodeQRCode';
import AddBranch from './Components/Setting/AddBranch';

import AddDish from './Components/Menu/AddDish';
import EditDish from './Components/Menu/EditDish';
import Starters from './Components/Menu/Starters';
import Curries from './Components/Menu/Curries';
import Fries from './Components/Menu/Fries';
import Soups from './Components/Menu/Soups';
import RiceBiriyani from './Components/Menu/RiceBiriyani';
import Dessert from './Components/Menu/Dessert';
import Drinks from './Components/Menu/Drinks';
import Shakes from './Components/Menu/Shakes';
import Special from './Components/Menu/Special';



function App() {
  return (
    <>
      <Router>
        <Routes>
            
           <Route path='/' element={<Signup />} />
           <Route path='/Details/' element={<Details />} />
           <Route path='/Branch/' element={<Branch />} />
           <Route path='/AddLogo/' element={<AddLogo/>} />
           <Route path='/Generateqrcode/' element={<Generateqrcode/>} />
           <Route path='/Downlodeqrcode/' element={<Downlodeqrcode/>} />

           <Route path='/Addbranch/' element={<Addbranch/>} />
           <Route path='/AddLogo/' element={<AddLogo/>} />
           <Route path='/Generateqrcode/' element={<Generateqrcode/>} />
           <Route path='/Downlodeqrcode/' element={<Downlodeqrcode/>} />
           
           <Route path='/SelectTheme/' element={<SelectTheme />} />
           <Route path='/SelectFont/' element={<SelectFont />} />
           <Route path='/SelectWallpaper/' element={<SelectWallpaper />} />
           <Route path='/SelectMenu/' element={<SelectMenu />} />
      


          <Route path='/Dashboard/' element={<Dashboard />} />
          <Route path='/Relogin/' element={<Relogin />} />
          
          <Route path='/Menu/Starters/' element={<Starters />} />
          <Route path='/AddDish/' element={<AddDish />} />
          <Route path='/EditDish/' element={<EditDish />} />


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

        </Routes>
     
      </Router>


    </>
  );
}

export default App;
