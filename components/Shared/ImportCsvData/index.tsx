import React from "react";

function ImportCsvData({ data }: { data: any[] }) {
    return (
        <div>
            <div className="pt-[30px]"></div>
            <div className="grid grid-cols-8 text-white rounded gap-[5px] bg-[#222] p-[20px_20px]">
                <div className="text-sm">Url</div>
                <div className="text-sm">Title</div>
                <div className="text-sm">Content Type</div>
                <div className="text-sm">Funnel Stage</div>
                <div className="text-sm">Tags</div>
                <div className="text-sm">Product</div>
                <div className="text-sm">Industry</div>
                <div className="text-sm">Region</div>
            </div>
            {data.map((v, i) => (
                <div
                    key={i}
                    className="grid grid-cols-8  gap-[5px] border-b border-[#d5d5d5] text-black p-[20px_20px]"
                >
                    <div className="text-sm line-clamp-1">{v.url}</div>
                    <div className="text-sm line-clamp-1">{v.title}</div>
                    <div className="text-sm line-clamp-1">
                        {v["content type"]}
                    </div>
                    <div className="text-sm line-clamp-1">
                        {v["funnel stage"]}
                    </div>
                    <div className="text-sm line-clamp-1">{v.tags}</div>
                    <div className="text-sm line-clamp-1">{v.product}</div>
                    <div className="text-sm line-clamp-1">{v.industry}</div>
                    <div className="text-sm line-clamp-1">{v.region}</div>
                </div>
            ))}
        </div>
    );
}

export default ImportCsvData;
