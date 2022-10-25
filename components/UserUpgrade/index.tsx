import React from "react";

function UserUpgrade() {
    return (
        <div className="fixed left-0 top-0 h-screen w-screen z-40 bg-white">
            <div className="py-10">
                <img
                    src="/img/noPlan.svg"
                    alt="No plan"
                    className=" block w-[256px] h-[180px] md:w-[291px] md:h-[214px]  2xl:w-[480px] 2xl:h-[350px] mx-auto"
                />
                <p className="text-[18px] sm:text-[24px] mx-auto font-normal sm:font-semibold leading-[24.51px] sm:leading-[32.68px] text-center mt-[40px]   2xl:font-bold">
                    Please{" "}
                    <span className="text-primary">tell your admin to </span>{" "}
                    upgrade plan <br /> now to
                    <span className="text-primary"> unlock all features!</span>
                </p>
            </div>
        </div>
    );
}

export default UserUpgrade;
