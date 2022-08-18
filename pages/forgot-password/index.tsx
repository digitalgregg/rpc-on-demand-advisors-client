import React from "react";
import Link from "next/link";
import Image from "next/image";

const ForgotPassword = () => {
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
    "text-[#101010] font-semibold xs:text-[14px] xs:leading-[19.07px] lg:text-[16px] lg:leading-[21.79px]";
  const input =
    "w-[100%] text-[#6D6D6D] text-[14px] font-normal border border-[#E0E0E0] h-[55px] mb-[20px] my-[10px] px-[20px] py-[18px]";
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
            Forgot Password
          </h2>
          <p className="text-[14px] mt-[10px] mb-[30px] leading-[22px]">
            Enter your Email and we’ll send a link to reset your Password
          </p>
          <form action="">
            <label className={label} htmlFor="email">
              Email
            </label>
            <br />
            <input
              className={input}
              type="email"
              name="email"
              placeholder="Enter email"
              style={{ boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
            />
            <h3 className="font-normal text-[14px] leading-[19px] text-[#E51937] mb-[20px]">
              We can not find your account.
            </h3>
            <button
              className="w-[100%] h-[58px] bg-[#E51937] text-[#FFFFFF] rounded font-bold text-[16px] mb-[20px]"
              style={{ boxShadow: "inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
            >
              Submit
            </button>
          </form>
          <div className="flex items-center">
            <Image src="/icon/back-icon.svg" alt="logo" width={9} height={12} />
            <Link href="/login">
              <span className="text-[#000000] cursor-pointer font-normal text-[14px] leading-[19px] ml-[18.49px]">
                Back to Log In.
              </span>
            </Link>
          </div>
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
                  <div key={item} className="mb-[16px] last:mb-0 mx-auto">
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

export default ForgotPassword;