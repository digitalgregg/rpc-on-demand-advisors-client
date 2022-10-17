import { useAtom } from "jotai";
import Script from "next/script";
import React, { useEffect } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

function TestRoute() {
    const ref = React.useRef(null);

    useEffect(() => {
        const trustScript = document.createElement("script");
        trustScript.type = "text/javascript";
        trustScript.src =
            "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
        trustScript.async = true;
        document.head.appendChild(trustScript);
        trustScript.onload = function () {
            const myWindow: any = window;
            myWindow.Trustpilot.loadFromElement(ref.current, true);
        };
    }, []);

    return (
        <div>
            <div
                ref={ref}
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="XX"
                data-businessunit-id="XX"
                data-style-height="130px"
                data-style-width="100%"
                data-theme="light"
                data-stars="5"
                data-schema-type="Organization"
            >
                <a
                    href="https://www.trustpilot.com/review/example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    Trustpilot
                </a>
            </div>
        </div>
    );
}

export default TestRoute;
