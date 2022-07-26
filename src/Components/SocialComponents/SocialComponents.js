import { Link } from 'react-router-dom';
const SocialComponents = ({ path, src }) => {
  return (
    <div className='sc-cntnr'>
      <a className='link' target='_blank' href={path}>
        <img className='link-img' src={src} alt={path} />
      </a>
    </div>
  );
};

export default SocialComponents;
