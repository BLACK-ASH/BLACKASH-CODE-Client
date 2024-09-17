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
  const [inputCode, setInputCode] = useState(defaultLanguage[language]); // Default value on init
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

  // To change theme
  const changeTheme = (e) => {
    setTheme(e);
    localStorage.setItem('Editortheme', e);
  };

  // To change language and update the default value
  const changeLanguage = (e) => {
    setLanguage(e);
    setInputCode(defaultLanguage[e]);
  };

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

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);
  return (
    <>
      <PlaygroundNavbar
        changeTheme={changeTheme}
        changeLanguage={changeLanguage}
        textIncrease={textIncrease}
        textDecrease={textDecrease}
        runCode={runCode}
      />
      <CodeEditor
        inputCode={inputCode}
        setInputCode={setInputCode}
        language={language} theme={theme}
        fontSize={fontSize}
        output={outputCode}
        setDisplayOutput={setDisplayOutput}
        displayOutput={displayOutput}
      />
    </>
  )
}

export default Playground