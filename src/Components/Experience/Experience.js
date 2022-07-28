import Tiles from '../Tiles/Tiles';
const Experience = () => {
  return (
    <div className='experience'>
      <p className='tag'>Internships</p>
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
    </div>
  );
};

export default Experience;
