import "./SideBar.css";

// Import MUI Icons
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <Link to="/" className="links">
              <li className="sideBarListItem active">
                <LineStyleIcon className="sideBarIcon" />
                Home
              </li>
            </Link>
            <li className="sideBarListItem">
              <TimelineIcon className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUpIcon className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quic Menu</h3>
          <ul className="sideBarList">
            <Link to="/users" className="links">
              <li className="sideBarListItem">
                <PermIdentityIcon className="sideBarIcon" />
                Users
              </li>
            </Link>
            <Link to="/newUser" className="links">
              <li className="sideBarListItem">
                <StorefrontIcon className="sideBarIcon" />
                NewUsers
              </li>
            </Link>
            <Link to="/products" className="links">
              <li className="sideBarListItem">
                <AttachMoneyIcon className="sideBarIcon" />
                Products
              </li>
            </Link>
            <li className="sideBarListItem">
              <BarChartIcon className="sideBarIcon" />
              TransAction
            </li>
            <li className="sideBarListItem">
              <AttachMoneyIcon className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MailOutlinedIcon className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <DynamicFeedIcon className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <ModeCommentOutlinedIcon className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <WorkOutlineOutlinedIcon className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <TimelineIcon className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <WorkOutlineOutlinedIcon className="sideBarIcon" />
              Repors
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
