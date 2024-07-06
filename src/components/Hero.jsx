import React, { useRef } from "react";

export default () => {
    return (
        <div className="p-10 relative mt-20 rounded-3xl bg-gradient-to-t from-gray-50 to-gray-400
             mx-auto w-[300px] h-[400px] sm:w-[500px] sm:h-[400px] md:w-[700px] md:h-[400px] shadow-xl">
            <h1 className="text-4xl font-bold w-[150px]">Let's Learn & Earn</h1>
            <h2 className="w-[150px] text-lg font-semibold">Get a chance to win up to <span className="text-2xl text-blue-400">Rs. 15,000</span></h2>
            <button className="mt-5 bg-blue-900 text-white p-4 rounded hover:bg-blue-800"
                onClick={e => {
                    document.getElementById("modal").showModal();
                }}>Refer Now</button>
            <img className="hidden md:inline-block sm:w-[200px] md:w-[500px] sm:absolute sm:bottom-[-20px] md:bottom-[-57px] sm:right-0 md:right-0" src="banner.png" alt="" />
        </div>
    )
}