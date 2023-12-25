'use client'
import { useEffect, useState } from "react"
import style from '../components/styles/Nav.module.css'
import Image from "next/image"
import cat from '../public/catcute.jpg'
import postImg from '../public/scared-cat.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faEquals } from "@fortawesome/free-solid-svg-icons"
import EdiText from "react-editext"
import manageData from "../components/api/managePost"
// import { } from "@fortawesome/free-regular-svg-icons"
// import { } from "@fortawesome/free-brands-svg-icons"



const GetPost = (prop) => {
    console.log("test")
    const posts = prop.posts
    const setPosts = prop.setPosts
    const [textValue, setTextValue] = useState('Initial Text');
    const [isOpen, setIsOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(0);
    const [isOpenEdit, setIsOpenEdit] = useState(false);

    const [isWindowLessThan400px, setIsWindowLessThan400px] = useState(false);

    const toggleDropdown = (id) => {
        setOpenIndex(id)
        setIsOpen(!isOpen);
    };
    const toggleEdit = () => {
        setIsOpen(!isOpen);
        setIsOpenEdit(!isOpenEdit);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };
    const onSave = (id, val) => {
        setIsOpenEdit(!isOpenEdit);
        setPosts(manageData.editPost(id, val))
    };
    const deletePost = (id) => {
        setIsOpen(!isOpen);
        setPosts(manageData.removePost(id))
    };

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
        <div className={style.backgRigth}>
            {posts.map((post, index) => {
                return (
                    <div>
                        {isWindowLessThan400px ? (
                            <div className="relative mt-0 flex-1 px-0 sm:px-6">
                                <div className="pb-4">
                                    <div className={style.gpCardSmall}>
                                        <div>
                                            <div className="flex">
                                                <div className="flex-none w-14 h-14">
                                                    <span className="inline-flex items-center justify-center pt-0">
                                                        <Image
                                                            src={cat}
                                                            className={style.gpCardSmall_Img}
                                                        />
                                                    </span>
                                                </div>
                                                <div className="grow h-28 pl-3">
                                                    <div className="grid-container grid grid-cols-4">
                                                        <div className="item1 col-span-3">
                                                            <strong className="text-sm">Juraluck Ruji</strong> <span className="text-sm">{post.time}</span><br/>
                                                            {isOpenEdit && post.id == openIndex ? (
                                                                <EdiText
                                                                    type="text"
                                                                    id=""
                                                                    value={post.content}
                                                                    className="text-sm"
                                                                    onSave={(val) => onSave(post.id, val)}
                                                                    onCancel={() => setIsOpenEdit(!isOpenEdit)}
                                                                    editing={isOpenEdit}
                                                                />
                                                            ) : (
                                                                <div>
                                                                    <span className="text-sm">{post.content}</span>
                                                                </div>
                                                            )}
                                                            <div className="flex justify-end pr-7"></div>
                                                        </div>
                                                        <div className="item2 col-span-1">
                                                            <div className='w-full flex justify-end'>
                                                                <div className="relative inline-block">
                                                                    <button
                                                                        type="button"
                                                                        className="px-2 py-0"
                                                                        onClick={() => toggleDropdown(post.id)}
                                                                    >
                                                                        <FontAwesomeIcon icon={faEquals} className={style.DropdownIcon}/>
                                                                        {/* <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                                                        </svg> */}
                                                                    </button>

                                                                    {isOpen && post.id == openIndex && (
                                                                        <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                                            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                                <li>
                                                                                    <a
                                                                                        href="#"
                                                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                                        onClick={() => toggleEdit()}
                                                                                    >
                                                                                        Edit
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        href="#"
                                                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                                        onClick={() => deletePost(post.id)}
                                                                                    >
                                                                                        Delete
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="">
                                <div className="px-10 py-0">
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <div className={style.getPostMain}>
                                            <div className={style.gpCard}>
                                                <div>
                                                    <div className="flex">
                                                        <div className="flex-none w-14 h-14">
                                                            <span className="inline-flex items-center justify-center pt-0">
                                                                <Image
                                                                    src={cat}
                                                                    className={style.apImg}
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="grow h-28 pl-3">
                                                            <div className="grid-container grid grid-cols-4">
                                                                <div className="item1 col-span-3">
                                                                    <strong className={style.gpTextName}>Juraluck Ruji</strong> <span className={style.gpTimePost}>{post.time}</span><br/>
                                                                    {isOpenEdit && post.id == openIndex ? (
                                                                        <EdiText
                                                                            type="text"
                                                                            id=""
                                                                            value={post.content}
                                                                            className={style.gpTextPost}
                                                                            onSave={(val) => onSave(post.id, val)}
                                                                            onCancel={() => setIsOpenEdit(!isOpenEdit)}
                                                                            editing={isOpenEdit}
                                                                        />
                                                                    ) : (
                                                                        <div>
                                                                            <span className={style.gpTextPost}>{post.content}</span>
                                                                        </div>
                                                                    )}
                                                                    <div className="flex justify-end pr-7"></div>
                                                                </div>
                                                                <div className="item2 col-span-1">
                                                                    <div className='w-full flex justify-end'>
                                                                        <div className="relative inline-block">
                                                                            <button
                                                                                type="button"
                                                                                className="px-2 py-0"
                                                                                onClick={() => toggleDropdown(post.id)}
                                                                            >
                                                                                <FontAwesomeIcon icon={faEquals} className={style.DropdownIcon}/>
                                                                            </button>

                                                                            {isOpen && post.id == openIndex && (
                                                                                <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                                                    <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                                        <li>
                                                                                            <a
                                                                                                href="#"
                                                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                                                onClick={() => toggleEdit()}
                                                                                            >
                                                                                                Edit
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="#"
                                                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                                                onClick={() => deletePost(post.id)}
                                                                                            >
                                                                                                Delete
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )
            })} 
        </div>
    )
}

export default GetPost