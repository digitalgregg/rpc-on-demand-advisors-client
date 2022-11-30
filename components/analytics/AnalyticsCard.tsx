import React from "react";
import ArrowDown from "../CustomIcons/ArrowDown";
import dynamic from "next/dynamic";
import { Whisper, Tooltip } from "rsuite";

type AnalyticsCardType = {
    name: string;
    value?: number | string;
    chartArr: any[];
    // data: any;
};

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
type ChartType = {
    options: ApexCharts.ApexOptions;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
};

const AnalyticsCard = ({ name, value, chartArr }: AnalyticsCardType) => {
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
            colors: isNegative(getPercentage(chartArr))
                ? ["#E51937"]
                : ["#21B979"],
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
            },
        },
        series: [
            {
                name: "series-1",
                data: chartArr || [],
            },
        ],
    };
    return (
        <div className="  w-full max-h-[190px] rounded-[10px] bg-White p-[20px] xl:p-[27px]">
            <div className="flex justify-center flex-col items-center">
                <div className=" flex flex-col justify-center items-center gap-[5px]">
                    <h1 className="text-sm leading-[19.07px] text-[#2f2f2f] md:text-base md:leading-[21.79px] font-semibold">
                        Total {name}
                    </h1>
                    <span className="text-[24px] leading-[32.68px] p-0 m-0 text-[#2f2f2f] md:leading-[43.58px] md:text-[32px] font-bold">
                        {value || 0}
                    </span>
                </div>
                <div className="pt-[10px]"></div>

                <div className=" flex flex-row justify-end items-end gap-[15px]">
                    <Whisper
                        placement="left"
                        trigger={"hover"}
                        speaker={tooltip}
                    >
                        <div className=" cursor-pointer flex flex-row justify-end items-end gap-2">
                            <div
                                className={`${
                                    isNegative(getPercentage(chartArr)) &&
                                    "rotate-[180deg]"
                                }  mb-2 `}
                            >
                                <ArrowDown
                                    color={
                                        isNegative(getPercentage(chartArr))
                                            ? "#E51937"
                                            : "#21B979"
                                    }
                                />
                            </div>
                            <span
                                className={`${
                                    isNegative(getPercentage(chartArr))
                                        ? "text-[#E51937]"
                                        : "text-[#21B979]"
                                }  text-sm leading-5 font-semibold m-0 p-0`}
                            >
                                {Math.abs(
                                    getPercentage(chartArr)
                                ).toLocaleString("automuds", {
                                    maximumFractionDigits: 1,
                                })}
                                %
                            </span>
                        </div>
                    </Whisper>

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

const tooltip = <Tooltip>From yesterday</Tooltip>;

const getPercentage = (dataArr: any[]) => {
    const today = dataArr[dataArr.length - 1];
    const prevDay = dataArr[dataArr.length - 2];
    if (!today && !prevDay) {
        return 0;
    } else if (!today) {
        return -100;
    } else if (!prevDay) {
        return 100;
    } else {
        const bigValue = today > prevDay ? today : prevDay;
        return ((today - prevDay) * 100) / bigValue;
    }
};

function isNegative(num: number) {
    return num >= 0 ? false : true;
}

export default AnalyticsCard;
