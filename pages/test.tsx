import React, { useState } from "react";
import { Modals } from "../components/modal/ContactSupportModal";

const Test = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <Modals  closeModal={closeModal} modalIsOpen={modalIsOpen} />{" "}
            <button onClick={openModal} className=" text-4xl font-bold">
                openModal
            </button>
        </>
    );
};

export default Test;
