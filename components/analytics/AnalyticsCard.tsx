import React from "react";
import ArrowDown from "../CustomIcons/ArrowDown";
import dynamic from "next/dynamic";

type AnalyticsCardType = {
    name: string;
    itemCount: number;
    data: any;
};

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
type ChartType = {
    options: ApexCharts.ApexOptions;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
};

const AnalyticsCard = () => {
    const newChart: ChartType = {
        options: {
            chart: {
                id: "basic-bar",
                sparkline: {
                    enabled: true,
                },
                toolbar: {
                    show: false,
                    autoSelected: undefined,
                },
            },
            stroke: {
                width: 1,
                curve: "straight",
            },
            grid: { show: false },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 90, 100],
                },
            },
            tooltip: { enabled: false },
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
                },
            },
            xaxis: {
                labels: {
                    show: false,
                },
                categories: [
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan",
                ],
            },
        },
        series: [
            {
                name: "series-1",
                data: [45, 52, 38, 45, 19, 23, 2].reverse(),
            },
        ],
    };

    return (
        <div className="  w-full max-h-[190px] rounded-[10px] bg-White p-[20px] xl:p-[27px]">
            <div className="flex justify-center flex-col items-center">
                <div className=" flex flex-col justify-center items-center gap-[5px]">
                    <h1 className="text-sm leading-[19.07px] text-[#2f2f2f] md:text-base md:leading-[21.79px] font-semibold">
                        Total share
                    </h1>
                    <span className="text-[24px] leading-[32.68px] p-0 m-0 text-[#2f2f2f] md:leading-[43.58px] md:text-[32px] font-bold">
                        10
                    </span>
                </div>
                <div className="pt-[10px]"></div>

                <div className=" flex flex-row justify-end items-end gap-[15px]">
                    <div className=" flex flex-row justify-end items-end gap-2">
                        <div className={`${!true && "rotate-[180deg]"}  mb-2 `}>
                            <ArrowDown color="#21b979" />
                        </div>
                        <span
                            className={`${
                                (true && "text-[#21b979]") || "#E51937"
                            }  text-sm leading-5 font-semibold m-0 p-0`}
                        >
                            {0.3}%
                        </span>
                    </div>
                    <div className="">
                        <Chart
                            options={newChart.options}
                            series={newChart.series}
                            type="area"
                            height={51}
                            width={130}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsCard;
