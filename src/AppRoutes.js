import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
import Aboutus from './Components/AboutUs/Aboutus';
import ContactUs from './Components/ContactUs/ContactUs';
import Address from './Components/Address/Address';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Intro />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/adrs' element={<Address />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
