import React from 'react'

const Output = ({ output, displayOutput, setDisplayOutput }) => {
    return (
        <div className={`bg-gray-700 absolute top-0 left-0 w-full h-full ${displayOutput ? 'block' : 'hidden'} z-20`}   >
            <nav className='flex justify-between navbar bg-gray-950 text-white p-2 font-mono ' >
                <h3 className='font-bold text-3xl' >Output</h3>
                <button className='btn btn-error' onClick={() => setDisplayOutput(false)} >X</button>
            </nav>
            <div className='font-mono mockup-code  p-2 overflow-auto ' >
                {output ? output.stdout.split('\n').map((item, index) => (
                    <pre data-prefix={index+1} key={index}><code>{item}</code></pre>
                )) : ''}
                {output.stderr ? output.stderr.split('\n').map((item, index) => (
                    <pre data-prefix={index+1} key={index} className="bg-warning text-red text-warning-content"><code>{item}</code></pre>
                )) : ''}
            </div>
        </div>
    )
}

export default Output