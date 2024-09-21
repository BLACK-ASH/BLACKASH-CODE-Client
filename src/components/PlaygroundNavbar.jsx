import React from 'react'
import { FaPlay } from "react-icons/fa";
import { infoLanguage } from '../editors/content';
const PlaygroundNavbar = ({ changeLanguage, language, runCode }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <h2 className='text-2xl font-bold text-secondary' >Playground</h2>
            </div>
            <div className="navbar-center dropdown">
                <div tabIndex={0} role="button" className="select items-center select-bordered">{language}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[10] w-52 p-2 shadow">
                    {Object.keys(infoLanguage).map((item, index) => (
                        <li key={index}><button onClick={() => changeLanguage(item)}>{item}</button></li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn btn-ghost ' onClick={runCode}>
                    <FaPlay size={18} />
                </button>
            </div>
        </div>
    )
}

export default PlaygroundNavbar