/* eslint-disable @next/next/no-img-element */
import React, { useReducer } from "react";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import { useState, useCallback } from "react";
import { Layout } from "../../../../components/accountSettings/Layout";
import Dropzone, {
    simpleClasses,
} from "../../../../components/Shared/Dropzone";
import BrandingBg from "../../../../components/CustomIcons/BrandingBg";
import TestCodeEditor from "../../../../components/Playground/TestCodeEditor";
import api from "../../../../api";
import { useQuery } from "react-query";
import {
    brandingReducer,
    createBranding,
    DefaultBranding,
    fetchBranding,
    fileToLink,
    responseToObject,
    updateBranding,
} from "../../../../api-call/BrandingApi";
import { useAtom } from "jotai";
import { team_state } from "../../../../state/index";
import LodingAnimation from "../../../../components/Shared/LodingAnimation";
import { toast } from "react-toastify";
import { defaultBrandingData } from "../../../../utils/defaultData";
import Meta from "../../../../components/Meta";

function Branding() {
    const [teamData] = useAtom(team_state);
    const [state, dispatch] = useReducer(brandingReducer, defaultBrandingData);

    const [faviconFile, setFaviconFile] = useState<File>();
    const [brandLogoFile, setBrandLogoFile] = useState<File>();

    const { data, refetch } = useQuery(
        "get-branding",
        () => fetchBranding(teamData.id),
        {
            enabled: teamData.id ? true : false,
            onSuccess: (data) => {
                const inside = data.data;
                inside.favicon &&
                    dispatch({ field: "favicon", value: inside.favicon });
                inside.accent_color &&
                    dispatch({
                        field: "accent_color",
                        value: inside.accent_color,
                    });
                inside.site_title &&
                    dispatch({ field: "site_title", value: inside.site_title });
                inside.branding_logo &&
                    dispatch({
                        field: "branding_logo",
                        value: inside.branding_logo,
                    });
            },
        }
    );

    const faviconUpload = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        dispatch({ field: "favicon", value: URL.createObjectURL(file) });
        setFaviconFile(file);
    }, []);
    const brandLogoUpload = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        dispatch({ field: "branding_logo", value: URL.createObjectURL(file) });
        setBrandLogoFile(file);
    }, []);

    const [updateLoading, setUpdateLoading] = useState(false);
    const [resetLoading, setResetLoading] = useState(false);

    const handleBrandingUpdate = async () => {
        let apiObj: any = {};
        setUpdateLoading(true);
        try {
            if (state.accent_color) {
                apiObj.accent_color = state.accent_color;
            }
            if (state.site_title) {
                apiObj.site_title = state.site_title;
            }
            if (faviconFile) {
                const favRes = await fileToLink(faviconFile);
                apiObj.favicon = favRes.location;
            }
            if (brandLogoFile) {
                const brandRes = await fileToLink(brandLogoFile);
                apiObj.branding_logo = brandRes.location;
            }
            apiObj.team_id = teamData.id;
            await api.put("/api/branding", apiObj);
            toast.success("Branding update successfully");
            setUpdateLoading(false);
            refetch();
        } catch (err: any) {
            toast.error(err?.response?.data?.message);
            console.log(err);
            setUpdateLoading(false);
        }
    };
    const handleBrandingReset = async () => {
        setResetLoading(true);
        try {
            await api.delete("/api/branding/" + data?.data._id);
            toast.success("Branding reset successfully");
            setResetLoading(false);
            dispatch({
                field: "accent_color",
                value: defaultBrandingData.accent_color,
            });
            dispatch({
                field: "branding_logo",
                value: defaultBrandingData.branding_logo,
            });
            dispatch({ field: "favicon", value: defaultBrandingData.favicon });
            dispatch({
                field: "site_title",
                value: defaultBrandingData.site_title,
            });

            refetch();
        } catch (err: any) {
            toast.error(err?.response?.data?.message);
            console.log(err);
            setResetLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <Meta title="Branding | Account Settings" />

            <Layout>
                <div className="text-xl leading-[27.24px] sm:text-[24px] sm:leading-[32.68px] font-semibold text-[#000]">
                    Styling & Preview
                </div>
                <div className="pt-5 md:pt-[30px]"></div>
                <div className="flex flex-col gap-5 sm:gap-[30px] xl:flex-row">
                    <div className="p-[20px_10px] sm:p-[20px] bg-[#fff] rounded-[4px] flex flex-col ">
                        <div>
                            <div className="text-base font-semibold leading-[21.79px] text-[#000]">
                                Enter your site title
                            </div>
                            <div className="pt-[10px]"></div>
                            <input
                                type="text"
                                value={state.site_title}
                                className="h-[55px] text-sm leading-[19.07px] text-[#6d6d6d] px-[15px] focus:outline-none [background:none] w-full border rounded-[4px]"
                                placeholder="Example: ODA Center - Content System"
                                onChange={(e) => {
                                    dispatch({
                                        field: "site_title",
                                        value: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="pt-[17px]"></div>
                        <div>
                            <div className="text-base font-semibold leading-[21.79px] text-[#000]">
                                Accent color
                            </div>
                            <div className="pt-[10px]"></div>

                            <div className="flex gap-5 relative">
                                <div className="w-full border-none rounded-[4px] h-[37px] relative">
                                    <input
                                        id="inputColor"
                                        type={"color"}
                                        value={state.accent_color}
                                        className="  w-full h-full input-color-rounded-[4px] !p-0 input-color-padding rounded-[4px] !outline-none !border-none"
                                        onChange={(v) =>
                                            dispatch({
                                                field: "accent_color",
                                                value: v.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="w-full h-[37px] border border-[#676767] rounded-[4px] text-[#101010] text-sm leading-[19.07px] pl-4 flex items-center">
                                    {state.accent_color}
                                </div>
                            </div>
                        </div>
                        <div className="pt-[17px]"></div>

                        <div>
                            <div className="text-base font-semibold justify leading-[21.79px] text-[#000]">
                                Upload Favicon
                            </div>
                            <div className="pt-[10px]"></div>
                            <Dropzone {...simpleClasses} onDrop={faviconUpload}>
                                <img
                                    src="/assets/collections/upload.svg"
                                    alt=""
                                />
                            </Dropzone>
                        </div>
                        <div className="pt-[17px]"></div>

                        <div>
                            <div className="text-base font-semibold justify leading-[21.79px] text-[#000]">
                                Upload your brand logo
                            </div>
                            <div className="pt-[10px]"></div>
                            <Dropzone
                                {...simpleClasses}
                                onDrop={brandLogoUpload}
                            >
                                <img
                                    src="/assets/collections/upload.svg"
                                    alt=""
                                />
                            </Dropzone>
                        </div>
                        <div className="pt-[5px]"></div>

                        <div className="text-xs leading-[16.34px] text-[#000000]">
                            Please use .jpg or .png with non-transparent
                            background. Recommended dimensions of 1000 x 1000
                            Used as Sites og:image or twitter:image
                        </div>
                        <div className="pt-[17px]"></div>
                        <div className="flex gap-[17px]">
                            {teamData.role === "admin" && (
                                <>
                                    <button
                                        onClick={handleBrandingReset}
                                        className="hover-transition hover:bg-primary hover:text-White  border border-primary w-full rounded-[4px] text-primary font-semibold text-sm leading-[45px] h-[45px] text-center"
                                    >
                                        {resetLoading ? (
                                            <span className="flex items-center gap-[10px] justify-center">
                                                <div>
                                                    <LodingAnimation color="white" />
                                                </div>
                                                <div>Loading...</div>
                                            </span>
                                        ) : (
                                            "Reset"
                                        )}
                                    </button>
                                    <button
                                        onClick={handleBrandingUpdate}
                                        className="hover-transition hover:bg-primary hover:text-White  border border-primary w-full rounded-[4px] text-primary font-semibold text-sm leading-[45px] h-[45px] text-center"
                                    >
                                        {updateLoading ? (
                                            <span className="flex items-center gap-[10px] justify-center">
                                                <div>
                                                    <LodingAnimation color="white" />
                                                </div>
                                                <div>Loading...</div>
                                            </span>
                                        ) : (
                                            "Update"
                                        )}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="p-[10px] sm:p-[20px] bg-[#fff] rounded-[4px]  flex flex-col">
                            <div>
                                <div>
                                    <BrandingBg color={state.accent_color} />
                                </div>
                                <div className="flex flex-col items-center relative mb-[-50px] top-[-50px]">
                                    <div className="w-[100px] h-[100px] relative">
                                        <img
                                            src={state.branding_logo}
                                            alt=""
                                            className=" border-[5px] rounded-full border-[#fff] w-full h-full"
                                        />
                                        <img
                                            src={state.favicon}
                                            alt=""
                                            className="absolute bottom-0 right-0 w-[40px] h-[40px] border-[2px] rounded-full border-[#fff]"
                                        />
                                    </div>
                                    <div className="pt-[10px]"></div>
                                    <div className="text-lg font-bold leading-[24.51px] text-[#000]">
                                        {state.site_title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </DashboardLayout>
    );
}

export default Branding;
