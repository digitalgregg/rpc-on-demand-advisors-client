import React from "react";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import ConfirmPaymentComponent from "../../../../components/Dashboard/BillingPage/ConfirmPaymentComponent";
import PaymentDetailsProvider from "../../../../components/Context/PaymentDetailsProvider";

function ConfirmPayment() {
    return (
        <DashboardLayout>
            <PaymentDetailsProvider>
                <ConfirmPaymentComponent />
            </PaymentDetailsProvider>
        </DashboardLayout>
    );
}

export default ConfirmPayment;
