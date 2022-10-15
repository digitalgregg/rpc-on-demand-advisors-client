/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import CheckBox from "../../../../components/CustomIcons/CheckBox";
import Pagination from "../../../../components/Shared/Pagination";
import YesNoModal from "../../../../components/modal/YesNoModal";
import FileUploadModal, {
    abortFileUpload,
    handleUppyModal,
} from "../../../../components/FileUploadModal";
import TopForm from "./TopForm";
import CContentCard from "./CContentCard";
import { useWindowDimensions } from "../../../Shared/DimentionHook/index";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import {
    getCollection,
    removeAllContent,
    selectAllContent,
} from "../../../../api-call/CollectionApi";
import { CollectionData } from "../CollectionItem";
import CollectionDataProvider from "../../../Context/CollectionDataProvider";
import api from "../../../../api";
import { toast } from "react-toastify";
import {
    GetCollectionContext,
    initialCollection,
} from "../../../Context/CollectionDataProvider";
import LodingAnimation from "../../../Shared/LodingAnimation";
import {
    createContent,
    responseToObject,
} from "../../../../api-call/ContentApi";
import { useAtom } from "jotai";
import {
    team_state,
    UpgradeModalState,
    UserPlanState,
} from "../../../../state";
import { GetGlobalContext } from "../../../Context/GlobalContextProvider";

function EditCollection() {
    const [removeModal, setRemoveModal] = useState(false);
    const context = GetCollectionContext();
    const data = context.collectionData || initialCollection;
    const contentsData = context.contents || [];

    const [, setUpgradeModal] = useAtom(UpgradeModalState);
    const [selectLoading, setSelectLoading] = useState(false);

    const [teamData] = useAtom(team_state);

    const [userPlan] = useAtom(UserPlanState);
    const { refetchPlanData } = GetGlobalContext();

    const { width } = useWindowDimensions();

    function getItemPerPageBottom(): number {
        if (width < 680) {
            return 5;
        } else {
            return 9;
        }
    }
    function getItemPerPageTop(): number {
        if (width < 680) {
            return 6;
        } else {
            return 10;
        }
    }

    const handleContentValidate = () => {
        if (!userPlan) return;
        if (userPlan.storage_limit) {
            toast.error(
                "Storage limit exceeded, Please upgrade plan to further process"
            );
        }
        if (userPlan.asset_limit) {
            toast.error(
                "Storage limit exceeded, Please upgrade plan to further process"
            );
        }
        if (userPlan.asset_limit || userPlan.storage_limit) {
            abortFileUpload();
            setUpgradeModal("Content");
        }
    };

    const handleRemoveAll = async (_: any, setLoading: any) => {
        setLoading(true);
        try {
            console.log(data);
            await removeAllContent(data._id);
            setLoading(false);
            setRemoveModal(false);
            context.refetch();
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    const handleSelectAll = async () => {
        setSelectLoading(true);
        try {
            const contentArr: string[] = context.contents.map((v) => v._id);
            await selectAllContent(data._id, contentArr);
            context.refetch();
            setSelectLoading(false);
        } catch (error) {
            setSelectLoading(false);
            console.log(error);
        }
    };
    const [retrieveLimit, setRetrieveLimit] = useAtom(RetrieveLimit);
    async function handleSingleUpload(response: any) {
        handleContentValidate();
        await createContent(responseToObject(response, teamData));
        setRetrieveLimit(`${Math.random() * 100}`);
        context.refetch();
        refetchPlanData();
    }

    return (
        <>
            <div className="min-h-screen">
                <div>
                    <TopForm />
                </div>
                <div className="pt-[30px]"></div>
                <div>
                    <div>
                        <div className="flex items-center">
                            <div className="text-base text-[#000] leading-[21.79px] font-semibold">
                                Selected Content
                            </div>
                            <div className="pl-5"></div>
                            <div
                                className="flex items-center gap-[7px] cursor-pointer"
                                onClick={() =>
                                    data.contents.length > 0 &&
                                    setRemoveModal(!removeModal)
                                }
                            >
                                <img
                                    src="/assets/collections/delete.svg"
                                    alt=""
                                />
                                <span className="text-sm leading-[19.07px] text-[#E51937] cursor-pointer">
                                    REMOVE ALL
                                </span>
                            </div>
                            <YesNoModal
                                isOpen={removeModal}
                                handleModal={() => setRemoveModal(!removeModal)}
                                header={"Remove all selected content?"}
                                onYesClick={handleRemoveAll}
                                description={
                                    "Are you sure you want to remove all select content? This action cannot be undone"
                                }
                            />
                        </div>
                    </div>
                    <div className="pt-5"></div>

                    <Pagination
                        dataArr={data.contents || []}
                        itemsPerPage={getItemPerPageTop()}
                        className="pt-[30px]"
                    >
                        {(currentItems) => {
                            if (currentItems.length > 0) {
                                return (
                                    <div className="grid gap-[10px] sm:grid-cols-2">
                                        {currentItems.map((v: any, i: any) => (
                                            <CContentCard data={v} key={i} />
                                        ))}
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="bg-[#F2F2F2] h-[200px] w-full flex justify-center items-center">
                                        <div className="text-lg lg:text-xl text-[#676767]">
                                            No content selected
                                        </div>
                                    </div>
                                );
                            }
                        }}
                    </Pagination>
                </div>
                <div className="pt-[30px]"></div>

                <div>
                    <div>
                        <div className="flex items-center">
                            <div className="text-base text-[#000] leading-[21.79px] font-semibold">
                                Select Content
                            </div>
                            <div className="pl-5"></div>
                            <div
                                onClick={() =>
                                    context.contents.length > 0 &&
                                    !selectLoading &&
                                    handleSelectAll()
                                }
                                className="flex items-center gap-[7px] cursor-pointer"
                            >
                                <div className="h-[16px] w-[16px]">
                                    <CheckBox
                                        width={"100%"}
                                        height={"100%"}
                                        isChecked={false}
                                    />
                                </div>
                                <span className="text-sm leading-[20px] text-[#E51937]">
                                    SELECT ALL
                                </span>
                                {selectLoading && (
                                    <LodingAnimation
                                        height={20}
                                        width={20}
                                        color={"#E51937"}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="pt-5"></div>
                    <Pagination
                        dataArr={contentsData}
                        itemsPerPage={getItemPerPageBottom()}
                        className="pt-[30px]"
                    >
                        {(currentItems) => (
                            <div className="grid gap-[10px] sm:grid-cols-2">
                                {currentItems.map((v: any, i) => (
                                    <CContentCard
                                        key={i}
                                        isChecked={false}
                                        data={v}
                                    />
                                ))}
                                <div>
                                    <button
                                        className="h-[80px] sm:h-[84.45px] lg:h-[100px] font-semibold rounded-[4px] text-[#000] w-full leading-[84px] text-center bg-[#fff] border border-dashed border-[#9D9D9D] "
                                        onClick={handleUppyModal}
                                    >
                                        Add New Content
                                    </button>
                                </div>
                            </div>
                        )}
                    </Pagination>
                    <div className="pt-[100px]"></div>
                </div>
            </div>
            <FileUploadModal
                onSingleUpload={handleSingleUpload}
                onFileUpload={handleContentValidate}
            />
        </>
    );
}

export default EditCollection;
