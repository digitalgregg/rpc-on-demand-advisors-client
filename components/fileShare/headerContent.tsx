import Image from "next/image";

const HeaderContent = () => {
    return (
        <div className=" max-w-[1200px] mx-auto pt-[87px]">
            <div className=" bg-White rounded w-full h-[120px]">
                <div className=" transform -translate-y-12">
                    <div className="flex justify-center items-center flex-col">
                        <div className="border-[8px] border-inherit flex justify-center items-center  border-White w-[108px] h-[108px] bg-red-600  rounded-full">
                            <div className=" max-w-[43px]">
                                <Image
                                    width={43}
                                    height={25}
                                    src="/demo/DG.png"
                                    alt="logo"
                                />
                            </div>
                        </div>
                        <h1 className=" text-black_primary text-center text-[24px] leading-[33px] font-semibold">
                            Digial gregg
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;
