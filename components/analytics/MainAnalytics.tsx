import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
type ChartType = {
    options: ApexCharts.ApexOptions;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
};

function MainAnalytics() {
    const chartData: ChartType = {
        options: {
            chart: {
                id: "basic-bar",

                toolbar: {
                    show: false,
                    autoSelected: undefined,
                },
            },

            stroke: {
                width: 2,
            },

            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 90, 100],
                },
            },
            markers: {
                strokeWidth: 3,
                colors: ["#fff"],
                strokeColors: ["#E51937"],
            },
            dataLabels: {
                enabled: false,
            },

            yaxis: {
                labels: {
                    show: false,
                    offsetX: -15,
                },
            },
            grid: {
                padding: {
                    left: -0,
                },
            },

            xaxis: {
                axisBorder: {
                    show: true,
                },
                categories: ["1", "2", "3", "4", "5", "6", "7"],
            },
        },
        series: [
            {
                name: "series-1",
                data: [45, 52, 38, 45, 19, 23, 2],
            },
        ],
    };

    return (
        <div>
            <div className=" bg-White rounded py-[20px] sm:py-[30px] flex flex-col gap-[30px]">
                <div>
                    <h1 className="sm:px-[30px] px-[20px] font-semibold text-lg leading-[25px] text-[#000805]">
                        Content By Funnel Stage ( All time)
                    </h1>
                    <div className="sm:px-[24px] px-[14px] w-full h-[200px]">
                        <Chart
                            options={chartData.options}
                            series={chartData.series}
                            type="area"
                            height={220}
                        />
                    </div>
                </div>
                <div className="sm:px-[30px] px-[20px]  flex flex-col justify-start gap-4">
                    <p className=" font-semibold text-lg leading-[25px] text-[#000805]">
                        Funnel breakdown for this period
                    </p>
                    <div className="p-1 px-2 rounded bg-slate-200 flex justify-between w-full">
                        <span className=" font-normal text-[10px] leading-[14px] text-[#000805]">
                            None
                        </span>
                        <span className=" font-normal text-[10px] leading-[14px] text-[#000805]">
                            01
                        </span>
                    </div>
                </div>
                <div className="sm:px-[30px] px-[20px]  flex flex-col justify-start gap-4">
                    <p className=" font-semibold text-lg leading-[25px] text-[#000805]">
                        Funnel breakdown for all time
                    </p>
                    <div className="p-1 px-2 rounded bg-[#E51937] flex justify-between w-full">
                        <span className=" font-normal text-[10px] leading-[14px] text-White">
                            None
                        </span>
                        <span className=" font-normal text-[10px] leading-[14px] text-White">
                            01
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainAnalytics;
