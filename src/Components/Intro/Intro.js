import laptop from '../../static/img/laptop.svg';
import Card from '../Card/Card';
import me from '../../static/img/me.jpg';
import Tiles from '../Tiles/Tiles';
const Intro = () => {
  return (
    <div className='i-cntnr'>
      <div className='i-cntnr-child'>
        <div className='animation-container'>
          <img className='i-banner' src={laptop} alt='' />
          <p className='anmtd-txt'>{`<h1>Hello World...</h1>`}</p>
        </div>
      </div>
      <div className='i-cntnr-child'>
        <Card src={me}>
          <p>Intenships</p>
          <Tiles
            company='BEYUL private limited'
            duration='20/09/2021 - 20/04/2022'
            tech='HTML5, CSS3, JS, UI'
          />
          <Tiles
            company='Phaico'
            duration='04/05/2022 - present'
            tech='React, Redux, REST API, JWT, Axios, UI/UX'
          />
        </Card>
      </div>
    </div>
  );
};

export default Intro;
