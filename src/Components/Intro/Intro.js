import laptop from '../../static/img/laptop.svg';
import Card from '../Card/Card';
import me from '../../static/img/me.jpg';
import Address from '../Address/Address';
import ContactUs from '../ContactUs/ContactUs';
const Intro = () => {
  return (
    <>
      <div className='i-cntnr'>
        <div className='i-cntnr-child'>
          <div className='animation-container'>
            <img className='i-banner' src={laptop} alt='' />
            <p className='anmtd-txt'>{`<h1>Hello World...</h1>`}</p>
          </div>
        </div>
        <div className='i-cntnr-child'>
          <Card src={me}></Card>
        </div>
      </div>
      <div className='contact-section'>
        <ContactUs />
        <Address />
      </div>
    </>
  );
};

export default Intro;
