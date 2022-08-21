import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MeetIcon, MeetCalander } from "../../../CustomIcons";
const subNev = [
    {
        titile: "Reschedule",
        url: "/dashboard/contactSupport/reschedule",
    },
    {
        titile: "Edit your details",
        url: "/dashboard/contactSupport/update-details",
    },
    {
        titile: "Cancel meeting",
        url: "/dashboard/contactSupport/cancel-meeting",
    },
];

const YourMeetingBooked = () => {
    const router = useRouter();

    return (
        <div className=" flex flex-col items-center w-full mt-[60px]">
            <h4 className=" text-center text-[32px] font-bold leading-[44px] text-[#000805]">
                Your Meeting Dave Shanley is booked!
            </h4>
            <div className=" flex flex-col my-[38px] gap-[38px] sm:flex-row items-center justify-center">
                <p className="  text-lg text-[#101010] font-bold leading-[25px]">
                    Monday, August 8
                </p>

                <p className=" text-lg text-[#101010] font-bold leading-[25px]">
                    8:00pm - 8:30pm + 06
                </p>
            </div>
            <hr />
            <a className=" hidden sm:block text-lg leading-[25px] font-semibold mb-[50px]">
                Zoom: https://zoom.us/j/ 1234 4565 4444
            </a>

            <ul className=" flex flex-col sm:flex-row flex-wrap gap-[15px] w-full sm:w-fit">
                {subNev.map((val: any, i) => (
                    <li className=" cursor-pointer w-full sm:w-fit" key={i}>
                        <Link href={val.url} className="w-full sm:w-fit">
                            <p
                                className={`${
                                    router.asPath === val.url
                                        ? "!bg-primary !font-bold border-primary text-White"
                                        : "border-primary text-primary"
                                }   py-2 px-[20px] border border-solid rounded hover:bg-primary hover:text-White hover:border-primary !w-full sm:w-fit text-center`}
                            >
                                {val.titile}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-[38px] py-[14px] px-[30px] rounded bg-[#101010] flex flex-row justify-center items-center gap-[10px] w-full sm:w-fit">
                <MeetIcon height={16} width={16} />
                <p className=" text-White text-sm leading-[19px] font-semibold">
                    Get instant calendaring for free
                </p>
                <MeetCalander height={16} width={16} />
            </div>
        </div>
    );
};

export default YourMeetingBooked;
