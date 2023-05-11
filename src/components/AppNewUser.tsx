import { useEffect, useState } from "react";
import Button from "./Button";

const AppNewUser = () => {
  const [username, setUsername] = useState<string>("");

  const saveUsername = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && username !== "") {
      localStorage.setItem("username", username);
      window.location.reload(); // dodajemy tutaj instrukcję, która spowoduje przeładowanie strony
    } else {
      alert("Wpisz swoje imię");
    }
  };

  return (
    <div className="app_new_user">
      <div className="app_new_user__wrapper">
        <div className="app_new_user__text">
          <h3>Witaj,</h3>
          <p>Wygląda na to, że jesteś tutaj pierwszy raz!</p>
          <form onSubmit={saveUsername}>
            <input
              type="text"
              placeholder="Tutaj wpisz jak masz na imię"
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
