import React from "react";
import Editor, { OnChange } from "@monaco-editor/react";

type CodeEditorType = {
    isEditable?: boolean;
    onChange?: OnChange;
    value?: string;
    defaultValue?: string;
};

function CodeEditor({
    isEditable,
    defaultValue,
    onChange,
    value,
}: CodeEditorType) {
    return (
        <div className="border w-full h-[192px] bg-[white] border-[#9E9E9E] rounded-[4px] p-5 overflow-visible">
            <Editor
                defaultLanguage="html"
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                options={{
                    minimap: { enabled: false },
                    readOnly: isEditable,
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

CodeEditor.defaultProps = {
    isEditable: false,
};

export default CodeEditor;
