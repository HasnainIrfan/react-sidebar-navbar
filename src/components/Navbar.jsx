import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// Css
import css from "../style/navbar.module.scss";
import '../style/global.scss'
// Icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Navbar = ({ toggle, settoggle }) => {
    const [isSubMenu, setIsSubMenu] = useState(false);

    // Sticky Navbar Start
    const [stickyNavbar, setStickyNavbar] = useState(false);
    const ChangeNav = () => {
        if (window.scrollY > 200) {
            setStickyNavbar(true);
        } else {
            setStickyNavbar(false);
        }
    };
    window.addEventListener("scroll", ChangeNav);
    // Sticky Navbar End
    const Toggle = () => {
        settoggle(!toggle);
    };
    const handleClose = () => {
        setIsSubMenu(false);
    };
    // Sub Menu Start
    const handleClick = () => {
        setIsSubMenu(!isSubMenu);
    };
    return (
        <div
            className={`${css.navbar}
    ${stickyNavbar ? css.navbarSticky : ""} 
    ${toggle ? css.navbarActive : ""} 
  `}
        >
            <div className={css.navbar_wrapper}>
                <div className={css.NavbarLeft}>
                    <div
                        className={`${css.handburgerMain}`}
                    >
                        <div
                            className={`handburgerMenu ${css.handburgerMenu} ${toggle ? "handburgerActive" : ""} `}
                            onClick={Toggle}
                        >
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>

                    <h3 >
                        Hey! Hamza Aslam
                    </h3>
                </div>
                <div className={css.NavbarRight}>
                    <div
                        className={`${css.NavbarRight_items} `}
                    >
                        <NotificationsIcon
                            className={css.icon}
                        />
                        <div className={css.Counter}>1</div>
                    </div>

                    <div className={css.NavbarRight_items}>
                        <TextsmsRoundedIcon className={css.icon} />
                        <div className={css.Counter}>20</div>
                    </div>

                    <div className={css.NavbarRight_items}>
                        <h5 onClick={handleClick} >
                           HA
                        </h5>
                        <div
                            className={`${css.SubMenu} ${isSubMenu ? css.SubMenuActive : ""}`}
                        >
                            <ul>
                                <Link to="/profile" onClick={handleClose}>
                                    <li>Profile</li>
                                </Link>
                                <Link >
                                    <li>Logout</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar