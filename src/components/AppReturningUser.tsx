import AppWidgetAddItem from "./AppWidgetAddItem";
import AppWidgetNotification from "./AppWidgetNotification";
import closeIcon from "../assets/close-icon.png";
import infoIcon from "../assets/info-icon.png";
import checkIcon from "../assets/check-icon.png";
import alerIcon from "../assets/alert-icon.png";
import AppWeekView from "./AppWeekView";

const AppReturningUser = () => {
  return (
    <div className="app_returning_user">
      <div className="app_returning_user__top_wrapper">
        <AppWidgetAddItem widgetText="dodaj przepis" />
        <AppWidgetAddItem widgetText="dodaj plan" />
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
    </div>
  );
};

export default AppReturningUser;
