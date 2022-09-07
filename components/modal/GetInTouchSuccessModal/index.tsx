import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomModal from "../../Shared/CustomUtils/CustomModal";
const commonStyle =
    "text-base text-[#222222] leading-[22px] font-normal text-center";
export const GetInTouchSuccessModal = ({ modalIsOpen, closeModal }: any) => {
    return (
        <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="bg-[#fff] rounded-[4px] w-fit"
        >
            <div className="">
                <div className=" bg-White max-w-[680px] rounded relative py-[20px] px-[30px] sm:py-[40px] sm:px-[50px]">
                    <div
                        onClick={closeModal}
                        className=" absolute top-[20px] right-[20px] max-w-[18px] cursor-pointer"
                    >
                        <Image
                            width={18}
                            height={18}
                            src="/assets/resurces-demo/close.svg"
                            alt="icon"
                        />
                    </div>
                    <h4 className=" text-center mb-[40px] text-[24px] leading-[33px] font-bold text-[#222222]">
                        Contact Us - Success 🤗
                    </h4>
                    <p className={classNames(commonStyle, "pb-[20px]")}>
                        Hi there 👋
                    </p>
                    <p className={classNames(commonStyle, "pb-[20px]")}>
                        <b>We got your message.</b> We can’t wait to connect
                        with you 🙌
                    </p>

                    <p className={classNames(commonStyle, "pb-[20px]")}>
                        In the meantime there might be some helpful content in
                        <Link href="/help-center">
                            <a
                                className={classNames(
                                    commonStyle,
                                    " !text-primary"
                                )}
                            >
                                <b>our Help Center.</b>
                            </a>
                        </Link>
                        We also have some great articles over in the
                        <Link href="/resources/demo">
                            <a
                                className={classNames(
                                    commonStyle,
                                    " !text-primary mx-[1px]"
                                )}
                            >
                                <b>Resource section of this website.</b>
                            </a>
                        </Link>
                    </p>

                    <p className={classNames(commonStyle)}>Talk to you soon!</p>
                </div>
            </div>
        </CustomModal>
    );
};
