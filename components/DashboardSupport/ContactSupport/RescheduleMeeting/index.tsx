import Link from "next/link";
import React from "react";

const RescheduleMeeting = () => {
    return (
        <div className=" flex flex-col items-center w-full">
            <h4 className=" text-center text-[32px] font-normal leading-[44px] text-[#000805]">
                Your meeting has been canceled.
            </h4>
            <a className=" text-lg leading-[25px] font-semibold mt-[10px] mb-[50px] underline text-primary">
                Reschedule meeting
            </a>
            <Link href="/dashboard/support">
                <a className=" text-base leading-[22px] text-White font-semibold rounded py-[11px] px-[32px] bg-primary">
                    Update
                </a>
            </Link>
        </div>
    );
};

export default RescheduleMeeting;
