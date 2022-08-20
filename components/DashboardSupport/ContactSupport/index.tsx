import React, { useState } from "react";
import ContactFrom from "./ContactFrom";
import { Modals } from "../../modal/contactPageModal/modal";
import CustomModal from "../../CustomUtils/CustomModal";
const stypes =
    "text-[16px] leading-[22px] text-[$000000] font-normal mb-[20px]";

const ContactSupport = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="bg-[#fff] rounded-[4px] w-fit"
            />
            <div className=" flex flex-col lg:flex-row ">
                <div>
                    <h1 className=" text-2xl leading-[33px] font-semibold text-[#000000] mb-[20px]">
                        Questions. We all have them.
                    </h1>
                    <p className={stypes}>
                        We’re available to connect and talk about sales
                        enablement, go to market, and answer anything you want
                        to know about the product.
                    </p>
                    <p className={stypes}>
                        Want to schedule time to talk or get a demo? Just find a
                        time here that works for you:
                        <a className=" text-primary">Schedule a call.</a>
                    </p>
                    <p className={stypes}>
                        Or email us anytime with the form. <br />
                        <a className=" text-primary">Or use this address.</a>
                    </p>
                    <p className={stypes}>
                        Or chat us up with that icon in the lower right.
                    </p>
                    <p className={stypes}>
                        We’re looking forward to connecting with you!
                    </p>
                </div>
                <div className=" w-full lg:max-w-[600px] lg:w-[600px] bg-White rounded py-[50px] px-[40px]">
                    <ContactFrom />
                </div>
            </div>
        </>
    );
};

export default ContactSupport;
