import { useAtom } from "jotai";
import React from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { TestLocalStorage } from "../../state";

function TestRoute() {
    const [testLocalStorage, setTest] = useAtom(TestLocalStorage);
    return (
        <DashboardLayout>
            <div>
                <div>Hello world</div>
                <button
                    onClick={() => setTest({ customer: "hello", id: "hi" })}
                >
                    Add Me
                </button>
                <button onClick={() => setTest({ customer: "Bye", id: "Bye" })}>
                    Update Me
                </button>
                <div>{JSON.stringify(testLocalStorage)}</div>
            </div>
        </DashboardLayout>
    );
}

export default TestRoute;
