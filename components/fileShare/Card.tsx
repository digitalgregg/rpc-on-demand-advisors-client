/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { ContentDataType } from "../../api-call/ContentApi";
import { isImage } from "../Library/FileType";
type CardItemType = {
    content: ContentDataType;
};
const Card = ({ content }: CardItemType) => {
    return (
        <div className="max-w-[403.33px] col-span-1">
            <div
                className="max-w-[403.33px] p-[15px] h-[350px] rounded bg-White "
                style={{ boxShadow: "2px 2px 18px rgba(0, 0, 0, 0.08)" }}
            >
                <div className=" flex flex-col h-full justify-between">
                    <div>
                        <div className=" relative w-[100%] h-[155px] ">
                            <img
                                src={
                                    isImage(content.thumbnail)
                                        ? content.thumbnail
                                        : "/assets/no_preview.jpg"
                                }
                                alt=""
                                className="object-cover h-full"
                            />
                        </div>

                        <p className="text-line-clamp pt-[10px] max-w-[403.33px] text-sm leading-[19px] font-semibold text-black_primary">
                            {content.title}
                        </p>
                    </div>
                    <Link href={`/f/${content.short_url}`}>
                        <button className="hover-transition bg-primary border border-solid border-primary hover:bg-transparent hover:text-primary w-full h-[40px] rounded text-White font-semibold text-base leading-4">
                            View content
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
