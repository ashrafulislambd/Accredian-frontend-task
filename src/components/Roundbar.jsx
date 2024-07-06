import React from "react";

export default () => {

    return (
        <div className="m-4 secondary-nav-links mx-auto w-[500px] font-semibold">
            <ul className="flex justify-around bg-slate-200 p-3 rounded-2xl
                *:hover:cursor-pointer">
                <li className="hover:text-blue-900">Refer</li>
                <li className="hover:text-blue-900">Benefits</li>
                <li className="hover:text-blue-900">FAQs</li>
                <li className="hover:text-blue-900">Support</li>
            </ul>
        </div>
    );
}