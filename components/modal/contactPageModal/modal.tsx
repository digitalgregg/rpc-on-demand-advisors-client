import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import classnames from "classnames";
const customStyles = {
    content: {
        top: "40%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
        backgroundColor:"transparent",
        border:"none"
    },
    overlay: {
        backgroundColor: "rgba(16, 16, 16, 0.3)",
    },
};
const commonStyle =
    "text-base text-[#222222] leading-[22px] font-normal text-center";
export const Modals = ({ modalIsOpen, closeModal }: any) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className=" mx-[27px] sm:mx-[57px] ">
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
                        Message Recieved!
                    </h4>
                    <p className={classnames(commonStyle, "pb-[20px]")}>
                        Thank you for contacting us. We will reply to your email
                        as soon as possible.
                    </p>

                    <p className={classnames(commonStyle, "pb-[20px]")}>
                        In the meantime there might be some helpful content in
                        our
                        <Link href="/help-center">
                            <a
                                className={classnames(
                                    commonStyle,
                                    " !text-[#E51937]"
                                )}
                            >
                                {" "}
                                Help Center
                            </a>
                        </Link>
                        . We also have some great articles over in
                        <Link href="/resources/demo">
                            <a
                                className={classnames(
                                    commonStyle,
                                    " !text-[#E51937]"
                                )}
                            >
                                {" "}
                                Resources.
                            </a>
                        </Link>
                    </p>

                    <p className={classnames(commonStyle)}>Talk to you soon!</p>
                </div>
            </div>
        </Modal>
    );
};
