/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import CheckBox from "../../../../components/CustomIcons/CheckBox";
import Pagination from "../../../../components/Shared/Pagination";
import YesNoModal from "../../../../components/modal/YesNoModal";
import FileUploadModal, {
    handleUppyModal,
} from "../../../../components/FileUploadModal";
import TopForm from "./TopForm";
import CContentCard from "./CContentCard";

function EditCollection() {
    const [removeModal, setRemoveModal] = useState(false);

    const [selectedContent, setSelectedContent] = useState<any>([
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
    ]);
    const [content, setContent] = useState([
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
    ]);

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
                                onClick={() => setRemoveModal(!removeModal)}
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
                                onYesClick={() => {
                                    console.log("Check");
                                }}
                                description={
                                    "Are you sure you want to remove all select content? This action cannot be undone"
                                }
                            />
                        </div>
                    </div>
                    <div className="pt-5"></div>
                    <div>
                        {selectedContent ? (
                            <Pagination
                                dataArr={selectedContent}
                                itemsPerPage={6}
                                className="pt-[30px]"
                            >
                                {(currentItems) => (
                                    <div className="grid gap-[10px] sm:grid-cols-2">
                                        {currentItems.map((v: any, i: any) => (
                                            <CContentCard data={v} key={i} />
                                        ))}
                                    </div>
                                )}
                            </Pagination>
                        ) : (
                            <div className="bg-[#F2F2F2] h-[200px] w-full flex justify-center items-center">
                                <div className="text-lg lg:text-xl text-[#676767]">
                                    No content selected
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="pt-[30px]"></div>

                <div>
                    <div>
                        <div className="flex items-center">
                            <div className="text-base text-[#000] leading-[21.79px] font-semibold">
                                Select Content
                            </div>
                            <div className="pl-5"></div>
                            <div className="flex items-center gap-[7px] cursor-pointer">
                                <div className="h-[16px] w-[16px]">
                                    <CheckBox
                                        width={"100%"}
                                        height={"100%"}
                                        isChecked={false}
                                    />
                                </div>
                                <span className="text-sm leading-[19.07px] text-[#E51937]">
                                    SELECT ALL
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5"></div>
                    <Pagination
                        dataArr={content}
                        itemsPerPage={5}
                        className="pt-[30px]"
                    >
                        {(currentItems) => (
                            <div className="grid gap-[10px] sm:grid-cols-2">
                                {currentItems.map((v, i) => (
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
            <FileUploadModal />
        </>
    );
}

export default EditCollection;
