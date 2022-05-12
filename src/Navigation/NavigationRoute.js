
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activities from '../table/Activities';
import { Sidebar } from './Sidebar';
import Dashboard from '../Dashboard/Dashboard'  ;
import Transition from '../table/Transition';
import Ticket from '../table/Ticket';
import { CustomerMain, CustomerTicket } from '../table/Customer';
import RequestForService from '../table/RequestForService';
import CustomerDetails from "../table/CustomerDetails";
import TicketEdit from '../table/TicketEdit'


export default function NavigationRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
           <Route path="transition" element={<Transition />}  />
          <Route path="customer-main" element={<CustomerMain />} />
          <Route path='Customer-ticket' element={<CustomerTicket />}/>
          <Route path="customer-details" element={<CustomerDetails />} />
          <Route path="ticket" element={<Ticket />} />
          <Route path="activities" element={<Activities />} />
          <Route path="req-for-service" element={<RequestForService />} />
          <Route path="ticket-edit" element={<TicketEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

