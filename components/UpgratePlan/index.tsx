import React from "react";
import { useRouter } from "next/router";

const UpgratePlan = ({ topic }: any) => {
    const router = useRouter();
    return (
        <div>
            <img
                src="/img/noPlan.svg"
                alt="No plan"
                className="hidden sm:block w-[256px] h-[180px] md:w-[291px] md:h-[214px] xl:w-[480px] xl:h-[350px] mx-auto"
            />
            <p className="text-[18px] sm:text-[24px] mx-auto font-normal sm:font-semibold leading-[24.51px] sm:leading-[32.68px] text-center w-[331px] sm:w-[452px] mt-[40px] xl:text-[32px] xl:w-[599px] xl:mt-[60px] xl:leading-[43.58px] 2xl:font-bold">
                Please uprade your plan now to get{" "}
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

export default UpgratePlan;
