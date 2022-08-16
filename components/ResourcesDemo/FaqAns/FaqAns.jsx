/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import SectionTab from "../../Shared/SectionTab";
import SectionContent from "../../Shared/SectionContent";
const expandContentData = [
    {
        title: "Advanced search built for sales and marketing",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Turn sales collateral into sites that convert",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "(Content) Details that matter",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Content feedback for informed decisions",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Closed-loop feedback with sales requests",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Advanced search built for sales and marketing",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
];
const FaqAns = () => {
    const [expandContent, setExpandContent] = useState(0);
    return (
        <div className="bg-[#fff] pt-[118px] sm:pt-[200px] lg:pt-[320px] xl:pt-[340px]">
            <div className="container mx-auto ">
                {expandContentData.map((v, i) => (
                    <SectionContent
                        key={i}
                        count={"0" + (i + 1)}
                        title={v.title}
                        description={v.description}
                        isExpand={expandContent == i ? true : false}
                        border={
                            expandContentData.length == i + 1 ? false : true
                        }
                        onClick={() =>
                            setExpandContent(expandContent == i ? -1 : i)
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default FaqAns;
