function Health(props) {
  return (
    <div className='health-area-card'>
      <img
        src={props.imageSource}
        className='App-logo'
        alt={props.healthArea + ' photo'}
      />
      {/* <a href=''></a> */}
      <p>{props.healthArea}</p>
    </div>
  );
}

export default Health;
