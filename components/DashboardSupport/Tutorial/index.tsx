import React from "react";
import Card from "./Card";

const Tutorial = () => {
    return (
        <div>
            <div className="my-[30px]">
                <h1 className="xs:text-[16px] xs:leading-[22px] sm:text-[18px] sm:leading-[25px] lg:text-[24px] lg:leading-[33px] 2xl:text-[32px] 2xl:leading-[44px] text-[#101010] font-bold">
                    Best Practices to get started:
                </h1>
            </div>

            <div className="grid xs:grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 justify-center gap-[21px]">
              {
                [1,2,3,4].map((i)=>(
                  <Card key={i} />
                ))
              }
            </div>
        </div>
    );
};

export default Tutorial;
