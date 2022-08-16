import React from 'react';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header />
            {/* image section  */}
                <img src="/img/headerThumb.svg" alt="" className='mx-auto xs:w-[289px] xs:h-[173px] sm:w-[575px] sm:h-[340.33px] md:w-[575.18px] md:h-[340.33px] lg:w-[855.81px] lg:h-[507.53px]  xs:mt-[-98px] sm:mt-[-200px] lg:mt-[-345px] xl:w-[985.17px] xl:h-[583.72px] xl:mt-[-338px] 2xl:w-[986px] 2xl:h-[584.7px] 3xl:w-[1130.46px] 3xl:h-[669.79px] 4xl:h-[677px]'/>
            
        </div>
    );
};

export default Home;