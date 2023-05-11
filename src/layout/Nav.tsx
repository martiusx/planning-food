import Logo from "../components/Logo";
import userIcon from "../assets/user.png";

interface NavProps {
  navType: string;
  username: string;
}

const Nav: React.FC<NavProps> = ({ navType, username }) => {
  return (
    <nav className="nav">
      <Logo />
      {navType === "homePage" && (
        <ul className="nav__wrapper">
          <li className="nav__wrapper_element">
            <a href="/">Zaplanuj posiłki</a>
          </li>
          <li className="nav__wrapper_element">
            <a href="/">Dlaczego Warto?</a>
          </li>
          <li className="nav__wrapper_element">
            <a href="/">O mnie</a>
          </li>
          <li className="nav__wrapper_element">
            <a href="/">Kontakt</a>
          </li>
        </ul>
      )}
      {navType === "appHome" && (
        <ul className="nav__wrapper">
          <li className="nav__wrapper_element nav_app__wrapper_element">
            <a href="#">
              <p>{username}</p>
            </a>
          </li>
          <li className="nav__wrapper_element">
            <a href="#">
              <img src={userIcon} alt="" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
