import React, { useState } from 'react'
import ThemeSelector from './ThemeSelector';
import InputEditor from '../editors/InputEditor';
const Setting = () => {
    const [theme, setTheme] = useState(localStorage.getItem('Editortheme') || 'xcode');
    const [fontSize, setfontSize] = useState(parseInt(localStorage.getItem('fontSize')) || 14);

    // Editor Theme
    const editorTheme = ['xcode', 'solarized_light', 'dracula', 'monokai']

    // To change theme
    const changeTheme = (e) => {
        setTheme(e);
        localStorage.setItem('Editortheme', e);
    };

    // TO change font size
    const textIncrease = () => {
        if (fontSize < 18) {
            setfontSize(fontSize + 1);
        }
    }

    const textDecrease = () => {
        if (fontSize > 14) {
            setfontSize(fontSize - 1);
        }
    }

    return (
        <div className='setting bg-base-200 m-2 h-screen ' >
            <h2 className='text-3xl text-primary  m-2 p-2 '>Setting</h2>
            <div className='m-3 p-2 bg-secondary rounded-box ' >
                <p className='text-2xl text-base-200'>Website Theme</p>
                <ThemeSelector />
            </div>
            <div className='m-3 p-2 bg-secondary rounded-box ' >
                <p className='text-2xl text-base-200'> Editor Theme & Font Size</p>
                <div className='flex gap-8' >
                    <div onClick={(e) => changeTheme(e.target.value)} className="join join-horizontal">
                        {editorTheme.map((item, index) => (
                            <input
                                type="radio"
                                name="theme-buttons"
                                className="btn theme-controller join-item"
                                aria-label={item}
                                value={item}
                                key={index} />
                        ))}
                    </div>
                    <div className="flex">
                        <button onClick={textIncrease} className='btn btn-accent ml-2' >Increase</button>
                        <button onClick={textDecrease} className='btn btn-accent ml-2' >Decrease</button>
                    </div>
                </div>
                <p className='text-2xl text-base-200' >Preview</p>
                <div className='bg-base-100 rounded-box h-[40vh] p-2' >
                    <InputEditor theme={theme} fontSize={fontSize} />
                </div>
            </div>
        </div>
    )
}

export default Setting