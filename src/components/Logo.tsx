import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        Zaplanuj<span>Jedzonko</span>
      </div>{" "}
    </Link>
  );
};

export default Logo;
