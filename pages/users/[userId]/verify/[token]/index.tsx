/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import api from "./../../../../../api/index";
import { toast } from "react-toastify";
import LodingAnimation from "../../../../../components/Shared/LodingAnimation";
import { useState } from "react";

const Index = () => {
    const router = useRouter();
    const path = router.asPath.split("/");
    const [buttonLoading, setButtonLoading] = useState(false);
    const id = path[2];
    const token = path[4];

    const handleClick = () => {
        setButtonLoading(true);
        api.get(`/api/signup/${id}/verify/${token}`)
            .then((res) => {
                if (res.status === 200) {
                    toast.success(res.data.message);
                    setButtonLoading(false);
                    setTimeout(() => {
                        router.push("/signin");
                    }, 100);
                }
            })
            .catch((err) => {
                console.log(err);
                setButtonLoading(false);
                toast.error(err?.response.data.message);
            });
    };

    return (
        <div className="success-bg bg-[#FFFFFF]">
            <div className="w-[100%] xs:flex xs:justify-center xs:pt-[53.93px] sm:pl-[40px] sm:pt-[20px] xl:justify-start 3xl:pl-[180px] 3xl:pt-[60px]">
                <img
                    src="/img/logo.svg"
                    alt=""
                    className="xl:w-[230px] xs:w-[198px]"
                />
            </div>
            <div className="w-[100%] h-[100vh] flex justify-center items-center relative px-[4px]">
                <div className="w-[639px] mx-auto text-center">
                    <img
                        src="/img/mail.svg"
                        alt="main icon"
                        className="w-[186px] h-[200px] mx-auto"
                    />
                    <h3 className="font-bold text-center text-[#1D1D1D] lg:text-[50px] lg:leading-[60px] 3xl:text-[60px] 3xl:leading-[70px] xs:text-[24px] xs:leading-[32.68px] mt-[30px]">
                        Please verify your email!
                    </h3>
                    <button
                        className="w-[153px] h-[45px] rounded-[4px] bg-primary transition duration-700 hover:bg-[#890F21] border-primary hover:border-[#890F21] text-[16px] text-[white] mt-[40px]"
                        onClick={handleClick}
                    >
                        {buttonLoading ? (
                            <span className="flex items-center gap-[10px] justify-center">
                                <div>
                                    <LodingAnimation color="white" />
                                </div>
                                <div>Loading...</div>
                            </span>
                        ) : (
                            "Verify"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
