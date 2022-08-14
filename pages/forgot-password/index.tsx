import React from "react";
import Image from "next/image";
import Link from "next/link";

const ForgotPassword = () => {
  const listItemStyle = "flex mb-[16px] last:mb-0";
  const listTitleStyle =
    "ml-[10px] font-semibold text-[24px] leading-[33px] text-[#FFFFFF]";
  return (
    <div className="xl:flex xl:flex-row">
      <div className="w-[100%] h-[100vh] flex justify-center xs:px-[20px] xs:mt-[19.93px] xs:mb-[384px] sm:px-[90px] sm:mt-[40px] md:mt-[40px] sm:mb-[466px] md:px-[100px] lg:px-[202px] lg:mb-[455px] xl:px-[60px] 2xl:pr-[88px] 2xl:mb-[476px] 2xl:pl-[120px] 3xl:pr-[110px] 3xl:mb-[455px] 4xl:pl-[180px] 4xl:pr-[117px]">
        <div className="text-[#101010] xs:w-[335px] sm:w-[500px] md:w-[568px] lg:w-[620px] xl:w-[480px] 2xl:w-[513px] 3xl:w-[610px] 4xl:w-[663px]">
          <div className="xs:w-[198px] xs:mb-[59.97px] sm:w-[230px] sm:mb-[225px]">
            <Image src="/img/logo.svg" alt="logo" width={230} height={35} />
          </div>
          <h2 className="font-semibold text-[24px] xs:text-[16px] xs-leading-[22px] sm:text-[18px] sm:leading-[25px] leading-[33px] mb-[10px]">
            Forgot Password
          </h2>
          <h3 className="xs:w-[335px] sm:w-[500px] md:w-[568px] lg:w-[620px] xl:w-[480px] 2xl:w-[513px] 3xl:w-[610px] 4xl:w-[663px] font-normal text-[14px] xs:text-[12px] xs:leading-[16px] leading-[19px] mb-[30px]">
            Enter your Email and we’ll send a link to reset your Password
          </h3>
          <form>
            <label className="font-semibold text-[16px] xs:text-[12px] xs:leading[16px] leading-[22px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="xs:w-[335px] sm:w-[500px] md:w-[568px] lg:w-[620px] xl:w-[480px] 2xl:w-[513px] 3xl:w-[610px] 4xl:w-[663px] h-[55px] border border-[#E0E0E0] rounded mb-[10px] mt-[10px] px-[20px] py-[18px] text-[14px] font-normal"
              style={{ boxShadow: "inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
            />
            <h3 className="font-normal text-[14px] leading-[19px] text-[#E51937] mb-[20px]">
              We can not find your account.
            </h3>
            <button className="xs:w-[335px] sm:w-[500px] md:w-[568px] lg:w-[620px] xl:w-[480px] 2xl:w-[513px] 3xl:w-[610px] 4xl:w-[663px] h-[58px] rounded bg-[#E51937] text-[#FFFFFF] font-bold text-[16px] mb-[20px]">
              Submit
            </button>
          </form>
          <div>
            <Image src="/icon/back-icon.svg" alt="logo" width={9} height={12} />
            <Link href="/login">
              <span className="text-[#000000] cursor-pointer font-normal text-[14px] leading-[19px] ml-[18.49px]">
                Back to Log In.
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[100%] top-0 right-0 bg-[#191919] hidden xl:flex xl:items-center justify-center">
        <div className="xl:w-[600px] 2xl:w-[720px] 3xl:w-[840px] 4xl:w-[960px] xl:pl-[40px] xl:pr-[60px] xl:pb-[214px] xl:pt-[301.92px] 2xl:pl-[34px] 2xl:pr-[122px] 2xl:pb-[262px] 2xl:pt-[180px] 3xl:pl-[80px] 3xl:pr-[120px] 3xl:pb-[241px] 4xl:pl-[140px] 4xl:pr-[180px] 4xl:pb-[208px]">
          <img
            src="/img/signup-demo.svg"
            alt="signup thumbnail"
            className="xl:w-[500px] xl:h-[304px] 2xl:w-[564px] 3xl:w-[640px] h-[390px]"
          />
          <div className="xl:w-[480px] xl:mt-[31.04px] 2xl:w-[409px] 2xl:mt-[40px] 3xl:w-[640px] 4xl:w-[610px] h-[229px] 4xl:mt-[73px]">
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

export default ForgotPassword;
