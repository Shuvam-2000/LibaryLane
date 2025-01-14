import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OurBooks from './pages/OurBooks';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FreeBook from './pages/FreeBook';
import PaidBook from './pages/PaidBook';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[4vw]'>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourbooks" element={<OurBooks />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/freebook/:id" element={<FreeBook />} />
          <Route path="/paidbook/:id" element={<PaidBook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
