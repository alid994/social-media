import { Link } from 'react-router-dom'
import './navBar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faBell,
    faEnvelope,
    faGrip,
    faHouse, faMagnifyingGlass, faMoon, faSun
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);
    const cursor = { cursor: 'pointer' };

    return (
        <div className="navbar">
            <div className="left">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span>ali</span>
                </Link>
                <FontAwesomeIcon icon={faHouse} style={cursor} />
                {darkMode ? (
                    <FontAwesomeIcon icon={faSun} onClick={toggle} style={cursor} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} onClick={toggle} style={cursor} />
                )}
                <FontAwesomeIcon icon={faGrip} style={cursor} />
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type='text' placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <FontAwesomeIcon icon={faCircleUser} style={cursor} />
                <FontAwesomeIcon icon={faEnvelope} style={cursor} />
                <FontAwesomeIcon icon={faBell} style={cursor} />
                <div className="user" style={cursor}>
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar