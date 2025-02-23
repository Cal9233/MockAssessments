import React, { useContext } from 'react';
import { Button } from '../Button/Button';
import { FaReact, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Sidebar.css";
import { useAppContext } from '../Context/AppContext';

const itemObjectConfig = {
    reactObj: {
        id: 1,
        title: "React",
        url: "https://react.dev/",
        icon: <FaReact />,
        color: "#61dafb"
    },
    youtubeObj: {
        id: 2,
        title: "YouTube",
        url: "https://www.youtube.com/",
        icon: <FaYoutube />,
        color: "#f51616"
    },
    githubObj: {
        id: 3,
        title: "GitHub",
        url: "https://github.com/Cal9233",
        icon: <FaGithub />,
        color: "white"
    },
    linkedInObj: {
        id: 4,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/calmalagon/",
        icon: <FaLinkedin />,
        color: "#391ae8"
    }
};

const SidebarItems = ({ config }) => {
  return (
    <ul className="sidebar-list">
        {Object.keys(config).map((key) => {
            const item = config[key];
            return (
                <li key={item.id} className="sidebar-item">
                    <a href={item.url} target="_blank" style={{color: item.color}} rel="noopener noreferrer" className="sidebar-link">
                        {item.icon}
                        <span className="tooltip">{item.title}</span>
                    </a>
                </li>
            );
        })}
    </ul>
  );
}

const Sidebar = () => {
  const {isOpen} = useAppContext();
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
      {isOpen && (
        <div className={`sidebar-content ${isOpen ? 'expanded' : 'collapsed'}`}>
          <SidebarItems config={itemObjectConfig} />
        </div>
      )}
    </div>
  );
};

SidebarItems.defaultProps = {
  config: {
      defaultObj: {
          id: 1,
          title: "Default Prop",
          url: "",
          icon: null,
          color: ''
      }
  }
};

export default Sidebar;