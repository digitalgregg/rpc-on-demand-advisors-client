import dynamic from "next/dynamic";
import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ReactGA from "react-ga";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type ChartType = {
    options: ApexCharts.ApexOptions;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
};

function Analytics() {
    const chartData: ChartType = {
        options: {
            chart: {
                id: "basic-bar",
                toolbar: {
                    show: false,
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
                },
            },
            xaxis: {
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
                data: [45, 52, 38, 45, 19, 23, 2],
            },
        ],
    };

    const newChart: ChartType = {
        options: {
            chart: {
                id: "basic-bar",
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
                data: [45, 52, 38, 45, 19, 23, 2],
            },
        ],
    };

    const checkAnalyticsEvent = () => {
        ReactGA.event({
            category: "test",
            action: "test action",
            label: "test label",
            value: 20,
        });
    };

    return (
        <DashboardLayout>
            <div>
                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="area"
                    width={500}
                />
            </div>
            {/* <div>
                <Chart
                    options={newChart.options}
                    series={newChart.series}
                    type="area"
                    width={500}
                />
            </div> */}
            <div>
                <button
                    onClick={checkAnalyticsEvent}
                    className="w-[200px] hover:bg-primary_dark rounded h-[45px] text-lg font-medium text-white bg-primary"
                >
                    Click Me
                </button>
            </div>
        </DashboardLayout>
    );
}

export default Analytics;
