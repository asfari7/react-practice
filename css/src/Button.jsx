// import styles from "./Button.module.css";

function Button() {
  const style = {
    backgroundColor: "hsl(197, 100%, 56%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: " 8px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={style}>Click me</button>;
}

export default Button;
