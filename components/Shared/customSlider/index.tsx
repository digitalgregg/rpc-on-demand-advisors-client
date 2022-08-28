import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


const CustomSlider = ({ children, ...props }: any) => {
    const [current, setCarrent] = useState(0);
    const [active, setActive] = useState(false);
    const [currentLength, setCurrentLength] = useState(false);
    const timeout = useRef(null);
    const length = props.Slideslength.length;
    const lastLangth = length - 1;


    useEffect(() => {
        props.count(current);
        if (current > 0) setActive(true);
        if (current === 0) setActive(false);
        if (current < lastLangth) setCurrentLength(true);
        if (current === lastLangth) setCurrentLength(false);
        // console.log(current);
    }, [current]);

    // useEffect(() => {
    //   const nextSlide = () => {
    //     setCarrent((current) => (current === length - 1 ? 0 : current + 1));
    //   };
    //   timeout.current = setTimeout(nextSlide, 3000);

    //   return () => {
    //     if (timeout.current) {
    //       clearTimeout(timeout.current);
    //     }
    //   };
    // }, [current, length]);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        if (current < lastLangth)
            setCarrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        if (current > 0) setCarrent(current === 0 ? length - 1 : current - 1);
    };
    return (
        <div className=" w-full">
            <div>{children}</div>
            <div className=" pt-[30px] flex flex-row justify-between items-center gap-3">
                {/* <Button  icon="next" /> */}
                <button
                    onClick={prevSlide}
                    className={`${
                        active === true ? "bg-primary" : "bg-[#999]"
                    } p-[8px] rounded-full w-[30px] h-[30px] flex justify-center items-center `}
                >
                    <div className=" max-w-[50px] !h-[22px]" >
                        <Image width={512} height={512} src="/assets/DashboardSupport/arrowWhite.png" alt="arrow-icon" />
                    </div>
                </button>
                <p className=" text-[12px] font-bold text-primary">
                    {props.label}
                </p>
                <button
                    onClick={nextSlide}
                    className={`${
                        currentLength === true ? "bg-primary" : "bg-[#999]"
                    } p-[8px] rounded-full w-[30px] h-[30px] flex justify-center items-center `}
                >
                     <div className=" max-w-[50px] !h-[22px] transform rotate-180" >
                        <Image width={512} height={512} src="/assets/DashboardSupport/arrowWhite.png" alt="arrow-icon" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default CustomSlider;
