import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "../../api";
import { useAtom } from "jotai";
import { signupState } from "./../../state/index";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signup = () => {
  const [signupData, setSignupData] = useAtom(signupState);
  const [error, setError] = useState("");
  const splitError = error.split(" ");
  const errorIndex = splitError[0];
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    setSignupData(data);
    setError("");
    api
      .post("https://oda-center.herokuapp.com/api/signup", data)
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message);
          setTimeout(() => {
            router.push("/");
          }, 4000);
        }
      })
      .catch((err) => {
        setError(err?.response.data.message);
      });
  };

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
  const label =
    "font-semibold text-[14px] leading-[19.07px] lg:text-[16px] lg:leading-[22px] text-[#101010]";
  const input =
    "w-[100%] h-[55px] text-[#6D6D6D] text-[14px] font-normal border border-[#E0E0E0] rounded mt-[10px] px-[20px] py-[18px] mb-[10px]";
  return (
    <div className="w-[100%] flex">
      <div className="w-[100%] xl:w-[50%] h-[1080px]">
        <div className="4xl:ml-[180px] 4xl:mr-[117px]  3xl:ml-[120px] 3xl:mr-[110px] 2xl:ml-[120px] 2xl:mr-[88px] xl:ml-[60px] xl:mr-[60px] lg:mr-[202px] lg:ml-[202px] md:mr-[100px] md:ml-[100px] sm:mr-[90px] sm:ml-[90px] xs:mr-[20px] xs:ml-[20px]">
          <img
            src="/img/logo.svg"
            alt="logo"
            className="w-[230px] xs:w-[198px] xs:mt-[19.93px] xs:mb-[59.97px] mt-[40px] mb-[105px] 3xl:mb-[145px]"
          />
          <h2 className="text-[24px] font-semibold leading-[32.68px] md:text-[18px] md:leading-[25px]">
            Hi There We’re happy to see you
          </h2>
          <p className="text-[14px] mt-[10px] mb-[30px] leading-[22px]">
            Sign up now with email
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className={label} htmlFor="name">
              Full name
            </label>
            <input
              {...register("name", { required: true })}
              className={input}
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
                border:
                  (errorIndex === '"Full Name"' && "1px solid red") ||
                  (errors.name && "1px solid red"),
              }}
            />
            <br />
            {errors.name && (
              <h3 className="text-[#E51937] mb-[10px] text-[12px]">
                Full name is required
              </h3>
            )}
            <label className={label} htmlFor="companyName">
              Company name
            </label>
            <input
              {...register("companyName", { required: true })}
              className={input}
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
                border:
                  (errorIndex === '"Company Name"' && "1px solid red") ||
                  (errors.companyName && "1px solid red"),
              }}
            />
            <br />
            {errors.companyName && (
              <h3 className="text-[#E51937] mb-[10px] text-[12px]">
                Company name is required
              </h3>
            )}
            <label className={label} htmlFor="email">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              className={input}
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
                border:
                  (errorIndex === '"Email"' && "1px solid red") ||
                  (errors.email && "1px solid red"),
              }}
            />
            <br />
            {errors.email && (
              <h3 className="text-[#E51937] mb-[10px] text-[12px]">
                Email is required
              </h3>
            )}
            <label className={label} htmlFor="password">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              className={input}
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
                marginBottom: "0px",
                border:
                  (errorIndex === '"Password"' && "1px solid red") ||
                  (errors.password && "1px solid red"),
              }}
            />
            <br />
            {errors.password && (
              <h3 className="text-[#E51937] mt-[10px] text-[12px]">
                Password is required
              </h3>
            )}
            <br />
            {error && <h3 className="text-[#E51937] text-[12px]">{error}</h3>}
            <input
              type="submit"
              className="w-[100%] h-[58px] bg-[#E51937] text-[#FFFFFF] rounded font-bold text-[16px] my-[30px]"
              style={{ boxShadow: "inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
            />
          </form>
          <h3 className="font-normal text-[14px] leading-[19.07px]">
            I already have an account {""}
            <Link href="/login">
              <span className="text-[#E51937] cursor-pointer">Log in.</span>
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
                  <div key={item.id} className="mb-[16px] last:mb-0 mx-auto">
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

export default Signup;
