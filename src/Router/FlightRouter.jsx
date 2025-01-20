import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Components
import PaymentMethod from '../components/payments/PaymentMethod';
import CreditCard from '../components/payments/CreditCard';
import NetBanking from '../components/payments/NetBanking';
import Wallets from '../components/payments/Wallets';
import Upi from '../components/payments/Upi';
import Payment from '../components/payments/Payment';
import AddPassengers from '../components/Passengersdetails/AddPassengers';
import TicketReview from '../components/Ticketreview/TicketReview';
import FlightNavbar from '../components/Navbar';
import Home from '../components/Home';
import Flights from '../components/flights';
import Contacts from '../components/Contacts';
import LoginForm from '../components/LoginForm/Login';
import F1Section from '../components/flights/f1/F1Section';
import FlightSearch from '../components/flights/f1/FlightSearch';
import F2Section from '../components/flights/f2/F2Section';
import AdvFlightSearch from '../components/flights/f2/AdvFlightSearch';
import F3Section from '../components/flights/f3/F3Section';
import F4Section from '../components/flights/f4/F4Section';
import F5Section from '../components/flights/f5/F5Section';
import FlightNavBar from './FlightNavBar';
import FlightSection from '../components/flights/FlightSection';

const FlightRouter = () => {
  const [passengers, setPassengers] = useState([]);

  return (
    <Routes>
      {/* Main Layout */}
      <Route path="/flight_web" element={<FlightNavbar />}>
        <Route index element={<Home />} />
        <Route path="flights" element={<Flights />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<LoginForm />} />

        {/* Flight Navigation */}
        <Route path="flightnav" element={<FlightNavBar />} />
        <Route path="flight" element={<FlightSection />}>
          {/* Nested Flight Routes */}
          <Route path="f1" element={<F1Section />}>
            <Route index element={<FlightSearch />} />
          </Route>
          <Route path="f2" element={<F2Section />}>
            <Route index element={<AdvFlightSearch />} />
          </Route>
          <Route path="f3" element={<F3Section />} />
          <Route path="f4" element={<F4Section />} />
          <Route path="f5" element={<F5Section />} />
        </Route>

        {/* Passenger and Ticket Review */}
        <Route
          path="/addpassenger"
          element={<AddPassengers setPassengers={setPassengers} />}
        />
        <Route
          path="/ticket-review"
          element={<TicketReview passengers={passengers} />}
        />

        {/* Payment Routes */}
        <Route path="/payment" element={<Payment />}>
          <Route index element={<PaymentMethod />} />
          <Route path="credit_card" element={<CreditCard />} />
          <Route path="netbanking" element={<NetBanking />} />
          <Route path="wallets" element={<Wallets />} />
          <Route path="upi" element={<Upi />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default FlightRouter;
