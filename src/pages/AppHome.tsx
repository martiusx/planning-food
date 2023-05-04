import Nav from "../layout/Nav";
import AppSideBar from "../components/AppSideBar";
import AppNewUser from "../components/AppNewUser";

const AppHome = () => {
  return (
    <>
      <Nav />
      <div className="app_home">
        <AppSideBar />
        <AppNewUser />
      </div>
    </>
  );
};

export default AppHome;
