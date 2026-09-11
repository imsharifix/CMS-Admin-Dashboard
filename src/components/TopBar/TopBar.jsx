import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import profilePhoto from "../../assets/imgs/profile.jpg";

import "./TopBar.css";

function TopBar() {
  return (
    <>
      <div className="TopBar">
        <div className="TopBarWrapper">
          <div className="TopLeft">Sharifi❤</div>
          <div className="TopRight">
            <div className="TopBarIconContainer">
              <NotificationsNoneIcon />
              <span className="TopBarIconBadge">2</span>
            </div>
            <div className="TopBarIconContainer">
              <LanguageIcon />
              <span className="TopBarIconBadge">2</span>
            </div>
            <div className="TopBarIconContainer">
              <SettingsIcon />
            </div>
            <img src={profilePhoto} alt="" className="TopBarProfilePhoto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
