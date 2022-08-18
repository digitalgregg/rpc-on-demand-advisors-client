import React from "react";
import Card from "./Card";

const Tutorial = () => {
    return (
        <div>
            <div className=" my-[30px]">
                <h1 className="text-[32px] leading-[44px] truncate">
                    Best Practices to get started:
                </h1>
            </div>

            <div className=" flex flex-wrap justify-center gap-[21px]">
              {
                [1,2,3].map((i)=>(
                  <Card key={i} />
                ))
              }
            </div>
        </div>
    );
};

export default Tutorial;
