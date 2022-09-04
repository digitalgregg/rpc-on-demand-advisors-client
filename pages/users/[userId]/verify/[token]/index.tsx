import { useRouter } from "next/router";
import React from "react";
import api from "./../../../../../api/index";
import { toast } from "react-toastify";
import { useAtom } from "jotai";
import { team_state } from "../../../../../state";

const Index = () => {
    const router = useRouter();
    const path = router.asPath.split("/");
    const id = path[2];
    const token = path[4];
    const [_, setTeamObj] = useAtom(team_state);

    const handleClick = () => {
        api.get(
            `https://oda-center.herokuapp.com/api/signup/${id}/verify/${token}`
        )
            .then((res) => {
                if (res.status === 200) {
                    api.get(
                        `https://oda-center.herokuapp.com/api/team/user/${id}`
                    )
                        .then((result) => {
                            if (result.status === 200) {
                                setTeamObj(resultToObj(result.data));
                            }
                            toast.success(res.data.message);
                            setTimeout(() => {
                                router.push("/signin");
                            }, 4000);
                        })
                        .catch((err) => {
                            console.log(err?.response.data.message);
                        });
                }
            })
            .catch((err) => {
                console.log(err?.response.data.message);
            });
    };

    function resultToObj(result: any) {
        return {
            name: result.user_id.name,
            email: result.user_id.email,
            company_name: result.team_id.company_name,
            id: result.team_id._id,
            user_id: result.user_id._id,
        };
    }

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
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
