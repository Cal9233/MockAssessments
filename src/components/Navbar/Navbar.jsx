import React from 'react';
import { FaReact, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from '../Button/Button';
import {useAppContext} from '../../Context/AppContext'
import './Navbar.css';

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
}

const NavItems = ({ config }) => {
    return (
        <ul className="nav-list">
            {Object.keys(config).map((key) => {
                const item = config[key];
                return (
                    <li key={item.id} className="nav-item">
                        <a href={item.url} target="_blank" style={{color: item.color}} rel="noopener noreferrer" className="nav-link">
                            {item.icon}
                            <span className="tooltip">{item.title}</span>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

const Navbar = () => {
    const { isOpen, handleSidebarOpen } = useAppContext();
    return (
        <nav className="navbar">
            <Button 
                variant="outline" 
                onClick={handleSidebarOpen}
                style={{ marginLeft: "20px" }}
            >
                Toggle
            </Button>
            <div className="links-container">
                <NavItems config={itemObjectConfig} />
            </div>
        </nav>
    );
}
NavItems.defaultProps = {
    config: {
        defaultObj: {
            id: 1,
            title: "Default Prop",
            url: "",
            icon: null,
            color: ''
        }
    }
}

export default Navbar;