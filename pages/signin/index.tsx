import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signin = () => {
  const labelStyle =
    "text-[#101010] font-semibold xs:text-[14px] xs:leading-[19.07px] lg:text-[16px] lg:leading-[21.79px] 4xl:text-[16px] 4xl:leading-[21.79px]";
  const inputStyle =
    "text-[#6D6D6D] text-[14px] font-normal border border-[#E0E0E0] xs:w-[335px] sm:w-[500px] md:w-[568px] lg:w-[620px] xl:w-[480px] 2xl:w-[513px] 3xl:w-[610px] 4xl:w-[663px] h-[55px] mb-[20px] mt-[10px] px-[20px] py-[18px]";
  const listItemStyle = "flex xl:mb-[16px] xl:last:mb-0";
  const listTitleStyle =
    "ml-[10px] font-semibold text-[24px] leading-[32.68px]";
  return (
    <div className="xl:flex xl:flex-row">
      <div className="w-[100%] flex justify-center xs:mt-[20px] xs:px-[20px] xs:mb-[287px] sm:mt-[40px] sm:px-[90px] sm:mb-[362px] md:px-[100px] md:mb-[362px] lg:px-[202px] lg:mb-[345px] xl:px-[60px] xl:mb-[345px] 2xl:pl-[120px] 2xl:pr-[88px] 2xl:mb-[366px] 3xl:mb-[345px] 3xl:pl-[120px] 3xl:pr-[110px] 4xl:pl-[180px] 4xl:pr-[117px]">
        <div className=" xs:w-[335px] sm:w-[500px] md:w-[568px] lg:w-[620px] xl:w-[480px] 2xl:w-[513px] 3xl:w-[610px] 4xl:w-[663px]">
          <div className="xs:w-[198px] sm:w-[192px] md:w-[230px] xs:mb-[60px] sm:mb-[230.78px] md:mb-[225px]">
            <Image src="/img/logo.svg" alt="logo" width={230} height={35} />
          </div>
          <h2 className="font-semibold lg:text-[24px] lg:leading-[32.68px] mb-[10px]">
            Hi There Access your account here
          </h2>
          <h3 className="font-normal text-[14px] leading-[19.07px] mb-[30px]">
            Log in now with email
          </h3>
          <form>
            <label className={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              className={inputStyle}
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
              }}
            />
            <label className={labelStyle}>Password</label>
            <input
              type="password"
              name="password"
              className={inputStyle}
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
                marginBottom: "0px",
              }}
            />
            <h3 className="text-[#E51937] float-right font-normal text-[14px] leading-[19.07px] mt-[10px] mb-[20px]">
              <Link href="forgot-password">Forgot password?</Link>
            </h3>
            <button
              className="xs:w-[335px] sm:w-[500px] md:w-[568px] xl:w-[480px] lg:w-[620px] 2xl:w-[513px] 3xl:w-[610px] 4xl:w-[663px] h-[58px] bg-[#E51937] text-[#FFFFFF] rounded font-bold text-[16px]"
              style={{ boxShadow: "inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
            >
              Sign in
            </button>
          </form>
          <h3 className="font-normal text-[14px] leading-[19.07px] mt-[20px]">
            No account yet? {""}
            <Link href="/signup">
              <span className="text-[#E51937] cursor-pointer">
                Sign up now.
              </span>
            </Link>
          </h3>
        </div>
      </div>
      <div className="w-[100%] top-0 right-0 bg-[#191919] hidden xl:flex xl:items-center justify-center">
        <div className="xl:w-[600px] 2xl:w-[720px] 3xl:w-[840px] 4xl:w-[960px] xl:px-[60px] xl:pb-[299.09px] xl:pt-[180px] 2xl:pl-[35px] 2xl:pr-[121px] 2xl:pt-[180px] 2xl:pb-[262px] 3xl:pl-[80px] 3x:pr-[120px] 3xl:pb-[221px] 3xl:pt-[180px] 4xl:pl-[140px] 4xl:pt-[180px] 4xl:pr-[180px] 4xl:pb-[208px]">
          <img
            src="/img/signup-demo.svg"
            alt="signup thumbnail"
            className="xl:w-[480px] 2xl:w-[564px] 3xl:w-[640px] 4xl:w-[640px] h-[390px]"
          />
          <div className="xl:w-[480px] 2xl:w-[409px] 3xl:w-[640px] 4xl:w-[610px] h-[229px] xl:mt-[40px] 2xl:mt-[40px] 3xl:mt-[40px] 4xl:mt-[73px] text-white">
            <div className={listItemStyle}>
              <Image
                src="/img/check-mark.svg"
                alt="check mark"
                width={24}
                height={25}
              />
              <h3 className={listTitleStyle}>Get the most from your content</h3>
            </div>
            <div className={listItemStyle}>
              <Image
                src="/img/check-mark.svg"
                alt="check mark"
                width={24}
                height={25}
              />
              <h3 className={listTitleStyle}>Get started today</h3>
            </div>
            <div className={listItemStyle}>
              <Image
                src="/img/check-mark.svg"
                alt="check mark"
                width={24}
                height={25}
              />
              <h3 className={listTitleStyle}>No contracts</h3>
            </div>
            <div className={listItemStyle}>
              <Image
                src="/img/check-mark.svg"
                alt="check mark"
                width={24}
                height={25}
              />
              <h3 className={listTitleStyle}>No set up free</h3>
            </div>
            <div className={listItemStyle}>
              <Image
                src="/img/check-mark.svg"
                alt="check mark"
                width={24}
                height={25}
              />
              <h3 className={listTitleStyle}>Free trial</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
