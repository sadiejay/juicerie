function Health(props) {
  return (
    <div className='App'>
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
