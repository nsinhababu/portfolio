import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='main-cntnr'>
      <NavBar />
      <div className='primary-cntnr'>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
