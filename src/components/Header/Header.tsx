'use client'
import { RiNextjsFill } from "react-icons/ri";
import Link from 'next/link';
import React, { useState } from 'react';
import style from '@/components/Header/Header.module.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className={style.next}>NEXT</span>
                        <RiNextjsFill className="text-3xl" />
                        <span className={style.js}>JS</span>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
                        </svg>
                    </button>
                </div>
                <ul className={`flex-col lg:flex-row lg:flex lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-blue-600 lg:bg-transparent transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:transform-none`}>
                    <li>
                        <Link onClick={() => setIsOpen(false)} href="/admin" className="block py-2 px-6 lg:py-0 lg:px-0 hover:text-blue-300 transition duration-300 ease-in-out">Admin Dashboard</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} href="/about" className="block py-2 px-6 lg:py-0 lg:px-0 hover:text-blue-300 transition duration-300 ease-in-out">About</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} href="/articles" className="block py-2 px-6 lg:py-0 lg:px-0 hover:text-blue-300 transition duration-300 ease-in-out">Articles</Link>
                    </li>
                </ul>
                <div className="hidden lg:flex space-x-4">
                    <Link href="/login">
                        <button onClick={() => alert('login')} className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-300 transition duration-300 ease-in-out">
                            Login
                        </button>
                    </Link>
                    <Link href="/register">
                        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-300 transition duration-300 ease-in-out">Register</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
