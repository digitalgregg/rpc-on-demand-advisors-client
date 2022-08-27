import React from "react";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { use100vh } from "react-div-100vh";

type ModalType = {
    children?: ReactNode;
    onRequestClose?: () => void;
    isOpen: boolean;
    className?: string;
};

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

function CustomModal({
    isOpen,
    onRequestClose,
    children,
    className,
}: ModalType) {
    const viewHeight = use100vh();
    return (
        <AnimatePresence initial={false} onExitComplete={() => null}>
            {isOpen && (
                <Backdrop handleClose={onRequestClose}>
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        className="modal"
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div
                            className={" modal-scrollbar " + " " + className}
                            style={{
                                maxHeight: viewHeight
                                    ? viewHeight * 0.92
                                    : "100vh",
                                overflowY: "auto",
                            }}
                        >
                            {children}
                        </div>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    );
}

const Backdrop = ({
    children,
    handleClose,
}: {
    children: ReactNode;
    handleClose?: () => void;
}) => {
    return (
        <>
            <motion.div
                className="fixed top-1/2 left-1/2 overflow-hidden z-[101] [transform:translate(-50%,-50%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {children}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed top-0 left-0 w-full h-screen z-[100] bg-[rgba(0,8,5,0.25)]"
                onClick={handleClose}
            ></motion.div>
        </>
    );
};

export default CustomModal;
