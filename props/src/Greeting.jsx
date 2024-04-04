import PropTypes from "prop-types";

function Greeting(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string,
};

Greeting.defaultProps = {
  name: "World",
};

export default Greeting;
