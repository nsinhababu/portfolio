import laptop from '../../static/img/laptop.svg';
import Card from '../Card/Card';
import me from '../../static/img/me.jpg';
const Intro = () => {
  return (
    <div className='i-cntnr'>
      <div className='i-cntnr-child'>
        <img className='i-banner' src={laptop} alt='' />
      </div>
      <div className='i-cntnr-child'>
        <Card src={me} />
      </div>
    </div>
  );
};

export default Intro;
