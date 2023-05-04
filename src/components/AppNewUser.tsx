import Button from "./Button";

const AppNewUser = () => {
  return (
    <div className="app_new_user">
      <div className="app_new_user__wrapper">
        <div className="app_new_user__text">
          <h3>Witaj,</h3>
          <p>wygląda ma to że jesteś tutaj pierwszy raz!</p>
          <form>
            <input type="text" placeholder="tutaj wpisz jak masz na imię" />
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
