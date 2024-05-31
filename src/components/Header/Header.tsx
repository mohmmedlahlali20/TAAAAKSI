'use client'
import { RiNextjsFill } from "react-icons/ri";
import Link from 'next/link';
import React from 'react';
import style from '@/components/Header/Header.module.css';
function Header() {
    console.log("Hello from header");
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
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/admin" className="hover:text-blue-300 transition duration-300 ease-in-out">Admin Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-blue-300 transition duration-300 ease-in-out">About</Link>
                    </li>
                    <li>
                        <Link href="/articles" className="hover:text-blue-300 transition duration-300 ease-in-out">Articles</Link>
                    </li>
                </ul>
                <div className="flex space-x-4">
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
