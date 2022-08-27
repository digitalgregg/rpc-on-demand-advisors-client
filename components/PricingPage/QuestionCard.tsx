/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { QuestionsDataType } from "./data";
import { motion } from "framer-motion";
import { useEffect } from "react";

const QuestionCard = ({ data }: { data: QuestionsDataType }) => {
    const [isExpand, setExpand] = useState(false);
    const handleExpand = () => {
        setExpand(!isExpand);
    };
    // useEffect(() => {
    //     setExpand(!isExpand);
    // }, [10000, isExpand]);
    return (
        <div
            className={`bg-[#fff] cursor-pointer border-[0.553333px] sm:border p-[11.07px] sm:p-5 sm:rounded-[10px] rounded-[5.53333px] ${
                isExpand ? "border-primary" : "border-[#D9D9D9] "
            }`}
            onClick={handleExpand}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
            >
                <img
                    src={`/assets/pricing-page/${
                        isExpand ? "remove" : "add"
                    }.svg`}
                    alt=""
                    className="sm:w-6 sm:h-6 "
                />
                <div className="text-[13.28px] sm:text-[24px] sm:leading-[32.68px] lg:text-[24px] lg:leading-[32.68px] font-semibold text-[#101010] leading-[18px] ml-[11.07px] sm:ml-5 md:text-lg md:leading-[24.5px] ">
                    {data.question}
                </div>
            </motion.div>
            {isExpand && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="pt-[11.07px] sm:pt-[20px] "></div>
                    <div className="text-[8.85px] leading-[12.06px] text-[#101010] ml-[24.34px] sm:leading-[21.79px] sm:text-base sm:ml-[44px]">
                        {data.answer}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default QuestionCard;
