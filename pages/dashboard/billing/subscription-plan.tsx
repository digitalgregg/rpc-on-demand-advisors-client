import React from "react";
import PricingLayout from "../../../components/Dashboard/PricingLayout";
import ToggleButton from "../../../components/Shared/ToggleButton";
import {
    pricingCardData,
    PricingCardType,
} from "../../../components/PricingPage/data";
import { useState } from "react";
import PricingCard from "../../../components/Shared/PricingCard";
import Meta from "../../../components/Meta";

function SubscriptionPlan() {
    const [isAnnual, setToggle] = useState<boolean>(false);
    return (
        <PricingLayout>
            <Meta title="Subscription Plan" />
            <div className="">
                <div className="">
                    <div className="pt-[50px]"></div>
                    <div>
                        <div className="flex justify-center items-center gap-[30px]">
                            <p className="text-sm font-bold leading-[19.07px] text-[#000]">
                                Monthly Plans
                            </p>
                            <ToggleButton
                                toggle={isAnnual}
                                handleToggle={() => setToggle(!isAnnual)}
                            />
                            <p className="text-sm font-bold leading-[19.07px] text-[#000]">
                                Annual Discount
                            </p>
                        </div>
                    </div>
                    <div className="pt-[50px]"></div>
                    <div
                        className={` flex flex-col gap-[30px] xl:flex-row 2xl:justify-center items-center ${
                            isAnnual && "lg:flex-row"
                        }`}
                    >
                        {pricingCardData.map(
                            (v, i) =>
                                ((isAnnual && i != 0) || !isAnnual) && (
                                    <PricingCard
                                        key={i}
                                        data={v}
                                        isAnnual={isAnnual}
                                        className={`shadow-[2px_2px_16px_rgba(0,0,0,0.08)] sm:!w-[400px] sm:!px-[70.5px] md:!w-[450px] md:!h-[802px] xl:!p-[20px_25px] ${
                                            isAnnual
                                                ? "lg:!p-[20px_43.6px] xl:!p-[20px_80px]"
                                                : " 2xl:!px-[35.5px] 3xl:!px-[66.9px]"
                                        }`}
                                        isSmallXl={true}
                                    />
                                )
                        )}
                    </div>
                    <div className="pt-[50px]"></div>
                    <div className="flex justify-center ">
                        <div
                            className={`text-center sm:w-[400px] ${
                                isAnnual && "lg:w-[580px]"
                            } xl:w-[580px] text-lg leading-[24.51px] text-[#676767]`}
                        >
                            Looking for more information? View all the details
                            here in our tour{" "}
                            <a className="text-primary">Have a question?</a>{" "}
                            Email us or schedule time with us.
                        </div>
                    </div>
                    <div className="pt-[50px]"></div>
                </div>
            </div>
        </PricingLayout>
    );
}

export default SubscriptionPlan;
