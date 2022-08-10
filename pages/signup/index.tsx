import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  const label = "font-semibold text-[14px] leading-[19.07px] text-[#101010]";
  const input =
    "xs:w-[335px] sm:w-[500px] md:w-[568px] h-[55px] text-[#6D6D6D] text-[14px] font-normal border border-[#E0E0E0] rounded mt-[10px] px-[20px] mb-[20px]";
  const listItemStyle = "flex md:mb-[16px] md:last:mb-0";
  const listTitleStyle =
    "md:ml-[10px] md:font-semibold md:text-[18px] md:leading-[25px] md:font-[Open Sans]";
  return (
    <div className="xs:max-w-[375px] sm:max-w-[680px] md:max-w-[768px] mx-auto">
      <div className="">
        <div className="xs:w-[335px] sm:w-[500px] md:w-[568px] xs:px-[20px] sm:px-[90px] md:px-[100px]">
          <div className="xs:w-[198px] sm:w-[230px] md:w-[230px] xs:mt-[19.93px] xs:mb-[60px] sm:mt-[40px] sm:mb-[105px] md:mt-[40px] md:mb-[105px]">
            <Image src="/img/logo.svg" alt="logo" width={230} height={35} />
          </div>
          <h2 className="text-[#101010] font-semibold text-[18px] leading-[24.51px] xs:mb-[10px]">
            Hi There we&apos;re happy to see you.
          </h2>
          <h3 className="text-[#101010] font-normal text-[14px] leading-[19.07px] xs:mb-[30px]">
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
              className="bg-primary text-[#FFFFFF] text-[16px] my-[30px] font-bold xs:w-[335px] sm:w-[500px] md:w-[568px] h-[58px] rounded flex justify-center items-center"
              style={{ boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
            >
              Sign in
            </button>
          </form>
          <h3 className="xs:font-normal xs:text-[14px] xs:mb-[82px] sm:mb-[280px] md:mb-[280px]">
            I already have an account.{" "}
            <Link href="/login">
              <span className="text-primary cursor-pointer">Log in</span>
            </Link>
          </h3>
        </div>
      </div>
      <div className="md:w-[100%] bg-[#191919] hidden">
        <div className="md:w-[384px] md:h-[619px] md:mt-[180px] md:mb-[281px] md:pl-[15px] md:pr-[50px]">
          <img
            src="/img/signup-demo.svg"
            alt="signup thumbnail"
            className="md:w-[319px] md:h-[390px]"
          />
          <div className="md:w-[319px] md:h-[189px] md:mt-[40px] text-white">
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
