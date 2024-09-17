import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";
const Output = ({ output, setDisplayOutput }) => {
    return (
        <div className={` relative  h-full font-mono mockup-code px-2 `}   >
            <button className='btn btn-ghost btn-circle absolute top-1 right-1 ' onClick={() => setDisplayOutput(false)} >
                <RiCloseLargeFill /></button>
            <nav className='flex justify-between navbar sticky z-10 top-0 text-white  font-mono ' >
                <h3 className='font-bold text-3xl' >Output</h3>
            </nav>
            <div className='"h-[calc(100%-3rem)] overflow-auto p-2' >
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