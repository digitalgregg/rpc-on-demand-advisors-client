import React from "react";
import Editor from "@monaco-editor/react";
import { useState } from "react";

function CodeEditor() {
    const [code, setCode] = useState();
    const handleEditor = (newValue: any, event: any) => {
        console.log(newValue);
        setCode(newValue);
    };

    return (
        <div className="border h-[192px] bg-[white] border-[#9E9E9E] rounded-[4px] p-5 overflow-visible">
            <Editor
                defaultLanguage="html"
                value={code}
                defaultValue="<h1>Please input code</h1>"
                onChange={handleEditor}
                options={{
                    minimap: { enabled: false },
                    readOnly: false,
                    folding: false,
                    lineDecorationsWidth: 0,
                    lineNumbersMinChars: 0,
                    wordWrap: "on",
                    bracketPairColorization: {
                        enabled: true,
                    },

                    roundedSelection: false,
                    occurrencesHighlight: false,
                    multiCursorMergeOverlapping: false,
                    overviewRulerBorder: false,
                    glyphMargin: false,
                    scrollBeyondLastLine: false,
                    autoClosingBrackets: "always",
                    scrollbar: { verticalScrollbarSize: 4 },
                    lineNumbers: "off",
                    selectionHighlight: false,
                }}
            />
        </div>
    );
}

export default CodeEditor;
