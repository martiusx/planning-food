interface AppWidgetNotificationProps {
  notificationIcon: string;
  closeIcon: string;
  notificationMessage: string;
}

const AppWidgetNotification: React.FC<AppWidgetNotificationProps> = ({
  notificationIcon,
  closeIcon,
  notificationMessage,
}) => {
  return (
    <div className="app_widget_notification">
      <div className="app_widget_notification__icon">
        <img src={notificationIcon} />
      </div>
      <div className="app_widget_notification__message">
        <span>{notificationMessage}</span>
      </div>
      <div className="app_widget_notification__close">
        <img src={closeIcon} />
      </div>
    </div>
  );
};

export default AppWidgetNotification;
