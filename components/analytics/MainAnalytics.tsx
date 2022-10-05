import dynamic from "next/dynamic";
import React from "react";
import { ContentDataType } from "../../api-call/ContentApi";
import { GetAnalyticsContext } from "../Context/AnalyticsProvider";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
type ChartType = {
    options: ApexCharts.ApexOptions;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
};

type MainAnalyticsType = {
    chartData: any;
    name: string;
    color: string;
};

function MainAnalytics({ chartData, name, color }: MainAnalyticsType) {
    const chartValue: any[] = Object.values(chartData);
    const chartRow: any[] = Object.keys(chartData);

    const chartOptions: ChartType = {
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
            grid: {
                show: true,
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
                strokeColors: [color],
            },
            dataLabels: {
                enabled: false,
            },
            colors: [color],
            yaxis: {
                labels: {
                    show: false,
                },
            },

            xaxis: {
                axisBorder: {
                    show: true,
                },
                labels: {
                    show: true,
                },
                categories: ["", ...chartRow, ""],
            },
        },
        series: [
            {
                name: "Count",
                data: [0, ...chartValue, 0],
            },
        ],
    };

    const pieChartData: ChartType = {
        options: {
            labels: [...Object.keys(chartData)] || [0],
            dataLabels: {},
            plotOptions: {
                pie: {
                    donut: {
                        size: "50%",
                    },
                },
            },
        },
        series: ([...Object.values(chartData)] as any[]) || [],
    };

    return (
        <div>
            <div className=" bg-White rounded pt-[20px] pb-[10px] sm:pb-[15px] sm:pt-[30px] flex flex-col gap-[30px]">
                <div>
                    <h1 className="sm:px-[30px] mb-[5px] text-base leading-[21.75px] px-[20px] font-semibold sm:text-lg sm:leading-[25px] text-[#000805]">
                        Content By {name} ( All time)
                    </h1>
                    <div className="w-full sm:pr-[20px] sm:pl-[10px] pr-[10px] ">
                        <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type="area"
                            height={250}
                        />
                    </div>
                </div>
            </div>
            {Object.keys(chartData).length ? (
                <div className="bg-white  mt-[30px] md:mt-5 lg:mt-[30px] py-[20px] sm:py-[30px] flex flex-col">
                    <p className=" px-[30px] text-base leading-[21.75px] font-semibold sm:text-lg sm:leading-[25px] text-[#000805]">
                        {name} breakdown for all time
                    </p>
                    <div className="pt-5"></div>

                    <div className="flex justify-center">
                        <div className="sm:w-[85%]">
                            <Chart
                                options={pieChartData.options}
                                series={pieChartData.series}
                                type="donut"
                                height={250}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default MainAnalytics;
