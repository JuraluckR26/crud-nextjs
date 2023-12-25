'use client'
import React, { useEffect } from "react"
import style from '../components/styles/Nav.module.css'
import cat from '../public/catcute.jpg'
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCameraRetro, faPhotoFilm } from "@fortawesome/free-solid-svg-icons"
import { faFaceKissWinkHeart } from "@fortawesome/free-regular-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import manageData from "../components/api/managePost"
import { useState } from "react"

const AddPost = (prop) => {
    const content = prop.content
    const setContent = prop.setContent
    const addPost = prop.addPost

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
        <div>
            {isWindowLessThan400px ? (
                <div className={style.addPostMain_Small}>
                    <div className={style.apCard_Small}>
                        <div className="grow h-28 pb-0">
                            <textarea
                                className={style.apInput}
                                onChange={e => setContent(e.target.value)}
                                value = {content}
                                placeholder="What do you think now...?"
                            />
                        </div>
                        <div className="flex justify-end pt-3">
                            <div className="flex justify-end pr-7 pt-2">
                                <FontAwesomeIcon icon={faCameraRetro} className="text-base text-fuchsia-600"/>
                                <span className={style.verticalLine}></span>
                                <FontAwesomeIcon icon={faPhotoFilm} className="text-base text-fuchsia-600"/>
                                <span className={style.verticalLine}></span>
                                <FontAwesomeIcon icon={faFaceKissWinkHeart} className="text-base text-fuchsia-600"/>
                            </div>
                            <button className="bg-[#A367B1] text-white px-5 py-1 rounded hover:bg-[#5D3587] text-sm" onClick={() => addPost()}>Post</button>
                        </div> 
                    </div>
                </div>
            ) : (
                <div className="px-10 p-5">
                    <div className={style.addPostMain}>
                        <div className="flex">
                            <div className="flex-none w-14 h-14">
                                <span className="inline-flex items-center justify-center pt-0">
                                    <Image
                                        src={cat}
                                        className={style.apImgAdd}
                                    />
                                </span>
                            </div>
                            <div className={style.apCard}>
                                <div className="grow h-28 pl-0">
                                    <textarea
                                        className={style.apInput}
                                        onChange={e => setContent(e.target.value)}
                                        value = {content}
                                        placeholder="What do you think now...?"
                                    />
                                </div>
                                <div className="flex justify-end pt-4">
                                    <div className="flex justify-end pr-7">
                                        <FontAwesomeIcon icon={faCameraRetro} className={style.apIcon1}/>
                                        <span className={style.verticalLine}></span>
                                        <FontAwesomeIcon icon={faPhotoFilm} className={style.apIcon1}/>
                                        <span className={style.verticalLine}></span>
                                        <FontAwesomeIcon icon={faFaceKissWinkHeart} className={style.apIcon1}/>
                                    </div>
                                    <button className="bg-[#A367B1] text-white px-5 py-1 rounded hover:bg-[#5D3587]" onClick={() => addPost()}>Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
        
    )

}

export default AddPost