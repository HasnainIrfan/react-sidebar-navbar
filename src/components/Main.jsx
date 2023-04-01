import React, { useState } from 'react'
// Csss
import css from "../style/main.module.scss";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const Main = ({ children }) => {
    const [toggle, settoggle] = useState(false);

    return (
        <>
            <div className={`${css.main_container}`}>
                <Sidebar toggle={toggle} settoggle={settoggle} />
                <Navbar toggle={toggle} settoggle={settoggle} />
                <div className={`${css.main} ${toggle ? css.mainActive : ""} 
                `}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Main