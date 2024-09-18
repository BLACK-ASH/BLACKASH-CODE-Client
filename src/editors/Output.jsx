import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";
const Output = ({ output, setDisplayOutput }) => {
    return (
        <div className={` relative max-h-[85vh] bg-neutral  overflow-auto rounded-box  h-full font-mono  px-2 `}   >
            <nav className='flex justify-between bg-inherit navbar sticky z-10 top-0 text-white  font-mono ' >
                <h3 className='font-bold text-3xl' >Output</h3>
                <button className='btn btn-ghost ' onClick={() => setDisplayOutput(false)} >
                <RiCloseLargeFill /></button>
            </nav>
            <div className='mockup-code p-2' >
                {output ? output.stdout.split('\n').map((item, index) => (
                    <pre data-prefix={index + 1} key={index}><code>{item}</code></pre>
                )) : ''}
                {output.stderr ? output.stderr.split('\n').map((item, index) => (
                    <pre data-prefix={index + 1} key={index} className="bg-warning text-red text-warning-content"><code>{item}</code></pre>
                )) : ''}
            </div>
        </div>
    )
}

export default Output