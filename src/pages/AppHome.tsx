import Nav from "../layout/Nav";
import AppReturningUser from "../components/AppReturningUser";
import AppSideBar from "../components/AppSideBar";
import AppNewUser from "../components/AppNewUser";
import { useEffect, useState } from "react";

const AppHome = () => {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  return (
    <>
      <Nav navType="appHome" username={username} />
      <div className="app_home">
        <AppSideBar />
        {username ? <AppReturningUser /> : <AppNewUser />}
      </div>
    </>
  );
};

export default AppHome;
