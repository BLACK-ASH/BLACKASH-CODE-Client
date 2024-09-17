import React from 'react'
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { infoLanguage, defaultLanguage } from '../editors/content';
const PlaygroundNavbar = ({ changeLanguage, changeTheme, textIncrease, textDecrease, runCode }) => {
    const editorTheme = ['xcode', 'solarized_light', 'dracula', 'monokai']
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[20] mt-3 w-52 p-2 shadow">
                        <li>language
                            <ul>
                                {Object.keys(infoLanguage).map((item, index) => (
                                    <li key={index}>
                                        <button className="btn btn-ghost hover:bg-[primary] " onClick={() => changeLanguage(item)}>{item}</button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <ul> Theme
                                {editorTheme.map((item, index) => (
                                    <li key={index}>
                                        <button className="btn btn-ghost hover:bg-[primary] " onClick={() => changeTheme(item)}>{item}</button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
                <h2 className="btn btn-ghost text-xl">Playground</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-20">
                    <li>
                        <details>
                            <summary>Language</summary>
                            <ul className="p-2">
                                {Object.keys(infoLanguage).map((item, index) => (
                                    <li key={index}>
                                        <button className="btn btn-ghost hover:bg-[primary] " onClick={() => changeLanguage(item)}>{item}</button>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Theme</summary>
                            <ul className="p-2">
                                {editorTheme.map((item, index) => (
                                    <li key={index}>
                                        <button className="btn btn-ghost hover:bg-[primary] " onClick={() => changeTheme(item)}>{item}</button>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div>
                <button onClick={textIncrease} className='btn btn-ghost ' > <MdTextIncrease color='black' size={18} /></button>
                <button onClick={textDecrease} className='btn btn-ghost ' > <MdTextDecrease color='black' size={18} /></button>
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