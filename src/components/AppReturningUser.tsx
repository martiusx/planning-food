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
      <AppWidgetAddItem widgetText="dodaj przepis" />
      <AppWidgetAddItem widgetText="dodaj plan" />
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
        notificationMessage="masz już 99 przepisów, nieźle!"
      />
      <AppWeekView />
    </div>
  );
};

export default AppReturningUser;
