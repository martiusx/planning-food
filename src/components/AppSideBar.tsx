import imageArrow from "../assets/arrowRight.png";

const AppSideBar = () => {
  return (
    <div className="app_home__sidebar">
      <ul>
        <li>
          Pulpit
          <img src={imageArrow} alt="" />
        </li>
        <li>
          Przepis
          <img src={imageArrow} alt="" />
        </li>
        <li>
          Plany
          <img src={imageArrow} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default AppSideBar;
