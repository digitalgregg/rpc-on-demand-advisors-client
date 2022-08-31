import React from "react";
import { searchModalCustomS } from "../../utils/modalCustomStyle";
import Modal from "react-modal";
import SearchFilter from './../SearchFilter/index';

type ModalProps = {
  modalOpen: boolean;
  onClose: any;
};

const FilterPopup = ({ modalOpen, onClose }: ModalProps) => {
  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={onClose}
        style={searchModalCustomS}
        contentLabel="Filter"
        preventScroll
      >
        <section className="text-white w-[100%] h-[100%] bg-white xs:px-[20px] sm:px-[30px] pt-[30px]">
        <div className="text-red-500 h-[90%] container1 drawer">
          <div className="w-[100%] h-auto container2 xs:pr-0">
        <SearchFilter />
          
          </div>
        </div>
        </section>
      </Modal>
    </>
  );
};

export default FilterPopup;