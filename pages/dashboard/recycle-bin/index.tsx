import React from 'react'
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import Card from '../../../components/RecycleBin/Card';


const index = () => {

  return (
    <DashboardLayout>
        <div className='bg-white_secondary h-full w-full py-[35px]'>
            <h2 className=' font-bold text-2xl leading-[33px] text-[#101010] mb-[20px]'>Recycle Bin</h2>
            <div className=' flex flex-col gap-[30px]'>
                {
                    [0,1,2,3,4,5,6,7,8,9].map((i:any)=>(
                        <Card key={i} timeDate="19m (Permanently deleted 30 days)" title="Give your blog the perfect" link="www.google.com" url="/demo/aaa.jpg" />

                    ))
                }
            </div>
        </div>
    </DashboardLayout>
  )
}

export default index