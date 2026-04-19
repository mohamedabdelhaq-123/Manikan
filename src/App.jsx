import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/StorePage';
import ProductPage from './pages/ProductPage';
import SizeRecommendation from './pages/SizeRecommendation';
import EventStyling from './pages/EventStyling';
import Visualization from './pages/Visualization';
import WardrobeDashboard from './pages/WardrobeDashboard';
import BusinessPage from './pages/BusinessPage';
import PricingPage from './pages/PricingPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-warm-bg">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/"                   element={<LandingPage />} />
          <Route path="/store"              element={<StorePage />} />
          <Route path="/store/:id"          element={<ProductPage />} />
          <Route path="/size"               element={<SizeRecommendation />} />
          <Route path="/events"             element={<EventStyling />} />
          <Route path="/visualize"          element={<Visualization />} />
          <Route path="/wardrobe"           element={<WardrobeDashboard />} />
          <Route path="/business"           element={<BusinessPage />} />
          <Route path="/pricing"            element={<PricingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
