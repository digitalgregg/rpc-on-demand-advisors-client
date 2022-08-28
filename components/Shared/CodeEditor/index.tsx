import React from "react";
import Editor, { OnChange, useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";

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
    const monaco = useMonaco();
    useEffect(() => {
        monaco?.editor.defineTheme("my-theme", {
            base: "vs",
            inherit: true,
            rules: [],
            colors: {
                "editor.background": "#00000000",
            },
        });
        return () => {};
    }, [monaco]);

    return (
        <Editor
            defaultLanguage="html"
            value={value}
            className="bg-[#F8F8F8]"
            defaultValue={defaultValue}
            onChange={onChange}
            theme="my-theme"
            options={{
                minimap: { enabled: false },
                readOnly: !isEditable,
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
    );
}

CodeEditor.defaultProps = {
    isEditable: false,
};

export default CodeEditor;
