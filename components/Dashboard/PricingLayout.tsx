import React, { ReactNode } from "react";
import PaymentIcon from "../CustomIcons/PaymentIcon";
import PlanIcon from "../CustomIcons/PlanIcon";
import DashboardLayout from "./DashboardLayout";
import { NavLinkComponent } from "./NavLink";

function PricingLayout({ children }: { children: ReactNode }) {
    return (
        <DashboardLayout>
            <div className="">
                <div className="">
                    <div className="flex flex-col sm:flex-row gap-5">
                        <PricingTabItem
                            href="/dashboard/billing/subscription-plan"
                            text="Subscription Plan"
                            icon={(active) => (
                                <PlanIcon color={active ? "#fff" : "#E51937"} />
                            )}
                        />
                        <PricingTabItem
                            href="/dashboard/billing/payment-details"
                            text="Payment Details"
                            icon={(active) => (
                                <PaymentIcon
                                    color={active ? "#fff" : "#E51937"}
                                />
                            )}
                        />
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </DashboardLayout>
    );
}

type PricingTabItemType = {
    href: string;
    text: string;
    icon: (active: boolean) => ReactNode;
};

function PricingTabItem({ href, text, icon }: PricingTabItemType) {
    return (
        <NavLinkComponent
            href={href}
            component={(isActive) => (
                <div
                    className="border border-[#E51937] rounded-[4px] h-[54px] flex px-[10%] sm:px-[20px] xs:px-[90px] items-center gap-[10px] cursor-pointer"
                    style={{ background: isActive ? "#E51937" : "none" }}
                >
                    <div>{icon(isActive)}</div>
                    <div
                        className="text-sm leading-[19.07px] font-semibold"
                        style={{ color: isActive ? "#fff" : "#E51937" }}
                    >
                        {text}
                    </div>
                </div>
            )}
        />
    );
}

export default PricingLayout;
