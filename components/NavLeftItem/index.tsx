import React, {useState} from 'react';
import MoboDraer from '../MoboDraer';
import {searchModalCustomS} from "../../utils/modalCustomStyle";
import Modal from "react-modal";


const NavLeftItem = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
   
    return (
        <div className="flex gap-[20px] items-center">
            <img onClick={() => setModalOpen(!modalOpen)} src="/img/searchIcon.svg" alt="searchIcon" className="w-[18px] h-[18px] cursor-pointer sm:hidden" />
            <img src="/img/activityHistory.svg" alt="recent activity" className="xs:w-[18px] xs:h-[18px] sm:w-[24px] sm:h-[24px] cursor-pointer" />
            <div className="flex gap-[15px]">
                    <h3 className="text-[16px] xs:hidden sm:flex font-semibold text-[#222222] flex items-center">Gregg <span><img src="/img/dropdown.svg" alt="dropdown" className="w-[12px] h-[8px] ml-[10px] cursor-pointer" /></span> </h3>
                    <img src="/img/avater.svg" alt="avater" className="w-[50px] h-[50px] rounded-full xs:hidden sm:flex" />

                    <img onClick={toggleDrawer} src="/img/3dotline.svg" alt="humBurgerMenu" className="w-[30px] h-[20px] cursor-pointer sm:hidden" />
            </div>
            <Modal
        isOpen={modalOpen}
        // onRequestClose={onClose}
        style={searchModalCustomS}
        contentLabel="Example Modal"
      >
       <div className="text-white w-[100%] h-[100%] bg-white">this is nav section</div>
      </Modal>
            <MoboDraer isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </div>
    );
};

export default NavLeftItem;