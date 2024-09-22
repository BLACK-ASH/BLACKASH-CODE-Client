import React from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';

const Output = ({ output, setDisplayOutput }) => {
    return (
        <div className="relative max-h-[85vh] bg-neutral overflow-auto rounded-box h-full font-mono px-2">
            {/* Navigation Bar with Close Button */}
            <nav className="flex justify-between bg-inherit sticky z-10 top-0 text-white font-mono py-2">
                <h3 className="font-bold text-3xl">Output</h3>
                <button className="btn btn-ghost" onClick={() => setDisplayOutput(false)}>
                    <RiCloseLargeFill />
                </button>
            </nav>

            {/* Output Section */}
            <div className="mockup-code p-1">
                {/* Standard output */}
                {output?.stdout ? (
                    output.stdout.split('\n').map((item, index) => (
                        <pre
                            data-prefix={index + 1}
                            key={index}
                            className="whitespace-pre-wrap break-words"
                        >
                            <code>{item}</code>
                        </pre>
                    ))
                ) : (
                    <p className="text-gray-400">No standard output</p>
                )}

                {/* Error output */}
                {output?.stderr ? (
                    output.stderr.split('\n').map((item, index) => (
                        <pre
                            data-prefix={index + 1}
                            key={index}
                            className="bg-warning text-red text-warning-content whitespace-pre-wrap break-words"
                        >
                            <code>{item}</code>
                        </pre>
                    ))
                ) : (
                    <p className="text-gray-400">No error output</p>
                )}
            </div>
        </div>
    );
};

export default Output;
