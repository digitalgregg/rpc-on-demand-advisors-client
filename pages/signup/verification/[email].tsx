/* eslint-disable @next/next/no-img-element */
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import api from "../../../api";
import LoadingAnimation from "../../../components/Shared/LoadingAnimation";
import { TimerState } from "../../../state";

function EmailVerification() {
    const router = useRouter();
    const { email } = router.query;

    const { data } = useQuery(
        ["check-user"],
        () => api.post("/api/user/check-verify", { email }),
        {
            select: (res) => res.data,
            enabled: !!email,
            retry: (failureCount, err: any) => {
                if (err.response.data === "User already verified") {
                    router.push("/signin");
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    return (
        <div>
            <div className="w-full ">
                <div className="w-full h-screen bg-[rgba(0,0,0,.5)]"></div>
                <img
                    src="/assets/resend-email.svg"
                    className="w-full h-screen fixed left-0 top-0 -z-[1]"
                    alt=""
                />
                <div className=" "></div>
                <div className="fixed bg-white top-1/2 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[642px]  -translate-y-1/2">
                    <div className="bg-[#101010] h-[52px] flex justify-center items-center">
                        <img
                            className="h-[20px]"
                            src="/assets/dashboard/logo-lg.svg"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-center mt-[40px] mb-[45px] sm:mt-[52px] sm:mb-[60px]">
                        <div className="text-center sm:w-[465px] w-[calc(100%-40px)]">
                            <div className="text-[24px] leading-[32.68px]  text-[#101010] ">
                                <span className="text-[#E51937] font-bold">
                                    {" "}
                                    Welcome!
                                </span>{" "}
                                <br /> Please check your email
                            </div>
                            <div className="pt-[36px]"></div>
                            <div className=" text-sm  sm:text-base leading-[21.79px] text-[#222222]">
                                A{" "}
                                <span className="font-bold">
                                    confirmation email
                                </span>{" "}
                                has been sent to your inbox please{" "}
                                <span className="font-bold">
                                    click the link in that email
                                </span>{" "}
                                to access your dashboard.
                            </div>
                            <div className="pt-[36px]"></div>

                            <div className="text-[13px] leading-[16.07px] sm:text-base sm:leading-[21.79px] text-[#222222]">
                                Didn’t recieve the message in your inbox?
                            </div>
                            <div className="pt-[16px]"></div>

                            <ConfirmationEmail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ConfirmationEmail = () => {
    const router = useRouter();
    const { email, auto } = router.query;

    const [loading, setLoading] = useState(false);

    const [timer, setTimer] = useAtom(TimerState);

    const initialTimer = (num?: number) => {
        setTimer(num || 60);
        let timerVar = num || 60;
        const interval = setInterval(() => {
            if (timerVar === 0) {
                setTimer(undefined);
                clearInterval(interval);
                return;
            }
            timerVar--;
            setTimer(timerVar);
            // setTimer(timer - 1);
        }, 1000);
    };

    useEffect(() => {
        if (timer && timer > 0) {
            initialTimer(timer);
        }
    }, []);

    const handleResendEmail = async () => {
        if (timer) return;
        try {
            setLoading(true);
            if (email) {
                await api.post("/api/user/resend-email", { email });
            }
            toast.success("Email sent successfully!");
            setLoading(false);
            initialTimer();
        } catch (err: any) {
            toast.error((err && err.message) || "something went wrong");
            setLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        if (!timer && auto) {
            if (email && !loading) {
                setLoading(true);
                console.log("HEllo world");
                api.post("/api/user/resend-email", { email })
                    .then((v) => {
                        console.log("Test Titst");
                        setLoading(false);
                        toast.success("Email sent successfully!");
                        initialTimer();
                    })
                    .catch((err) => {
                        setLoading(false);
                        console.log(err);
                    });
            }
        }
    }, [auto]);

    return (
        <button
            onClick={handleResendEmail}
            className="text-[14px] hover:bg-primary_dark leading-[19.07px] h-[43px] w-full bg-[#E51937] font-bold text-white"
        >
            {loading ? (
                <div className="flex items-center justify-center gap-[10px]">
                    <LoadingAnimation color="#fff" />
                    <div>Loading...</div>
                </div>
            ) : (
                <>
                    {timer ? (
                        <>Wait {timer} sec</>
                    ) : (
                        <>RE-SEND CONFIRMATION EMAIL</>
                    )}
                </>
            )}
        </button>
    );
};

export default EmailVerification;
