/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ReducerBranding } from "../../api-call/BrandingApi";

const HeaderContent = ({ data }: { data: ReducerBranding }) => {
    return (
        <div className=" max-w-[1200px] mx-auto pt-[87px]">
            <div className=" bg-White rounded w-full h-[120px]">
                <div className=" transform -translate-y-12">
                    <div className="flex justify-center items-center flex-col">
                        <div className="border-[8px] border-inherit flex justify-center items-center  border-White w-[108px] h-[108px] overflow-hidden rounded-full">
                            <img
                                width={108}
                                height={108}
                                src={data.branding_logo}
                                alt="brand logo"
                                className="rounded-full"
                            />
                        </div>
                        <h1 className=" text-black_primary text-center text-[24px] leading-[33px] font-semibold">
                            {data.site_title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;
