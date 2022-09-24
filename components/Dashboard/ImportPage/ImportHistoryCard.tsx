import Moment from "react-moment";
import React, { useState } from "react";
import YesNoModal from "../../modal/YesNoModal";
import { deleteImportHistory } from "../../../api-call/ImportHistoryApi";
import { toast } from "react-toastify";

interface RootObject {
    _id: string;
    team_id: string;
    file_name: string;
    contents_id: string[];
    status: string;
    date: Date;
    updatedAt: Date;
    __v: number;
}

export type ImportHistoryType = {
    data: RootObject;
    refetch: () => void;
};

const ImportHistoryCard = ({ data, refetch }: ImportHistoryType) => {
    const [confirmModal, setConfirmModal] = useState(false);

    const handleConfirmModal = () => {
        setConfirmModal(!confirmModal);
    };
    const handleHistoryDelete = async (_: any, setLoading: any) => {
        setLoading(true);
        try {
            await deleteImportHistory(data._id);
            toast.success("History deleted successfully");
            setLoading(false);
            handleConfirmModal();
            refetch();
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <div className="bg-[#fff] sm:[background:none] p-[22px] sm:py-4 text-[#000]">
                <div className="sm:flex sm:items-center text-sm leading-[19.07px]">
                    <div className="flex items-center sm:w-[calc(80%/3)]">
                        <div className=" w-[40%] sm:hidden  font-semibold">
                            Date
                        </div>
                        <div className="w-1/2 sm:w-full text-[#676767]">
                            <Moment format="MMM M YYYY, h:mm a">
                                {data.date}
                            </Moment>
                        </div>
                    </div>
                    <div className="flex  pt-4 sm:pt-0 items-center sm:w-[calc(80%/3)]">
                        <div className=" w-[40%] sm:hidden font-semibold">
                            Filename
                        </div>
                        <div className=" w-1/2 sm:w-full  text-[#676767]">
                            {data.file_name}
                        </div>
                    </div>
                    <div className="flex pt-4 sm:pt-0 items-center sm:w-[calc(80%/3)]">
                        <div className=" w-[40%] sm:hidden font-semibold">
                            Status
                        </div>
                        <div className=" w-1/2 sm:w-full   text-[#676767]">
                            {data.status}
                        </div>
                    </div>

                    <div className="pt-5 sm:hidden"></div>

                    <div className="sm:w-[20%]">
                        <button
                            onClick={
                                data.status === "Completed"
                                    ? handleConfirmModal
                                    : () => {}
                            }
                            className={` ${
                                data.status === "Deleted"
                                    ? "text-[#828282] border-[#828282] cursor-default"
                                    : "text-primary border-primary hover:bg-primary hover:text-White"
                            } transition ease-in-out duration-200 text-sm h-[39px] text-center sm:w-[70px] sm:h-[30px] border rounded-[4px] w-full`}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <YesNoModal
                header="Delete import history"
                description="Are you sure? you want to delete import history. Content will be deleted too"
                isOpen={confirmModal}
                handleModal={handleConfirmModal}
                onYesClick={handleHistoryDelete}
            />
        </>
    );
};

export default ImportHistoryCard;
