import React from 'react'
import Link from 'next/link'
import { faPenNib, faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuBarMobile({ setter }) {
    return (
        <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-black flex [&>*]:my-auto px-2">
            <button
                className="text-4xl flex text-white"
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
            >
                <FontAwesomeIcon icon={faChevronLeft} className=""/>
            </button>
            <Link href="/" className="mx-auto">
                {/*eslint-disable-next-line*/}
                sss
            </Link>
            <Link
                className="text-3xl flex text-white"
                href="/login"
            >
                <FontAwesomeIcon icon={faChevronLeft} className=""/>
            </Link>
        </nav>
    )
}