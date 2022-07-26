import SocialComponents from '../SocialComponents/SocialComponents';
import linkedin from '../../static/img/linkedin.svg';
import github from '../../static/img/github.svg';
import codepen from '../../static/img/codepen.svg';

const ContactUs = () => {
  return (
    <div className='c-cntnr'>
      <div className='phone'>
        <img src='' alt='' />
        <p></p>
      </div>
      <p className='mail'>
        Mail: nilanjan8159@gmail.com / nsinhababu@gmail.com
      </p>

      <div className='social'>
        <SocialComponents
          path='https://www.linkedin.com/in/nilanjan-sinha-babu-287447233/'
          src={linkedin}
        />
        <SocialComponents path='https://github.com/nsinhababu' src={github} />
        <SocialComponents
          path=' https://codepen.io/your-work
'
          src={codepen}
        />
      </div>
    </div>
  );
};

export default ContactUs;
