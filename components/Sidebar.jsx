'use client'
import React, { useEffect, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeather, faBars, faChevronLeft, faHome, faUser, faGears } from "@fortawesome/free-solid-svg-icons"
import style from '../components/styles/Sidebar.module.css'
import Link from "next/link"
// import { } from "@fortawesome/free-regular-svg-icons"
// import { } from "@fortawesome/free-brands-svg-icons"

const sidebarItems = [
    {
        name: "Home",
        href: "/",
        icon: <FontAwesomeIcon icon={faHome} className=""/>
    },
    {
        name: "Profile",
        href: "/",
        icon: <FontAwesomeIcon icon={faUser} className=""/>
    },
    {
        name: "Setting",
        href: "/",
        icon: <FontAwesomeIcon icon={faGears} className=""/>
    }
];

export default function Sidebar() {

    const [isCollapSidebar, setIsCollapSidebar] = useState(false);

    const toggleSidbarCollapHandle = () => {
        setIsCollapSidebar((prev) => !prev);
    }

    const dynamicStyle = isCollapSidebar ? { width: '5.3rem' } : {};
    const dynamicStyle2 = isCollapSidebar ? { display: 'none' } : {};

    return (
        <div className={style.sidebar_wrapper}>
      {/* <p>Is Toggled: {isCollapSidebar ? 'Yes' : 'No'}</p> */}
            <button className={style.btn} onClick={toggleSidbarCollapHandle}>
                <FontAwesomeIcon icon={faChevronLeft} className={style.sidebar_iconSlide}/>
            </button>
            <aside className={style.sidebar} style={dynamicStyle} data-collapse={isCollapSidebar}>
                <div className={style.sidebar_top}>
                    {/* <p className={style.sidebar_logo_name}>MY<FontAwesomeIcon icon={faFeather} className={style.sidebar_logo}/>POST</p> */}
                    <div style={{ display: 'grid', placeItems: 'center', height: '3rem', width: '3rem', backgroundColor: '#A367B1', borderRadius: '1rem' }}>
                        <FontAwesomeIcon icon={faFeather}  className={style.sidebar_logo}/>
                    </div>
                    <span className={style.sidebar_textlogo} style={dynamicStyle2}>MY</span>
                    <span className={style.sidebar_textlogo2} style={dynamicStyle2}>POST</span>
                </div>
                <div>
                    <ul className={style.sidebar_list}>
                        {sidebarItems.map(({ name, href, icon }) => (
                            <li className={style.sidebar_item} key={name}>
                                <Link href={href} className={style.sidebar_link}>
                                    <span className={style.sidebar_icon}>
                                        {icon}
                                    </span>
                                    <span className={style.sidebar_name} style={dynamicStyle2}>{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    )
}
