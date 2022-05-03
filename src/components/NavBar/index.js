import './styles.css';

const NavBar = () => {
  return (
    <nav>
      <a className='home' href='#'>
        Home
      </a>
      <a className='projects' href='#'>
        Projects
      </a>
      <a className='blogs' href='#'>
        Blogs
      </a>
      <a className='about-us' href='#'>
        About us
      </a>
    </nav>
  );
};

export default NavBar;
