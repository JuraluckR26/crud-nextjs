'use client'
import { useState } from 'react'
import style from '../components/styles/Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faUser, faGears } from "@fortawesome/free-solid-svg-icons"
import cat from '../public/catcute.jpg';
import Image from 'next/image'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className='w-full flex justify-end'>
            <div className="relative inline-block">
                <button
                    type="button"
                    className="px-2 py-0"
                    onClick={toggleDropdown}
                >
                    <FontAwesomeIcon icon={faBars} className="text-white"/>
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li className='p-2 flex grid justify-items-center'>
                                <Image
                                    src={cat}
                                    className="h-9 w-9 rounded-full border-2 border-pink-400"
                                />
                                <strong className="text-sm text-violet-800">Juraluck Ruji</strong>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-violet-500"
                                    onClick={closeDropdown}
                                >
                                    <FontAwesomeIcon icon={faHome} className="pr-2"/>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-violet-500"
                                    onClick={closeDropdown}
                                >
                                    <FontAwesomeIcon icon={faUser} className="pr-2"/>
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-violet-500"
                                    onClick={closeDropdown}
                                >
                                    <FontAwesomeIcon icon={faGears} className="pr-2"/>
                                    Setting
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown