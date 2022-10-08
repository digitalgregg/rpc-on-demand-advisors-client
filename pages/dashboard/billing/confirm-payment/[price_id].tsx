import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import api from "../../../../api";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";

function ConfirmPayment() {
    const router = useRouter();
    const { price_id } = router.query;
    const {} = useQuery(
        ["fetch-subscription", price_id],
        () => api.get("/api/payment/subscription/" + price_id),
        {
            enabled: !!price_id,
            select: (res) => res.data,
            onError: (err) => {
                router.push("/dashboard/billing/subscription-plan");
            },
            retry: false,
        }
    );
    console.log(price_id);
    return (
        <DashboardLayout>
            <div></div>
        </DashboardLayout>
    );
}

export default ConfirmPayment;
