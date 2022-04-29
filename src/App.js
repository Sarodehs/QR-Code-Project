
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Footer from './Components/Pages/Footer';
import Topnav from './Components/Pages/Topnav';
import Sidenav from './Components/Sidenav';


import Dashboard from './Components/Pages/Dashboard';

import Faq from './Components/Pages/Faq';
import Contact from './Components/Pages/Contact';

import EditRestaurantProfile from './Components/Setting/EditRestaurantProfile';
import ManageCategory from './Components/Setting/ManageCategory';
import ChangeTheme from './Components/Setting/ChangeTheme';
import ChangeFont from './Components/Setting/ChangeFont';
import ChangePassword from './Components/Setting/ChangePassword';
import GenerateQRCode from './Components/Setting/GenerateQRCode';
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
        <Topnav />
        <Sidenav>
          <Routes>
            <Route path='/' element={<Dashboard />} />

            <Route path='Menu/Starters/' element={<Starters />} />
            <Route path='Menu/Starters/AddDish/' element={<AddDish />} />
            <Route path='Menu/Starters/EditDish/' element={<EditDish />} />

            <Route path='Menu/Curries/' element={<Curries />} />
            <Route path='Menu/Fries/' element={<Fries />} />
            <Route path='Menu/Soups/' element={<Soups />} />
            <Route path='Menu/RiceBiriyani/' element={<RiceBiriyani />} />
            <Route path='Menu/Dessert/' element={<Dessert />} />
            <Route path='Menu/Drinks/' element={<Drinks />} />
            <Route path='Menu/Shakes/' element={<Shakes />} />
            <Route path='Menu/Special/' element={<Special />} />


              <Route path='Setting/EditRestaurantProfile/' element={<EditRestaurantProfile />} />
              <Route path='Setting/ManageCategory/' element={<ManageCategory />} />
              <Route path='Setting/ChangeTheme/' element={<ChangeTheme />} />
              <Route path='Setting/ChangeFont/' element={<ChangeFont />} />
              <Route path='Setting/ChangePassword/' element={<ChangePassword />} />
              <Route path='Setting/GenerateQRCode/' element={<GenerateQRCode />} />
              <Route path='Setting/AddBranch/' element={<AddBranch />} />
            {/* </Route> */}
            <Route path='Faq/' element={<Faq />} />
            <Route path='Contact/' element={<Contact />} />
          </Routes>
        </Sidenav>


        <Footer />
      </Router>


    </>
  );
}

export default App;
