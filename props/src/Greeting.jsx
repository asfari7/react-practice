function Greeting(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}

Greeting.defaultProps = {
  name: "World",
};

export default Greeting;
