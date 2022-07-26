const Tiles = ({ company, duration, tech }) => {
  return (
    <div className='t-cntnr'>
      <p className='cmpny-name'>{company}</p>
      <p className='duration'>{duration}</p>
      <p className='tech'>{`Technology used: ${tech}`}</p>
    </div>
  );
};

export default Tiles;
