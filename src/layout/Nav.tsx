import Logo from "../components/Logo";

const Nav = () => {
  return (
    <nav className="nav">
      <Logo />
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
    </nav>
  );
};

export default Nav;
