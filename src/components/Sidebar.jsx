import React from 'react'
// Css
import css from "../style/sidebar.module.scss";

// React Links
import { NavLink, } from "react-router-dom";
// Images
import TaskLogo from "../assets/images/tasklogo.png";

// Icons
import FolderIcon from "@mui/icons-material/Folder";
import SpeedIcon from "@mui/icons-material/Speed";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SickIcon from "@mui/icons-material/Sick";

const Sidebar = ({ toggle, settoggle }) => {

    const Routes = [
        {
            link: "/",
            label: "Dashboard",
            Icon: <SpeedIcon />,
        },
        {
            link: "/project",
            label: "Projects",
            Icon: <FolderIcon />,
        },
        {
            link: "/task",
            label: "Tasks",
            Icon: <AssignmentIndIcon />,
        },
        {
            link: "/attendance",
            label: "Attendance",
            Icon: <CalendarMonthIcon />,
        },
        {
            link: "/employee",
            label: "Employee",
            Icon: <Groups2OutlinedIcon />,
        },
        {
            link: "/leave",
            label: "Leave",
            Icon: <SickIcon />,
        },
    ];
    const handleSidebarChange = () => {
        if (window.innerWidth <= 900) {
            settoggle(false);
        }
    };


    return (

        <>
            <div className={`${css.sidebar} ${toggle ? css.sidebarActive : ""} `}>
                <div className={`${css.sidebar_wrapper}`}>
                    <div className={css.sidebartop}>
                        <div className={css.closelogo}>
                            <CloseIcon onClick={() => settoggle(false)} />
                        </div>
                        <div className={css.sidebarLogo}>
                            <img src={TaskLogo} alt="" />
                        </div>
                        <span >Your Name</span>
                    </div>
                    <div className={css.sidebarbottom}>
                        {Routes.map((items, i) => {
                            return (
                                <>
                                    <ul className={css.sidebarmenu}>
                                        <NavLink
                                            key={i}
                                            to={items.link}
                                            className={({ isActive }) =>
                                                isActive ? css.navbarActive : ""
                                            }
                                            onClick={handleSidebarChange}
                                        >
                                            <li>
                                                <span className={css.sidebarIcon}>{items.Icon}</span>
                                                <span className={css.sidebarText}>
                                                    {items.label}
                                                </span>
                                            </li>
                                        </NavLink>
                                    </ul>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar