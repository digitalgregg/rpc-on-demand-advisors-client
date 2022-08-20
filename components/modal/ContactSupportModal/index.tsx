import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import classnames from "classnames";
import { motion } from "framer-motion";
import { TextField } from "../../Shared/TextField/TextField";
import { TeaxArea } from "../../Shared/TeaxArea";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
        backgroundColor: "transparent",
        border: "none",
    },
    overlay: {
        backgroundColor: "rgba(16, 16, 16, 0.3)",
    },
};
export const Modals = ({ modalIsOpen, closeModal }: any) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <motion.div
                initial={{ zoom: 0.5, opacity: 0.5 }}
                animate={{ zoom: 1, opacity: 1 }}
                className=" mx-[27px] sm:mx-[57px] "
            >
                <div className=" bg-White max-w-[680px] rounded relative py-[20px] px-[30px] sm:py-[40px] sm:px-[50px]">
                    <h4 className="mb-[10px] text-lg leading-[25px] font-semibold text-[#000805]">
                        Give feedback
                    </h4>
                    <p
                        className={classnames(
                            "pb-[30px] text-[#101010] text-base font-normal leading-[22px]"
                        )}
                    >
                        What do you think of the content camel website?
                    </p>
                    <div className=" flex flex-row gap-[40px] my-5"></div>

                    <div className=" mb-5">
                        <label className=" text-base font-semibold text-[#000805] leading-[22px]">
                            Enter your email
                        </label>
                        <input
                            className={` rounded w-full mt-[10px] outline-none bg-White h-[55px] p-[15px] text-[#9E9E9E] border-[1px] border-solid  border-[#9E9E9E]`}
                            placeholder="Example: digitalgregg@gmail.com"
                            name="email"
                        />
                    </div>
                    <div>
                        <label className=" text-base font-semibold text-[#000805] leading-[22px]">
                            Enter your feedback note
                        </label>
                        <textarea
                            className={` rounded w-full mt-[10px] outline-none bg-White h-[150px] p-[15px] text-[#9E9E9E] border-[1px] border-solid  border-[#9E9E9E]`}
                            placeholder="Type here"
                            name="meassage"
                        ></textarea>
                    </div>
                    <div className=" flex justify-between gap-[10px] mt-[30px]">
                        <motion.button
                            whileHover={{ opacity: 0.9, radius: '20px' }}
                            onClick={closeModal}
                            className="w-[182.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary  capitalize text-base leading-[22px] font-semibold text-primary"
                        >
                            Cancel
                        </motion.button>
                        <motion.button
                            whileHover={{ opacity: 0.9, radius: '20px' }}
                            className="w-[182.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary bg-primary capitalize text-base leading-[22px] font-semibold text-White"
                        >
                            send
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </Modal>
    );
};
