import { Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaTachometerAlt,
  FaBook,
  FaCalendar,
  FaInbox,
  FaHistory,
  FaMicrophone,
  FaComments,
  FaQuestionCircle,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import "./index.css";

function KanbasNavigation() {
  const links = [
    {
      name: "Sign In",
      link: "signin",
      icon: <FaSignInAlt />,
    },
    {
      name: "Sign Up",
      link: "signup",
      icon: <FaUserPlus />,
    },
    {
      name: "Account",
      link: "Account",
      icon: <FaUser />,
    },
    {
      name: "Dashboard",
      link: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Courses",
      link: "Courses",
      icon: <FaBook />,
    },
    {
      name: "Calendar",
      link: "Calendar",
      icon: <FaCalendar />,
    },
    {
      name: "Inbox",
      link: "Inbox",
      icon: <FaInbox />,
    },
    {
      name: "History",
      link: "History",
      icon: <FaHistory />,
    },
    {
      name: "Studio",
      link: "Studio",
      icon: <FaMicrophone />,
    },
    {
      name: "Commons",
      link: "Commons",
      icon: <FaComments />,
    },
    {
      name: "Help",
      link: "Help",
      icon: <FaQuestionCircle />,
    },
  ];

  const { pathname } = useLocation();

  return (
    <div className="bg-black kanbas-nav-sidebar sticky-top">
      <ul className="list-group">
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link.link}`}
            className={`list-group-item kanbas-nav-link ${
              pathname.includes(link.link) ? "kanbas-nav-active" : ""
            }`}
            style={{ borderRadius: "0" }}
          >
            <div className="kanbas-nav-icon">{link.icon}</div>
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigation;
