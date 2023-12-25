import React, { useEffect, useState } from "react"
import style from './styles/Nav.module.css'
import Link from "next/link"
import Image from "next/image"
import cat from '../public/catcute.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeather, faBars } from "@fortawesome/free-solid-svg-icons"
import Dropdown from "../components/Dropdown"

const Header = () => {

  const [isWindowLessThan400px, setIsWindowLessThan400px] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsWindowLessThan400px(windowWidth < 700);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
      <div className={style.backgroundHead}>
        <div className="">
          {isWindowLessThan400px ? (
              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-3">
                  <div className="text-nowrap p-4">
                    <p className={style.sidebar_logo_name_mobile}>MY<FontAwesomeIcon icon={faFeather} className={style.sidebar_logo}/>POST</p>
                  </div>
                </div>
                <div class="col-end-7 col-span-2">
                  <div className="flex justify-end p-4">
                    <Dropdown/>
                  </div>
                </div>
              </div>
            ) : <div className="col-end-7 col-span-2">
                  <div className="flex justify-end p-4">
                    <div className="flex items-center bg-[#9EB8D9] px-3 py-2 rounded-full">
                        <Image
                          src={cat}
                          className="h-10 w-10 rounded-full border-0"
                        />
                        <div className="px-2">
                          <strong className={style.loginName}>Juraluck Ruji</strong>
                        </div>
                      </div> 
                  
                  </div>
                </div>
          }
        </div>
      </div>
    )
}

export default Header