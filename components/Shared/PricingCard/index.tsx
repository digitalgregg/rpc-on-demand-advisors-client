/* eslint-disable @next/next/no-img-element */
import React from "react";

import { PricingCardType } from "../../PricingPage/data";

const PricingCard = ({
    data,
    isAnnual,
    className,
    isSmallLg,
    isSmallXl,
}: {
    data: PricingCardType;
    isAnnual: boolean;
    className?: string;
    isSmallLg?: boolean;
    isSmallXl?: boolean;
}) => {
    return (
        <div
            className={
                " bg-[#fff] p-[20px_35.5px] xl:p-[20px_35.5px] md:p[20px_70.5px] lg:p-[30.77px_35.6px] md:hover:shadow-[2px_2px_16px_rgba(0,0,0,0.08)] md:hover:border md:hover:border-[#E51937] rounded-[4px] h-[802px] xl:h-[802px] sm:w-[330px] xl:w-[330px]  md:w-[400px] md:px-[50px] flex flex-col justify-between group transition-all duration-400 lg:h-[720px]" +
                " " +
                className
            }
        >
            <div>
                <div
                    className={`text-[32px] font-semibold leading-[43.5px] text-[#000805] ${
                        isSmallLg &&
                        "lg:text-[27.6px] lg:leading-[37.6px] xl:text-[32px] xl:leading-[43.58px]"
                    }${
                        isSmallXl &&
                        "xl:text-[27.6px] xl:leading-[37.6px] 2xl:text-[32px] 2xl:leading-[43.5px]"
                    } `}
                >
                    {data.name}
                </div>
                <div
                    className={`pt-2 ${isSmallLg && "lg:pt-[6.9px] xl:pt-2"} ${
                        isSmallXl && "xl:pt-[6.9px] 2xl:pt-2"
                    }  `}
                ></div>

                <div
                    className={`text-sm ${
                        isSmallLg &&
                        "lg:text-[12.1px] lg:leading-[16.47px] xl:text-[14px] xl:leading-[19.07px]"
                    }  ${
                        isSmallXl &&
                        "xl:text-[12.1px] xl:leading-[16.47px] 2xl:text-[14px] 2xl:leading-[19.07px]"
                    }  font-semibold leading-[19.07px] text-[#222222]  2xl:w-[60%]`}
                >
                    {data.description}
                </div>
                <div
                    className={`pt-4 xl:pt-4 ${
                        isSmallLg && "lg:pt-[13.8px] xl:pt-4 "
                    }  ${isSmallXl && "xl:pt-[13.8px] 2xl:pt-4"} `}
                ></div>
                {data.monthPrice != undefined ? (
                    <div
                        className={`text-sm font-semibold leading-[19.07px] text-[#222222] ${
                            isSmallLg &&
                            "lg:text-[12.1px] lg:leading-[16.47px] xl:text-[14px] xl:leading-[19.07px]"
                        } ${
                            isSmallXl &&
                            "xl:text-[12.1px] xl:leading-[16.47px]  2xl:text-[14px] 2xl:leading-[19.07px]"
                        }  `}
                    >
                        <span
                            className={`text-[30px] leading-[40.85px] font-bold ${
                                isSmallLg &&
                                "lg:text-[25.92px] lg:leading-[35.3px]  xl:text-[30px] xl:leading-[40.85px]"
                            }   ${
                                isSmallXl &&
                                "xl:text-[25.92px] xl:leading-[35.3px]  2xl:text-[30px] 2xl:leading-[40.85px]"
                            } `}
                        >
                            $
                        </span>
                        <span
                            className={`text-[40px] leading-[54.4px] font-bold mr-[5px]  ${
                                isSmallLg &&
                                "lg:text-[34.56px] lg:leading-[47.07px] xl:text-[40px] xl:leading-[54.47px]"
                            }  ${
                                isSmallXl &&
                                "xl:text-[34.56px] xl:leading-[47.07px]  2xl:text-[40px] 2xl:leading-[54.47px]"
                            }  `}
                        >
                            {isAnnual ? data.annualPrice : data.monthPrice}
                        </span>
                        /Per Month {isAnnual && "(Save 15%)"}
                    </div>
                ) : (
                    <div>
                        <div
                            className={`text-[32px] font-bold text-[#000805] ${
                                isSmallLg &&
                                "lg:text-[27.65px] lg:leading-[37.66px] xl:text-[32px] xl:leading-[43.58px]"
                            }  ${
                                isSmallXl &&
                                "xl:text-[27.65px] xl:leading-[37.66px]  2xl:text-[32px] 2xl:leading-[43.58px]"
                            }  `}
                        >
                            Contact Us
                        </div>
                        <div
                            className={`text-sm leading-[19.07px] font-semibold text-[#676767] ${
                                isSmallLg &&
                                "lg:text-[12.1px] lg:leading-[16.47px] xl:text-[14px] xl:leading-[19.07px]"
                            }  ${
                                isSmallXl &&
                                "xl:text-[12.1px] xl:leading-[16.47px]  2xl:text-[14px] 2xl:leading-[19.07px]"
                            }  `}
                        >
                            Annual Plans
                        </div>
                    </div>
                )}

                <div
                    className={`pt-4 ${
                        isSmallLg && "lg:pt-[13.8px] xl:pt-4"
                    }  ${isSmallXl && "xl:pt-[13.8px] 2xl:pt-4"}  `}
                ></div>

                <div
                    className={`text-[32px] font-semibold leading-[43.5px] text-[#E51937] ${
                        isSmallLg &&
                        "lg:text-[27.65px] lg:leading-[37.66px] xl:text-[32px] xl:leading-[43.5px]"
                    } ${
                        isSmallXl &&
                        "xl:text-[27.65px] xl:leading-[37.66px] 2xl:text-[32px] 2xl:leading-[43.5px]"
                    }  `}
                >
                    Features
                </div>
                <div
                    className={`pt-4 ${
                        isSmallLg && "lg:pt-[13.8px] xl:pt-4"
                    }  ${isSmallXl && "xl:pt-[13.8px] 2xl:pt-4 "} `}
                ></div>

                <div
                    className={`flex flex-col gap-y-5 ${
                        isSmallLg && "lg:gap-y-[17.2px]  xl:gap-y-5"
                    }   ${isSmallXl && "xl:gap-y-[17.2px]  2xl:gap-y-5"} `}
                >
                    {data.featuresList.map((v, i) => (
                        <div key={i} className="flex items-center gap-x-[6px]">
                            <img
                                src="/assets/pricing-page/check.svg"
                                alt=""
                                className={`w-4 h-4 ${
                                    isSmallLg &&
                                    "lg:w-[13.83px] lg:h-[13.83px] xl:w-4 xl:h-4"
                                }  ${
                                    isSmallXl &&
                                    "xl:w-[13.83px] xl:h-[13.83px]  2xl:w-4 2xl:h-4"
                                }  `}
                            />
                            <div
                                className={`text-base leading-[21.79px] font-semibold text-[#222222] ${
                                    isSmallLg &&
                                    "lg:text-[13.83px] lg:leading-[18.83px] xl:text-[16px] xl:leading-[21.79px]"
                                } ${
                                    isSmallXl &&
                                    "xl:text-[13.83px] xl:leading-[18.83px]   2xl:text-[16px] 2xl:leading-[21.79px]"
                                }  `}
                            >
                                {v}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className={`rounded-[4px] p-[11px_62px] ${
                        isSmallLg && "lg:p-[9.5px_53.4px]  xl:p-[11px_62px] "
                    }  ${
                        isSmallXl && "xl:p-[9.5px_53.4px]  2xl:p-[11px_62px]"
                    }  border border-[#E51937]  text-base font-semibold leading-[21.79px] transition-all duration-400 text-[#E51937] md:group-hover:bg-[#E51937] md:group-hover:text-[#fff] `}
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default PricingCard;
