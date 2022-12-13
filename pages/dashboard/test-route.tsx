import { useAtom } from "jotai";
import Script from "next/script";
import React, { useEffect } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { pdfToPng } from "../../utils/GenerateThumbnail";

function TestRoute() {
    const handleClick = async () => {
        const pdfUrl = "/test.pdf";
        const image = await pdfToPng(pdfUrl);
        console.log(image);
    };

    return (
        <DashboardLayout>
            <button onClick={handleClick}>Click Me</button>
        </DashboardLayout>
    );
}

export default TestRoute;
