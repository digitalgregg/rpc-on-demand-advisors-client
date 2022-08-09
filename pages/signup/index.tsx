import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  const label = "font-semibold text-[14px] leading-[19.07px] text-[#101010]";
  const input =
    "xs:w-[335px] xs:h-[55px] text-[#6D6D6D] text-[14px] font-normal border border-[#E0E0E0] rounded xs:mt-[10px] xs:px-[20px] xs:mb-[20px]";
  return (
    <div className="xs:max-w-[375px] xs:px-[20px] mx-auto">
      <div className="xs:w-[335px]">
        <div className="xs:mt-[19.93px] xs:mb-[60px]">
          <img
            src="/img/logo.svg"
            alt="logo"
            className="xs:w-[198px] xs:h-[30.19px]"
          />
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
              marginBottom: "30px",
            }}
          />
          <button
            className="bg-[#E51937] text-[#FFFFFF] xs:text-[16px] xs:mb-[30px] xs:font-bold xs:w-[335px] xs:h-[58px] rounded flex justify-center items-center"
            style={{ boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)" }}
          >
            Sign in
          </button>
        </form>
        <h3 className="xs:font-normal xs:text-[14px] xs:mb-[82px]">
          I already have an account.{" "}
          <Link href="/login">
            <span className="text-[#E51937] cursor-pointer">Log in</span>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Signup;
