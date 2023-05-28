import widgetIcon from "../assets/plus.png";

interface AppWidgetProps {
  widgetText: string;
  onClickHandler: any;
}

const AppWidgetAddItem: React.FC<AppWidgetProps> = ({
  widgetText,
  onClickHandler,
}) => {
  return (
    <div className="app_widget" onClick={onClickHandler}>
      <img src={widgetIcon} />
      <span>{widgetText}</span>
    </div>
  );
};

export default AppWidgetAddItem;
