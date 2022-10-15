/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

const UpgradePlan = ({ topic }: { topic: string }) => {
    const router = useRouter();
    return (
        <div className="py-10">
            <img
                src="/img/noPlan.svg"
                alt="No plan"
                className=" block w-[256px] h-[180px] md:w-[291px] md:h-[214px]  2xl:w-[480px] 2xl:h-[350px] mx-auto"
            />
            <p className="text-[18px] sm:text-[24px] mx-auto font-normal sm:font-semibold leading-[24.51px] sm:leading-[32.68px] text-center w-[331px] sm:w-[452px] mt-[40px]   2xl:font-bold">
                Please upgrade your plan now to get{" "}
                <span className="text-primary">{topic}</span> and
                <span className="text-primary"> more features!</span>
            </p>
            <div className="w-full text-center ">
                <button
                    onClick={() =>
                        router.push("/dashboard/billing/subscription-plan")
                    }
                    className="w-[200px] h-[48px] rounded-[4px] bg-[#E51937] text-white font-semibold text-[18px] cursor-pointer mt-[20px]"
                >
                    Upgrade Plan
                </button>
            </div>
        </div>
    );
};

export default UpgradePlan;
