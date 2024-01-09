import { Link, useNavigate } from 'react-router-dom'
import './navBar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faBell,
    faEnvelope,
    faGrip,
    faHouse, faMagnifyingGlass, faMoon, faSun
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
    const [openUserSett, setOpenUserSett] = useState(false);
    const [err, setErr] = useState(null);
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);

    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout()
            navigate("/login")
        } catch (err) {
            setErr(err)
        }

    }


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
                {openUserSett && <div className="userSettings">
                    <button onClick={handleLogout}>Logout</button>
                    <button>Update profile</button>
                </div>}
                <FontAwesomeIcon icon={faCircleUser} style={cursor} onClick={() => setOpenUserSett(!openUserSett)} />

                <FontAwesomeIcon icon={faEnvelope} style={cursor} />
                <FontAwesomeIcon icon={faBell} style={cursor} />
                <div className="user" style={cursor}>
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name} {currentUser.surname}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar