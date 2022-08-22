import React from 'react';
import { activityFakeData } from '../fake';

const RecentActivityStatus = () => {
    const fakeData = activityFakeData ;
    return (
        <div style={{boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)"}} className="w-[280px] h-auto bg-[#FFFFFF] rounded-[4px]">
           <div className="">
            <div className="flex items-center justify-between py-[20px] px-[20px]">
                <h3 className="text-[#000000] font-semibold text-[18px] leading-[25px]">Recent Activity</h3>
                <p className="text-primary font-semibold text-[12px]">View All</p>
            </div>
            <hr className="w-[100%] h-[4px] bg-primary text-primary border-0"/>
            {/* second part */}
            {fakeData.length === 0 && <p className='py-2 text-center'>No activity found</p>}
            {/* map all activity  */}
            {
                fakeData.map((item:any) => (
                    <div style={{borderBottom: "1px solid lightgray"}} key={item.id} className="px-[20px] py-[10px] ">
                        <div className="">
                            <h3 className="text-[16px] font-semibold text-[#222222]">{item.title}</h3>
                            <p className="text-[12px] text-[#676767] font-normal leading-[16.34px] mt-[2px] mb-[10px]">{item.date}</p>
                            <p className="text-[#000000] text-[14px] font-normal leading-[19.7px]">{item.status}</p>
                        </div>
                    </div>
                ))
            }
           </div>
        </div>
    );
};

export default RecentActivityStatus;