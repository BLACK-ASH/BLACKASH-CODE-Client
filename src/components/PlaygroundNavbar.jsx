import React from 'react'
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { infoLanguage, defaultLanguage } from '../editors/content';
const PlaygroundNavbar = ({ changeLanguage, language, runCode }) => {
    const editorTheme = ['xcode', 'solarized_light', 'dracula', 'monokai']
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <h2 className='text-lg font-bold text-primary-content' >Playground</h2>
            </div>
            <div className="navbar-center">
                <select onClick={(e) => changeLanguage(e.target.value)} className="select font-mono font-bold w-full max-w-xs">
                    <option >{language}</option>
                    {Object.keys(infoLanguage).map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
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