import Button from "../components/Button";
import plusIcon from "../assets/plus.png";
import trashIcon from "../assets/trash.png";
import editIcon from "../assets/edit.png";

const AppAddingNewRecipe = () => {
  const instructionsList = ["12s", "121ss", "2222"];
  const ingredientsList = ["12s", "121ss", "2222"];
  return (
    <div className="app_adding_new_recipe">
      <div className="app_adding_new_recipe__top_wrapper">
        <div className="app_adding_new_recipe__top_wrapper--header">
          <h4>NOWY PRZEPIS</h4>
          <Button buttonText={"Zapisz i zamknij"} />
        </div>
        <div className="app_adding_new_recipe__top_wrapper--inputs">
          <label>Nazwa przepisu</label>
          <input type="text"></input>
        </div>
        <div className="app_adding_new_recipe__top_wrapper--inputs">
          <label>Opis przepisu</label>
          <textarea></textarea>
        </div>
      </div>
      <div className="app_adding_new_recipe__bottom_wrapper">
        <div className="app_adding_new_recipe__bottom_wrapper__element">
          <h5>INSTRUKCJE</h5>
          <div className="app_adding_new_recipe__bottom_wrapper__element__input">
            <form onSubmit={(e) => e.preventDefault()}>
              <textarea
                onChange={(e) => console.log(e.target.value)}
              ></textarea>
              <button onClick={() => console.log("hej")}>
                <img src={plusIcon} alt="add icon"></img>
              </button>
            </form>
          </div>
          <div className="app_adding_new_recipe__bottom_wrapper__element--list">
            <ol>
              {instructionsList.map((el, index) => {
                return (
                  <li key={index}>
                    <span>
                      {el} <img src={editIcon} alt="edit-icon" />
                      <img src={trashIcon} alt="remove-icon" />
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="app_adding_new_recipe__bottom_wrapper__element">
          <h5>SKŁADNIKI</h5>
          <div className="app_adding_new_recipe__bottom_wrapper__element__input">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                onChange={(e) => console.log(e.target.value)}
              ></input>
              <button onClick={() => console.log("hej")}>
                <img src={plusIcon} alt="add icon"></img>
              </button>
            </form>
          </div>
          <div className="app_adding_new_recipe__bottom_wrapper__element--list">
            <ul>
              {ingredientsList.map((el, index) => {
                return (
                  <li key={index}>
                    <span>
                      {el} <img src={editIcon} alt="edit-icon" />
                      <img src={trashIcon} alt="remove-icon" />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAddingNewRecipe;
