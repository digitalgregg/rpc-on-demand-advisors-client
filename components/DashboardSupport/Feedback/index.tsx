import React, { useState } from "react";
import { Modals } from "../../modal/ContactSupportFeedBackModal";

const Feedback = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <>
            <Modals
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
                modalCloseFuncton={setModalIsOpen}
            />
            <button onClick={openModal} className=" text-4xl font-bold">
                openModal
            </button>
        </>
    );
};

export default Feedback;
