import widgetIcon from "../assets/plus.png";

interface AppWidgetProps {
  widgetText: string;
}

const AppWidget: React.FC<AppWidgetProps> = ({ widgetText }) => {
  return (
    <div className="app_widget">
      <img src={widgetIcon} />
      <span>{widgetText}</span>
    </div>
  );
};

export default AppWidget;
