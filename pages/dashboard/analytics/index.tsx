import dynamic from "next/dynamic";
import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import FileViewer from "../../../components/Library/FileViewer";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function Analytics() {
    const state = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [
                    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
                ],
            },
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
        ],
    };

    return (
        <DashboardLayout>
            <div className="max-w-[500px] w-full h-[400px]">
                {/* <FileViewer src="/assets/audio/sample.mp3" /> */}
                {/* <FileViewer src="/assets\videos\test-video.mp4" /> */}
                {/* <FileViewer src="/demo/aaa.jpg" /> */}
                {/* <FileViewer src="https://filesamples.com/samples/document/doc/sample2.doc" /> */}
            </div>
            <div>
                {/* <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width={500}
                /> */}
            </div>
        </DashboardLayout>
    );
}

export default Analytics;
