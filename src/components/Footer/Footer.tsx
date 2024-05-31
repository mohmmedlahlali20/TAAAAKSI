import React from 'react'


const Footer: React.FC = () => {

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} nextjs . All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://twitter.com" className="hover:text-blue-500" aria-label="Twitter">
                        Twitter
                    </a>
                    <a href="https://facebook.com" className="hover:text-blue-700" aria-label="Facebook">
                        Facebook
                    </a>
                    <a href="https://instagram.com" className="hover:text-pink-500" aria-label="Instagram">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer