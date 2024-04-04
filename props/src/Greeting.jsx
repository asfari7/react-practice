import PropTypes from "prop-types";

function Greeting(props) {
  const WelcomeMsg = <h2>Welcome {props.name}</h2>;

  const loginPromt = <h2>Please Login to continue</h2>;
  return props.isloggedIn ? WelcomeMsg : loginPromt;
}

Greeting.propTypes = {
  name: PropTypes.string,
  isloggedIn: PropTypes.bool,
};

Greeting.defaultProps = {
  name: "Guest123",
};

export default Greeting;
