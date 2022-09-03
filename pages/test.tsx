import React, { useState, useRef, useEffect } from "react";
import LodingAnimation from "../components/Shared/LodingAnimation";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

type DataType = {
    title: number;
};

const Test = () => {
    const datas = {
        labels: ["jan", "feb", "mar", "apr", "may"],
        datasets: [
            {
                label: "sales for 2019 (m)",
                data: [1, 2, 3, 4, 5, 6, 7],
                borderColor: ["rgba(255,206,86,0.2)"],
                backgroundColor: ["rgba(255,206,86,0.2)"],
                pointBackgroundColor: ["rgba(255,206,86,0.2)"],
                pointBorderColor: ["rgba(255,206,86,0.2)"],
            },
        ],
    };
    const option = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Chart.js Line Chart",
            },
            scales: {
                xAxes: [
                    {
                        ticks: { display: false },
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: { display: false },
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                ],
            },
        },
    };
    return (
        <div className="min-h-screen flex justify-center items-center w-full bg-slate-900">
            <div className=" w-[500px]">
                <Line data={datas} itemType="area" options={option} />
            </div>

            <LodingAnimation height="100px" width="100px" color="#E51937" />
        </div>
    );
};
export default Test;
