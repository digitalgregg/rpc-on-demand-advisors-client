/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import api from "../../api";
import { toast } from "react-toastify";
import { setLocal } from "../../utils/localStorage";
import { useAtom } from "jotai";
import LodingAnimation from "../../components/Shared/LodingAnimation";
import { PaymentMethod, signupState, team_state } from "../../state";
import Meta from "../../components/Meta";

const items = [
    {
        id: 0,
        title: "Get the most from your content",
    },
    {
        id: 1,
        title: "Get started today",
    },
    {
        id: 2,
        title: "No contracts",
    },
    {
        id: 3,
        title: "No set up fee",
    },
    {
        id: 4,
        title: "Free trial",
    },
];

const Signin = () => {
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);
    const [error, setError] = useState("");
    const [buttonLoading, setButtonLoading] = useState(false);
    const splitError = error.split(" ");
    const errorIndex = splitError[0];

    const [_1, setTeamObj] = useAtom(team_state);
    const [_2, setSignupData] = useAtom(signupState);
    const [paymentMethod, setPaymentMethod] = useAtom(PaymentMethod);
    const [remember, setRemember] = useState(true);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const router = useRouter();

    const onSubmit = async (signinData: any) => {
        setButtonLoading(true);
        setError("");

        try {
            const loginResponse = await api.post("/api/signin", signinData);

            const userResponse = await api.get(
                `/api/user/?email=${signinData.email}`
            );

            const user_id = userResponse.data._id;
            const teamResponse = await api.get(`/api/team/user/${user_id}`);

            // save token to localstorage
            const token = loginResponse.data.data;
            setLocal("token", token);
            // save user data to localstorage
            const userData = userResponse.data;
            const userInfo = {
                _id: userData._id,
                name: userData.name,
                email: userData.email,
                companyName: userData.companyName,
            };
            setLocal("user", userInfo);
            setSignupData(userInfo);
            // save team data to localstorage
            const teamObj = resultToObj(teamResponse.data);
            setTeamObj(teamObj);

            // payment method
            const resCustomer = await api.get(
                `/api/payment/customer/${user_id}`
            );
            console.log(resCustomer);
            if (resCustomer.data) {
                setPaymentMethod(resCustomer.data);
            }
            setLocal("remember", remember);
            if (!remember) {
                document.cookie = "remember=false; SameSite=None; Secure";
            }
            setButtonLoading(false);
            toast.success("User signin successfully");
            setTimeout(() => {
                router.push("/dashboard/contents");
            }, 1000);
        } catch (err: any) {
            if (err.response) {
                if (
                    err.response.data.message ===
                    "An Email sent to your account please check your email"
                ) {
                    router.push(
                        "/signup/verification/" +
                            signinData.email +
                            "?auto=true"
                    );
                }
                setError(err?.response?.data?.message);
            }
            setButtonLoading(false);
            console.log(err);
        }
    };

    function resultToObj(result: any) {
        return {
            name: result.team_id.team_name,
            email: result.user_id.email,
            company_name: result.team_id.company_name,
            id: result.team_id._id,
            user_id: result.user_id._id,
            team_name: result.team_id.team_name,
            role: result.role,
            customer: "",
        };
    }

    const label =
        "text-[#101010] font-semibold xs:text-[14px] xs:leading-[19.07px] lg:text-[16px] lg:leading-[21.79px]";
    const input =
        "w-[100%] text-[#6D6D6D] bg-[#FFFFFF] focus:outline-none text-[14px] font-normal border border-[#E0E0E0] h-[55px] mb-[10px] mt-[10px] px-[20px] py-[18px]";
    return (
        <div className="w-[100%] flex bg-[#FFFFFF]">
            <Meta title="Login" />
            <div className="w-[100%] xl:w-[50%] xl:h-[1080px]">
                <div className="4xl:ml-[180px] 4xl:mr-[117px]  3xl:ml-[120px] 3xl:mr-[110px] 2xl:ml-[120px] 2xl:mr-[88px] xl:ml-[60px] xl:mr-[60px] lg:mr-[202px] lg:ml-[202px] md:mr-[100px] md:ml-[100px] sm:mr-[90px] sm:ml-[90px] xs:mr-[20px] xs:ml-[20px]">
                    <Link href="/">
                        <img
                            src="/img/logo.svg"
                            alt="logo"
                            className="sm:w-[230px] xs:w-[198px] xs:mt-[19.93px] xs:mb-[59.97px] sm:mt-[40px] sm:mb-[105px] 3xl:mb-[145px] cursor-pointer"
                        />
                    </Link>
                    <h2 className="text-[24px] font-semibold leading-[32.68px] md:text-[18px] md:leading-[25px] text-[#101010]">
                        Hi There Access your account here
                    </h2>
                    <p className="text-[14px] mt-[10px] mb-[30px] leading-[22px] text-[#101010]">
                        Log in now with email
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={label} htmlFor="email">
                            Email
                        </label>
                        <input
                            {...register("email", { required: true })}
                            className={input}
                            style={{
                                boxShadow:
                                    " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
                                border:
                                    (errorIndex === '"Email"' &&
                                        "1px solid #E51937") ||
                                    (errors.email && "1px solid #E51937"),
                            }}
                        />
                        {errors.email && (
                            <h3 className="text-primary mb-[10px] text-[12px]">
                                Email is required
                            </h3>
                        )}
                        <label className={label} htmlFor="password">
                            Password
                        </label>
                        <div
                            className={`${input} flex justify-between w-[100%]`}
                            style={{
                                boxShadow:
                                    " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
                                marginBottom: "0px",
                                border:
                                    (errorIndex === '"Password"' &&
                                        "1px solid #E51937") ||
                                    (errors.password && "1px solid #E51937"),
                            }}
                        >
                            <input
                                {...register("password", { required: true })}
                                type={isHiddenPassword ? "password" : "text"}
                                className="bg-transparent border-none outline-none sm:w-[94%] xs:w-[90%]"
                            />
                            <img
                                onClick={() =>
                                    setIsHiddenPassword(!isHiddenPassword)
                                }
                                src={`/img/${
                                    isHiddenPassword
                                        ? "invisible.svg"
                                        : "visible.svg"
                                }`}
                                alt="icon"
                                className="cursor-pointer w-[16px] h-[16px] ml-[10px]"
                            />
                        </div>
                        {errors.password && (
                            <h3 className="text-primary mt-[10px] text-[12px]">
                                Password is required
                            </h3>
                        )}
                        {error && (
                            <h3 className="text-primary text-[12px] mt-[10px]">
                                {error}
                            </h3>
                        )}

                        <div className="mt-[15px] mb-[20px] flex justify-between items-center">
                            <RememberCheckbox
                                remember={remember}
                                setRemember={setRemember}
                            />
                            <Link href="/forgot-password ">
                                <h3 className="text-[#E51937] font-normal text-[14px] leading-[19px] cursor-pointer">
                                    Forgot Password?
                                </h3>
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="w-[100%] h-[58px] bg-primary hover:bg-[#890F21] border-primary hover:border-[#890F21] hover:text-[#FFFFFF] transition duration-700 text-[#FFFFFF] rounded-[4px] font-bold text-[16px] mb-[30px]"
                            style={{
                                boxShadow:
                                    "inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
                            }}
                        >
                            {buttonLoading ? (
                                <span className="flex items-center gap-[10px] justify-center">
                                    <LodingAnimation color="white" />
                                </span>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </form>
                    <h3 className="font-normal text-[14px] leading-[19.07px] text-[#101010]">
                        No account yet? {""}
                        <Link href="/signup">
                            <span className="cursor-pointer text-primary">
                                Sign up now.
                            </span>
                        </Link>
                    </h3>
                </div>
            </div>
            {/* second section   */}
            <div className="w-[50%] h-[1080px] bg-[#191919] hidden xl:flex">
                <div className="w-[100%]">
                    <div className="4xl:mr-[180px] 4xl:ml-[140px] 3xl:ml-[80px] 3xl:mr-[120px] 2xl:ml-[35px] 2xl:mr-[120px] xl:px-[60px]">
                        <img
                            src="/img/signupThumb.png"
                            alt="signup thumnail"
                            className="xl:w-[480px] 2xl:w-[565px] 3xl:w-[640px] h-[390px] mt-[180px] mx-auto"
                        />
                        <div className="xl:mt-[40px] 4xl:mt-[73px] 3xl:w-[640px] 2xl:w-[565px] xl:w-[480px] mx-auto">
                            <ul className="text-[#FFFFFF] text-[24px] font-semibold">
                                {items.map((item: any) => (
                                    <div
                                        key={item.id}
                                        className="mb-[16px] last:mb-0 mx-auto"
                                    >
                                        <li className="flex gap-[10px] leading-[32.68px]">
                                            <span>
                                                <img
                                                    src="/img/check-mark.svg"
                                                    alt="circle checked"
                                                    className="w-[30px] h-[30px]"
                                                />
                                            </span>
                                            <span>{item.title}</span>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;

type RCTYPE = {
    remember: boolean;
    setRemember: React.Dispatch<React.SetStateAction<boolean>>;
};
const RememberCheckbox = ({ remember, setRemember }: RCTYPE) => {
    console.log(remember);
    return (
        <div
            onClick={() => setRemember(!remember)}
            className="flex items-center gap-[10px] cursor-pointer"
        >
            <div
                className={`w-[14px] h-[14px] border rounded-sm border-[#333] flex justify-center items-center ${
                    remember && "!border-primary bg-primary"
                }`}
            >
                {remember && <div className="text-[10px] text-white">✓</div>}
            </div>
            <div className="text-[#333] text-sm">Remember me</div>
        </div>
    );
};
