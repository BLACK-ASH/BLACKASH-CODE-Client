import React, { useState } from 'react'
import instance from '../axios/instance';
import InputEditor from './InputEditor';
import Dropmenu from '../components/Dropmenu';
import { infoLanguage } from './content';
import Output from './Output';
const CodeEditor = () => {
    const [language, setLanguage] = useState('python');
    const [theme, setTheme] = useState('xcode');
    const [fontSize, setfontSize] = useState(14);
    const [inputCode, setInputCode] = useState("print('Hello World!')")
    const [outputCode, setOutputCode] = useState('')
    const [displayOutput, setDisplayOutput] = useState(false)
    const runCode = () => {
        instance.post('/execute', {
            language: language,
            version: infoLanguage[language],
            files: [
                {
                    content: inputCode
                },
            ],
        }).then((response) => {
            console.log(response.data)
            setOutputCode(response.data.run)
        }).catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setDisplayOutput(true)
        })
    }

    return (
        <>
            <div className='flex' >
                <Dropmenu items={Object.keys(infoLanguage)} value={language} changeValue={setLanguage} />
                <Dropmenu items={['xcode', 'solarized_light', 'dracula', 'monokai']} value={theme} changeValue={setTheme} />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={runCode}>Run</button>
            </div>
            <InputEditor language={language} theme={theme} fontSize={fontSize} onChange={setInputCode} />
            <Output output={outputCode} displayOutput={displayOutput} setDisplayOutput={setDisplayOutput} />
        </>
    )
}

export default CodeEditor