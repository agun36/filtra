import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '@/components/hero';
import { Track } from '@/components/track';
import { Management } from '@/components/management';
import { MobileWorkFlexibility } from '@/components/mobileWorkFlexibility';
import { BoostWorkforceProductivity } from '@/components/boostWorkforceProductivity';
import { Security } from '@/components/security';
import { Portal } from '@/components/portal';
import { Footers } from '@/components/footers';
import { Blockquote } from '@/components/blockquote';
// import { Contacts } from '@/components/contacts';
import { Customer } from '@/components/customers';
import { Suspense } from 'react';
import { Login } from './components/hero/login';
import { SignUp } from './components/hero/signUp';



const App = () => {
  return (
    <BrowserRouter>

      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center vh-100">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={
            <>
              <Header />
              <Track />
              <Management />
              <MobileWorkFlexibility />
              <BoostWorkforceProductivity />
              <Security />
              <Portal />
              <Customer />
              {/* <Contacts /> */}
              <Blockquote />
              <Footers />
            </>
          } />
          {/* <Route path="/customer/:customerName" element={<Customer />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}

export default App;