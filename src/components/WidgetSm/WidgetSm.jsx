import "./WidgetSm.css";
import { newMembers } from "../../Datas";

import VisibilityIcon from "@mui/icons-material/Visibility";

function Widget() {
  return (
    <div className="WidgetSm">
      <span className="WidgetSmTtitle">New Join Members</span>
      <ul className="WidgetSmList">
        {newMembers.map((user) => (
          <li key={user.id} className="WidgetSmItem">
            <img src={user.img} alt="" className="WidgetSmImg" />
            <div className="WidgetSmUser">
              <span className="WidgetSmUerName">{user.userName}</span>
              <span className="WidgetSmUerTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="WidgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Widget;
