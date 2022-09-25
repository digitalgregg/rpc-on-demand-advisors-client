import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import secureLocalStorage from "react-secure-storage";
import usePlanData from "../../../hooks/usePlanData";
import LoadingAnimation from "../../../components/Shared/LoadingAnimation";
import LodingAnimation from "../../../components/Shared/LodingAnimation";

const CheckoutForm = () => {
    const planItem: any = secureLocalStorage.getItem("plan");
    const [loadingButoon, setLoadingButton] = useState(false);
    const [priceId, setPriceId] = useState("");

    const router = useRouter();

    useEffect(() => {
        if (planItem?.name === "Basic" && planItem?.isAnnual === false) {
            console.log("monthly basic packge");
            setPriceId("price_1LjUL2CX3jxDeEgKKbvieqjS");
        } else if (planItem?.name === "Basic" && planItem?.isAnnual === true) {
            setPriceId("price_1LjUMJCX3jxDeEgK7Vgum0oi");
            console.log("yearly basic packge");
        } else if (planItem?.name === "Lite" && planItem?.isAnnual === false) {
            setPriceId("price_1Lle7kCX3jxDeEgKjoLF0rk1");
            console.log("free trail lite packge");
        }
        if (!planItem) {
            router.push(`/dashboard/billing/subscription-plan`);
        }
    }, [planItem]);

    const handleSubmit = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`,
            {
                method: "POST",
                body: JSON.stringify({ priceId }),
                headers: { "Content-Type": "application/json" },
            }
        );
        const session = await response.json();
        router.push(session.url);
        setLoadingButton(true);
    };
    return (
        <div>
            <button
                onClick={handleSubmit}
                className="mt-[30px] h-[58px] hover:bg-primary bg-[#ffffff] border border-primary font-bold w-full rounded-[4px] text-[16px] leading-[58px] text-primary hover:text-[#FFFFFF]"
            >
                {loadingButoon === true ? (
                    <span>
                        <LodingAnimation color="white" />
                    </span>
                ) : (
                    "Checkout"
                )}
            </button>
        </div>
    );
};

export default CheckoutForm;
