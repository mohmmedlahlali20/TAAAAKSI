import { RiNextjsFill } from "react-icons/ri";
import Link from 'next/link';
import React from 'react';

function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold">
                    <Link href="/" className="flex items-center space-x-2">
                        <span>NEXT</span>
                        <RiNextjsFill className="text-3xl" />
                        <span>JS</span>
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
                <div className="flex space-x-6">
                    <Link href="/login" className="hover:text-blue-300 transition duration-300 ease-in-out">Login</Link>
                    <Link href="/register" className="hover:text-blue-300 transition duration-300 ease-in-out">Register</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
