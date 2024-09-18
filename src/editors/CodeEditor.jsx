import React from 'react';
import InputEditor from './InputEditor';
import Output from './Output';

const CodeEditor = ({ 
    inputCode, 
    setInputCode, 
    language, 
    theme, 
    fontSize, 
    output, 
    setDisplayOutput, 
    displayOutput 
}) => {
    return (
        <div className="flex bg-neutral-content p-2 text-primary min-h-[calc(90vh-41px)]">
            {/* InputEditor Section - Always visible on large devices */}
            <div className={`flex-1 transition-all duration-300 ${displayOutput ? 'hidden lg:block' : 'block'}`}>
                <InputEditor
                    defaultValue={inputCode}
                    language={language}
                    theme={theme}
                    fontSize={fontSize}
                    onChange={setInputCode}
                />
            </div>
            
            {/* Output Section - Toggles visibility but InputEditor stays visible on large devices */}
            <div className={`flex-1  transition-all overflow-auto  duration-300 ${displayOutput ? 'block lg:w-[35%]' : 'hidden lg:w-[35%]'}`}>
                <Output
                    output={output}
                    setDisplayOutput={setDisplayOutput}
                />
            </div>
        </div>
    );
};

export default CodeEditor;
