import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import LoadingSpinner from '@/components/Common/LoadingSpinner';

// Lazy-load pages for code splitting
const Home           = lazy(() => import('@/pages/Home'));
const TeamDashboard  = lazy(() => import('@/pages/TeamDashboard'));
const MemberPortfolio = lazy(() => import('@/pages/MemberPortfolio'));
const NotFound       = lazy(() => import('@/pages/NotFound'));

// Layout wrapper for the home page (has its own header inside team/member pages)
const HomeLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <LoadingSpinner size={40} />
      </div>
    }>
      <Routes>
        <Route path="/" element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        } />
        <Route path="/team"             element={<TeamDashboard />} />
        <Route path="/member/:memberId" element={<MemberPortfolio />} />
        <Route path="/404"              element={<NotFound />} />
        <Route path="*"                 element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
