import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  const label =
    "font-semibold text-[14px] lg:text-[16px] leading-[19.07px] lg:leading-[21.79px] text-[#101010]";
  const input =
    "xs:w-[335px] sm:w-[500px] md:w-[568px] lg:w-[620px] xl:w-[480px] 2xl:w-[513px] 3xl:w-[610px] 4xl:w-[663px] h-[55px] text-[#6D6D6D] text-[14px] font-normal border border-[#E0E0E0] rounded mt-[10px] px-[20px] mb-[20px]";
  const listItemStyle = "flex xl:mb-[16px] xl:last:mb-0";
  const listTitleStyle =
    "ml-[10px] font-semibold text-[24px] leading-[32.68px]";
  return (
    <div className="xl:flex xl:flex-row">
      <div className="flex justify-center xs:px-[20px] sm:px-[90px] md:px-[100px] lg:px-[202px] xl:px-[60px] 2xl:pl-[120px] 2xl:pr-[88px] 3xl:pl-[120px] 3xl:pr-[110px] 4xl:pl-[180px] 4xl:pr-[117px]">
        <div className="xs:w-[335px] sm:w-[500px] md:w-[568px] lg:w-[620px] xl:w-[480px] 2xl:w-[513px] 3xl:w-[610px] 4xl:w-[663px]">
          <div className="xs:w-[198px] sm:w-[230px] xs:mt-[20px] xs:mb-[60px] sm:mt-[40px] sm:mb-[105px] 3xl:mb-[145px]">
            <Image src="/img/logo.svg" alt="logo" width={230} height={35} />
          </div>
          <h2 className="text-[#101010] font-semibold text-[18px] xs:leading-[24.51px] lg:text-[24px] lg:leading-[32.68px] lg:w-[620px] xl:leading-[32.68px] xl:text-[24px] mb-[10px]">
            Hi There we&apos;re happy to see you.
          </h2>
          <h3 className="text-[#101010] font-normal text-[14px] leading-[19.07px] mb-[30px]">
            signup now with email
          </h3>
          <form>
            <label className={label}>Full name</label>
            <input
              type="text"
              name="name"
              className={input}
              style={{ boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
            />

            <label className={label}>Company name</label>
            <input
              type="text"
              name="companyName"
              className={input}
              style={{ boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
            />

            <label className={label}>Email</label>
            <input
              type="email"
              name="email"
              className={input}
              style={{ boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
            />

            <label className={label}>Password</label>
            <input
              type="password"
              name="password"
              className={input}
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
                marginBottom: "0px",
              }}
            />
            <button
              className="bg-[#E51937] text-[#FFFFFF] text-[16px] my-[30px] font-bold xs:w-[335px] sm:w-[500px] md:w-[568px] lg:w-[620px] xl:w-[480px] 2xl:w-[513px] 3xl:w-[610px] 4xl:w-[663px] h-[58px] rounded flex justify-center items-center"
              style={{ boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
            >
              Sign in
            </button>
          </form>
          <h3 className="font-normal text-[14px] xs:mb-[82px] sm:mb-[280px] md:mb-[280px] lg:mb-[260px] xl:mb-[260px] 2xl:mb-[294px] 3xl:mb-[220px]">
            I already have an account.{" "}
            <Link href="/login">
              <span className="text-[#E51937] cursor-pointer">Log in</span>
            </Link>
          </h3>
        </div>
      </div>
      <div className=" xl:w-[600px] 2xl:w-[720px] 3xl:w-[840px] 4xl:w-[960px] h-[100%] fixed top-0 right-0 bg-[#191919] hidden xl:flex xl:items-center">
        <div className=" xl:px-[60px] mt-[180px] xl:mb-[241px] 2xl:pl-[34px] 2xl:pr-[122px] 2xl:mb-[262px] 3xl:pl-[80px] 3xl:pr-[120px] 3xl:mb-[241px] 4xl:pl-[140px] 4xl:pr-[180px] 4xl-mb-[208px]">
          <img
            src="/img/signup-demo.svg"
            alt="signup thumbnail"
            className="xl:w-[480px] h-[390px] 2xl:w-[564px] 3xl:w-[640px]"
          />
          <div className="xl:w-[480px] h-[229px] mt-[40px] 2xl:w-[409px] 3xl:w-[640px] 4xl:mt-[73px] text-white">
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

export default Signup;
