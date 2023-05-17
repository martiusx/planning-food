import doubleArrowIcon from "../assets/double-arrow.png";

const AppWeekView = () => {
  return (
    <div className="app_week_view">
      <table className="app_week_view__table">
        <caption>Twój plan na nr_tygodnia tydzień:</caption>
        <thead>
          <tr>
            <th>Posiłek</th>
            <th>Poniedziałek</th>
            <th>Wtorek</th>
            <th>Środa</th>
            <th>Czwartek</th>
            <th>Piątek</th>
            <th>Sobota</th>
            <th>Niedziela</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>śniadanie</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th>drugie śniadanie</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th>zupa</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th>drugie danie</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <th>kolacja</th>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
      <div className="app_week_view__table__buttons">
        <button>
          <img
            src={doubleArrowIcon}
            className="app_week_view__table__buttons--left"
          ></img>
          poprzedni
        </button>
        <button>
          następny
          <img
            src={doubleArrowIcon}
            className="app_week_view__table__buttons--right"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default AppWeekView;
