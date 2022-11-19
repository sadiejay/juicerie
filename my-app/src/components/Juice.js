function Juice(props) {
  // should display a clickable card with an image, and the title of the juice

  console.log(props);
  return (
    <div>
      <img
      alt="juice"
      />
      <p>{props.details.juiceName}</p>
    </div>
  );
}

export default Juice;
