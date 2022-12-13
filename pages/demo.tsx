import React from "react";
import Layout from "../components/Shared/Layout/Layout";
import { pdfToPng } from "../utils/GenerateThumbnail";

const demo = () => {
    const handleClick = async () => {
        const pdfUrl =
            "https://rpc-s3-upload.s3.ap-south-1.amazonaws.com/16709168562481670869796650ODA%20Buyer%20Intelligence%20Program.pdf";
        const image = await pdfToPng(pdfUrl);
        console.log(image);
    };
    return (
        <Layout>
            <h1 className="upload-button:bg-red">demo</h1>
            <button onClick={handleClick}>Click Now</button>
        </Layout>
    );
};

export default demo;
