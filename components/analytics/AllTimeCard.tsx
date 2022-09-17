import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";
type AllTimeCardType = {
    hTitle: string;
    data: any;
    subTitleone: string;
    subTitletwo: string;
    color: string;
};

const AllTimeCard = ({
    hTitle,
    data,
    subTitleone,
    subTitletwo,
    color,
}: AllTimeCardType) => {
    return (
        <div className=" bg-White rounded p-[30px] flex flex-col gap-[30px]">
            <h1 className=" font-semibold text-lg leading-[25px] text-[#000805]">
                {hTitle}
            </h1>
            <div className=" w-full h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                            wrapperStyle={{
                                width: 100,
                                height: 100,
                            }}
                            itemStyle={{
                                color:"#fff"
                            }}
                            contentStyle={{
                                background: "#000",
                                backgroundColor: "#000",
                                border: "none",
                                color: "#fff",
                                borderRadius: "7px",
                                boxShadow: " 0px 4px 20px rgba(0,0,0,0.2)",
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke={color}
                            fill={color}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className=" flex flex-col justify-start gap-4">
                <p className=" font-semibold text-lg leading-[25px] text-[#000805]">
                    {subTitleone}
                </p>
                <div className="p-1 px-2 rounded bg-slate-200 flex justify-between w-full">
                    <span className=" font-normal text-[10px] leading-[14px] text-[#000805]">
                        none
                    </span>
                    <span className=" font-normal text-[10px] leading-[14px] text-[#000805]">
                        01
                    </span>
                </div>
            </div>
            <div className=" flex flex-col justify-start gap-4">
                <p className=" font-semibold text-lg leading-[25px] text-[#000805]">
                    {subTitletwo}
                </p>
                <div className="p-1 px-2 rounded bg-[#E51937] flex justify-between w-full">
                    <span className=" font-normal text-[10px] leading-[14px] text-White">
                        none
                    </span>
                    <span className=" font-normal text-[10px] leading-[14px] text-White">
                        01
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AllTimeCard;
