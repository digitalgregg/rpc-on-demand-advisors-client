import React, { useEffect, useState } from "react";
import ConfirmYourDetails from "./ContactFrom";
import { GetInTouchSuccessModal } from "../../modal/GetInTouchSuccessModal";
import ScheduleDemo from "./ScheduleDemo";
const Index = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [nextStape, setNextStape] = useState(false);
    useEffect(() => {
        if (modalIsOpen === true) {
            setTimeout(() => {
                setModalIsOpen(false);
                setNextStape(true);
            }, 4000);
        }
    }, [modalIsOpen]);
    return (
        <>
            <GetInTouchSuccessModal
                closeModal={() => setModalIsOpen(false)}
                modalIsOpen={modalIsOpen}
            />
            {nextStape === true ? (
                <ScheduleDemo />
            ) : (
                <ConfirmYourDetails modalOpenfunction={setModalIsOpen} />
            )}
        </>
    );
};

export default Index;
