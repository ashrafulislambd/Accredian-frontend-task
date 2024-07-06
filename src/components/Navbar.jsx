import React from "react";

export default () => {

    return (
        <div className="flex flex-col md:flex-row items-center justify-around md:h-[100px]">
            <div id="logo">
                <img className="w-[200px]" src="accredian-logo.png" alt="" />
            </div>
            <div id="nav-links">
                <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 mt-2 sm:mt-0">
                    <li className="hover:text-blue-950 hover:cursor-pointer hover:underline">Refer & Earn</li>
                    <li className="hover:text-blue-950 hover:cursor-pointer hover:underline">Resources</li>
                    <li className="hover:text-blue-950 hover:cursor-pointer hover:underline">About Us</li>
                    <li className="bg-gray-200 hover:cursor-pointer rounded p-2 hover:bg-gray-300">Login</li>
                    <li className="bg-blue-600 hover:cursor-pointer hover:bg-blue-700 rounded p-2 text-white">Try for free</li>
                </ul>
            </div>
        </div>
    )
}