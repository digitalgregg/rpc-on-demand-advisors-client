import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchTrackers } from "../../../api-call/TrackersApi";
import { team_state } from "../../../state";
import TrackersEditor from "./TrackersEditor";

const Trackers = () => {
    const [teamData] = useAtom(team_state);
    const { data, isLoading, isSuccess, refetch } = useQuery(
        ["fetch-trackers"],
        async () => await fetchTrackers(teamData.id),
        {
            enabled: teamData.id ? true : false,
            select: (response) => response.data,
            retry(failureCount, error: any) {
                if (error.message === "Trackers not found") {
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    return (
        <div className="overflow-hidden">
            <h4 className=" text-2xl leading-[33px] font-semibold text-black">
                About Trackers
            </h4>
            <div className=" mt-[30px] mb-[50px] w-full p-[30px] rounded-[10px] bg-White flex flex-col gap-5">
                <p className=" text-base leading-[22px] font-normal text-[#676767]">
                    {`
                        This section allows you to add HTML or Javascript to the
                    header or footer of the published collection pages, also
                    known as "sites".
                        `}
                </p>
                <p className=" text-base leading-[22px] font-normal text-[#676767]">
                    By adding HTML and Javascript you can enable additional 3rd
                    party trackers like Google Tag Manager, Google Analytics,
                    Hubspot and even add interactive features like chat directly
                    to your pages 🙌
                </p>
            </div>
            <div className=" flex flex-col md:flex-row gap-[30px]  w-full">
                <div className="w-full">
                    <h3 className=" capitalize text-2xl leading-[33px] font-semibold text-black">
                        header
                    </h3>
                    <div className="pt-4"></div>
                    <p className=" text-base leading-[22px] font-normal text-[#676767]">
                        Add HTML and JavaScript snippets to the header of
                        published collection site pages
                    </p>
                    <div className="pt-4"></div>

                    <TrackersEditor
                        data={data}
                        type={"header"}
                        refetch={refetch}
                    />
                </div>
                <div className="w-full">
                    <h3 className=" capitalize text-2xl leading-[32.68px] font-semibold text-black">
                        Footer
                    </h3>
                    <div className="pt-4"></div>

                    <p className=" text-base leading-[21.79px] font-normal text-[#676767]">
                        Add HTML and JavaScript snippets to the footer of
                        published collection site pages
                    </p>
                    <div className="pt-4"></div>

                    <TrackersEditor
                        data={data}
                        type={"footer"}
                        refetch={refetch}
                    />

                    <div className="pb-[45px]"></div>
                </div>
            </div>
        </div>
    );
};

export default Trackers;
