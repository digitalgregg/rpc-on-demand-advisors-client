import React from "react";
import Modal, { Styles } from "react-modal";
import { TagModalCustomStyle } from "../../utils/modalCustomStyle";
import TagFilter from './../TagFilter/index';



type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TagModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <div className="">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={TagModalCustomStyle}
        contentLabel="Example Modal"
      >
        <section className="bg-white w-[510px] h-[250px] px-[30px] py-[40px] modal-scroll">
         <div className="">
         <h3 className="text-[16px] font-semibold	mb-[10px]">Update tag</h3>
          <div className="w-full mb-[40px]">
            <TagFilter />
          </div>
          {/* buttons section  */}
          <div className="flex justify-between w-full mx-auto">
            <button className="w-[217.5px] h-[45px] rounded-[4px] text-[16px] text-primary border border-primary hover:bg-primary hover:text-[#FFFFFF]">Cancel</button>
            <button className="w-[217.5px] h-[45px] rounded-[4px] text-[16px] text-primary border border-primary hover:bg-primary hover:text-[#FFFFFF]">Update</button>
          </div>
         </div>
        </section>
      </Modal>
    </div>
  );
};

export default TagModal;
