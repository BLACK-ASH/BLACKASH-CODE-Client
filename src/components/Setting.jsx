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
        <div className='setting  m-2 h-full py-2 ' >
            <h2 className='text-3xl  m-2 p-2 '>Setting</h2>
            <div className='m-3 p-2 bg-base-200 rounded-box space-y-2 ' >
                <p className='text-2xl   p-2 rounded-box'>Website Theme</p>
                <ThemeSelector />
            </div>
            <div className='m-3 p-2 bg-base-200 rounded-box ' >
                <p className='text-2xl  '> Editor Theme</p>

                <div onClick={(e) => changeTheme(e.target.value)} className="grid grid-cols-2 gap-2 md:grid-cols-4  ">
                    {editorTheme.map((item, index) => (
                        <input
                            key={index}
                            type="radio"
                            id={item}
                            checked={theme === item}
                            name="theme-buttons "
                            className="btn btn-outline theme-controller "
                            aria-label={item}
                            value={item} />
                    ))}

                </div>
                <p className='text-2xl  '>Font Size</p>
                <div className="grid  grid-cols-2 gap-2 ">
                    <button onClick={textIncrease} className='btn btn-accent ml-2' >Increase</button>
                    <button onClick={textDecrease} className='btn btn-accent ml-2' >Decrease</button>
                </div>

                <p className='text-2xl ' >Preview</p>
                <div className='bg-base-100 rounded-box h-[40vh] py-2' >
                    <InputEditor theme={theme} defaultValue="Hello World" fontSize={fontSize} />
                </div>

            </div>
        </div>

    )
}

export default Setting