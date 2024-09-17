import React from 'react'
import AceEditor from "react-ace";

// Importing languages
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript"
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";

// Importing themes
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-monokai";

// Importing language tools
import "ace-builds/src-noconflict/ext-language_tools"; // Autocomplete feature

// Set worker path
import ace from "ace-builds/src-noconflict/ace";
ace.config.set("workerPath", "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/");

// importing snippets
import 'ace-builds/src-noconflict/snippets/python';
import 'ace-builds/src-noconflict/snippets/java';
import 'ace-builds/src-noconflict/snippets/c_cpp';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/snippets/typescript';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/snippets/css';

const InputEditor = ({ language, theme, defaultValue, fontSize, onChange }) => {
    return (
        <AceEditor
            className='rounded-box h-[calc(100% - 40px)] box-border mx-auto'
            style={{ width: '98%', height: '100%' }}
            mode={language}
            theme={theme}
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true, // You can turn snippets on
                showLineNumbers: true,
                tabSize: 2,
                wrap: true,
            }}
            fontSize={fontSize}
            value={defaultValue}
        />
    )
}

export default InputEditor