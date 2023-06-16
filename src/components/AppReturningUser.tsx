import React, { useState } from "react";
import AppWidgetAddItem from "./AppWidgetAddItem";
import AppWidgetNotification from "./AppWidgetNotification";
import closeIcon from "../assets/close-icon.png";
import infoIcon from "../assets/info-icon.png";
import checkIcon from "../assets/check-icon.png";
import alerIcon from "../assets/alert-icon.png";
import AppWeekView from "./AppWeekView";
import AppAddingNewRecipe from "../layout/AppAddingNewRecipe";

interface AppReturningUserPulpitProps {
  onAddRecipeClick: any;
}

const AppReturningUserPulpit: React.FC<AppReturningUserPulpitProps> = ({
  onAddRecipeClick,
}) => {
  return (
    <>
      <div className="app_returning_user__top_wrapper">
        <div className="app_returning_user__top_wrapper__add_item">
          <AppWidgetAddItem
            widgetText="dodaj przepis"
            onClickHandler={onAddRecipeClick}
          />
          <AppWidgetAddItem
            widgetText="dodaj plan"
            onClickHandler={() => console.log("hej")}
          />
        </div>
        <div className="app_returning_user__top_wrapper__notification">
          <AppWidgetNotification
            notificationIcon={infoIcon}
            closeIcon={closeIcon}
            notificationMessage="masz już 99 przepisów, nieźle!"
          />
          <AppWidgetNotification
            notificationIcon={checkIcon}
            closeIcon={closeIcon}
            notificationMessage="masz już 99 przepisów, nieźle!"
          />
          <AppWidgetNotification
            notificationIcon={alerIcon}
            closeIcon={closeIcon}
            notificationMessage="Świetnie, że jesteś! Udanego planowania i smacznego! :)"
          />
        </div>
      </div>
      <AppWeekView />
    </>
  );
};

const AppReturningUser = () => {
  const [isWidgetClicked, setIsWidgetClicked] = useState(false);

  const handleWidgetClick = () => {
    setIsWidgetClicked(true);
  };

  return (
    <div className="app_returning_user">
      {isWidgetClicked ? (
        <AppAddingNewRecipe />
      ) : (
        <AppReturningUserPulpit onAddRecipeClick={handleWidgetClick} />
      )}
    </div>
  );
};

export default AppReturningUser;
