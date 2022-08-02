const Card = ({ src, children }) => {
  return (
    <div className='card-cntnr'>
      <div className='crd-info'>
        {src ? <img src={src} alt='' /> : null}
        <div className='crd-dtls'>
          <p className='name'>Nilanjan Sinha Babu</p>
          <p className='desig'>Frontend Developer</p>
        </div>
      </div>
      <div className='skills'>
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JS</span>
        <span>React</span>
        <span>Redux</span>
        <span>REST API</span>
        <span>JWT</span>
        <span>Axios</span>
        <span>UI / UX</span>
      </div>
    </div>
  );
};

export default Card;
