import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Intro />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
