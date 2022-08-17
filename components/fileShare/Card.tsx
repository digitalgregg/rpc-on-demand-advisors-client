import Image from "next/image";
type CardItemType = {
    pre: string;
};
const Card = ({ pre }: CardItemType) => {
    return (
        <div className="max-w-[403.33px] col-span-1">
            <div
                className="max-w-[403.33px] p-[15px] h-[350px] rounded bg-White "
                style={{ boxShadow: "2px 2px 18px rgba(0, 0, 0, 0.08)" }}
            >
                <div className=" flex flex-col h-full justify-between">
                    <div>
                        <div className=" relative w-[100%] h-[155px] ">
                            <Image
                                layout="fill"
                                src="/demo/aaa.jpg"
                                alt="images"
                                className=" object-cover"
                            />
                        </div>

                        <p className="pt-[10px] max-w-[403.33px] text-sm leading-[19px] font-semibold text-black_primary">
                            {pre}
                        </p>
                    </div>

                    <button className=" bg-primary w-full h-[40px] rounded text-White font-semibold text-base leading-4">
                        View content
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
