import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import DynamicSidebar from './components/sidebarLayout/sidebarLayout';
import LoginPage from './features/login/login';
import SignupPage from './features/registration/registration';
import ProviderHomePage from './features/landingPage/provider/index';
import ConsumerHomePage from './features/landingPage/consumer/index';
import CreateListing from './features/createListing/createListing';
import ViewListings from './features/viewListings/viewListingsDisplay';
// Import other pages and components
function App() {
  return (
    <>
      <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<DynamicSidebar />}>
            {/* Nested routes for authenticated parts of the app */}
            <Route path="/provider-home" element={<ProviderHomePage />} />
            <Route path="/consumer-home" element={<ConsumerHomePage />} />
            <Route path="/create-listing" element={<CreateListing/>}/>
            <Route path="/view-listings" element ={<ViewListings/>}/>
            {/* Define additional routes here */}
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
    </>
  );
}

export default App;
