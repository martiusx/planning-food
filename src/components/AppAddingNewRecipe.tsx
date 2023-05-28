import Button from "./Button";
import plusIcon from "../assets/plus.png";

const AppAddingNewRecipe = () => {
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
          <div>
            <input type="text"></input>
            <img src={plusIcon} alt="add icon"></img>
          </div>
          <div className="app_adding_new_recipe__bottom_wrapper__element--list">
            <ol>
              <li>1</li>
              <li>2</li>
              <li>2</li>
            </ol>
          </div>
        </div>
        <div className="app_adding_new_recipe__bottom_wrapper__element">
          <h5>SKŁADNIKI</h5>
          <div>
            <input type="text"></input>
            <img src={plusIcon} alt="add icon"></img>
          </div>
          <div className="app_adding_new_recipe__bottom_wrapper__element--list">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAddingNewRecipe;
