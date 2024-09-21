import React, { useEffect, useState } from 'react'
import InputEditor from '../editors/InputEditor';
import { RiCloseLargeFill } from "react-icons/ri";

const WebBuilder = () => {
  const [html, sethtml] = useState(localStorage.getItem('html')||"<h1 class='heading' >Hello World!</h1>");
  const [css, setcss] = useState(localStorage.getItem('css')||'.heading { color: red; }');
  const [js, setjs] = useState(localStorage.getItem('js')||'document.querySelector(".heading").style.backgroundColor = "blue";');
  const [srcCode, setSrcCode] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('Editortheme') || 'xcode');
  const [fontSize, setfontSize] = useState(parseInt(localStorage.getItem('fontSize')) || 14);
  const [displayOutput, setDisplayOutput] = useState(false);
  const [displatHTML, setDisplatHTML] = useState(true);
  const [displayCSS, setDisplayCSS] = useState(false);
  const [displayJS, setDisplayJS] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setSrcCode(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}</script>
        </body>
        </html>
        `);
        localStorage.setItem('html', html);
        localStorage.setItem('css', css);
        localStorage.setItem('js', js);
    }, 500);

  }, [html, css, js]);

  return (
    <div className='w-full min-h-screen' >
      <nav className='navbar bg-base-100' >
        <div className='navbar-start'>
          <h2 className='text-2xl font-bold text-secondary' >Web Builder</h2>
        </div>
        <div className='navbar-end'>
          <button onClick={() => setDisplayOutput(true)} className='btn btn-neutral font-mono font-bold'>Preview</button>
        </div>
      </nav>
      <div className='w-fit' >
        <ul className='menu menu-horizontal px-2 space-x-4 '>
          <li className='text-primary ' onClick={() => {
            setDisplatHTML(true);
            setDisplayCSS(false);
            setDisplayJS(false);
          }} >index.html</li>
          <li className='text-primary' onClick={()=>{
            setDisplatHTML(false);
            setDisplayCSS(true);
            setDisplayJS(false);
          }} >style.css</li>
          <li className='text-primary' onClick={()=>{
            setDisplatHTML(false);
            setDisplayCSS(false);
            setDisplayJS(true);
          }}>script.js</li>
        </ul>
      </div>

      <div className="flex bg-neutral-content p-2 text-primary min-h-[calc(90vh-41px)]">
        {/* InputEditor Section - Always visible on large devices */}
        <div className={`flex-1 transition-all duration-300 ${displayOutput ? 'hidden lg:block' : 'block'}`}>
          <div className={`h-full w-full ${displatHTML ? 'block' : 'hidden'}`}>
            <InputEditor
              defaultValue={html}
              onChange={sethtml}
              language={'html'}
              theme={theme}
              fontSize={fontSize}
            />
          </div>
          <div className={`h-full w-full ${displayCSS ? 'block' : 'hidden'}`}>
            <InputEditor
              defaultValue={css}
              onChange={setcss}
              language={'css'}
              theme={theme}
              fontSize={fontSize}
            />
          </div>
          <div className={`h-full w-full ${displayJS ? 'block' : 'hidden'}`}>
            <InputEditor
              defaultValue={js}
              onChange={setjs}
              language={'javascript'}
              theme={theme}
              fontSize={fontSize}
            />
          </div>
        </div>

        {/* Output Section - Toggles visibility but InputEditor stays visible on large devices */}
        <div className={`flex-1 bg-white transition-all overflow-auto  duration-300 ${displayOutput ? 'block lg:w-[35%]' : 'hidden lg:w-[35%]'}`}>
          <div className='w-full h-full ' >
            <div className="flex glass justify-between items-center bg-inherit navbar sticky z-10 top-0 text-white  font-mono ">
              <h1 className='text-3xl font-bold text-primary' >Preview</h1>
              <button className='btn btn-neutral ' onClick={() => setDisplayOutput(false)} > <RiCloseLargeFill /></button>
            </div>
            <iframe  srcDoc={srcCode} width="100%" height="100%" ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebBuilder