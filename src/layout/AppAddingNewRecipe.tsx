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
            <textarea></textarea>
            <img src={plusIcon} alt="add icon"></img>
          </div>
          <div className="app_adding_new_recipe__bottom_wrapper__element--list">
            <ol>
              {instructionsList.map((el) => {
                return (
                  <li>
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
            <input type="text"></input>
            <img src={plusIcon} alt="add icon"></img>
          </div>
          <div className="app_adding_new_recipe__bottom_wrapper__element--list">
            <ul>
              {ingredientsList.map((el) => {
                return (
                  <li>
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
