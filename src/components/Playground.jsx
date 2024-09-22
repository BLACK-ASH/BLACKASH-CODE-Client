import React from 'react'
import CodeEditor from '../editors/CodeEditor';
import PlaygroundNavbar from '../components/PlaygroundNavbar';
import { useState, useEffect } from 'react';
import instance from '../axios/instance';
import { infoLanguage, defaultLanguage } from '../editors/content';

const Playground = () => {
  const [language, setLanguage] = useState("python");
  const [theme, setTheme] = useState(localStorage.getItem('Editortheme') || 'xcode');
  const [fontSize, setfontSize] = useState(parseInt(localStorage.getItem('fontSize')) || 14);
  const [inputCode, setInputCode] = useState(localStorage.getItem("PlaygroundCode") || defaultLanguage[language]); // Default value on init
  const [outputCode, setOutputCode] = useState('');
  const [displayOutput, setDisplayOutput] = useState(false);

  // Function to run code
  const runCode = () => {
    instance.post('/execute', {
      language: language,
      version: infoLanguage[language],
      files: [
        {
          content: inputCode,
        },
      ],
    })
      .then((response) => {
        setOutputCode(response.data.run);
        console.log(outputCode);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setDisplayOutput(true);
      });
  };
  // To change language and update the default value
  const changeLanguage = (e) => {
    setLanguage(e);
    setInputCode(defaultLanguage[e]);
  };

  // To Store Code in Local Storage
  useEffect(() => {
   const timer = setTimeout(() => {
      localStorage.setItem("PlaygroundCode", inputCode);
    }, 500);
    return () => clearTimeout(timer);

  }, [inputCode]);


  return (
    <>
      <PlaygroundNavbar
        changeLanguage={changeLanguage}
        runCode={runCode}
        language={language}
      />
      <CodeEditor
        inputCode={inputCode}
        setInputCode={setInputCode}
        language={language}
        theme={theme}
        fontSize={fontSize}
        output={outputCode}
        setDisplayOutput={setDisplayOutput}
        displayOutput={displayOutput}
      />
    </>
  )
}

export default Playground