import { useEffect, useState } from "react";
import Button from "./Button";

const AppNewUser = () => {
  const [username, setUsername] = useState<string>("");

  const saveUsername = () => {
    if (username && username != "") {
      localStorage.setItem("username", username);
    } else {
      alert("wpisz swoje imię");
    }
  };

  return (
    <div className="app_new_user">
      <div className="app_new_user__wrapper">
        <div className="app_new_user__text">
          <h3>Witaj,</h3>
          <p>wygląda ma to że jesteś tutaj pierwszy raz!</p>
          <form onSubmit={saveUsername}>
            <input
              type="text"
              placeholder="tutaj wpisz jak masz na imię"
              onChange={(e) => setUsername(e.target.value)}
              pattern="[a-zA-Z]+"
            />
            <Button buttonText="Gotowe!" />
          </form>
          <p>
            Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację
            :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppNewUser;
