import React from 'react'

const Output = ({ output, displayOutput, setDisplayOutput }) => {
    return (
        <div className={`bg-gray-700 absolute top-0 left-0 w-full h-full ${displayOutput ? 'block' : 'hidden'} z-20`}   >
            <div className='flex justify-between text-yellow-200 bg-gray-950 p-2 font-mono ' >
                <h3 className='font-bold text-3xl' >Output</h3>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => setDisplayOutput(false)} >X</button>
            </div>
            <div className='font-mono w-full h-full p-2' >
                {output ? output.stdout.split('\n').map((item, index) => (
                    <p key={index}>{item}</p>
                )) : ''}
                {output ? output.stderr.split('\n').map((item, index) => (
                    <p className='text-red-500' key={index}>{item}</p>
                )) : ''}
            </div>
        </div>
    )
}

export default Output