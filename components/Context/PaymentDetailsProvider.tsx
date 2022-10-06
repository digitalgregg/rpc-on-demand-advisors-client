import React, { createContext, ReactNode, useContext } from "react";

type PaymentDetailsType = {};

const PaymentDetailsContext = createContext<PaymentDetailsType | null>(null);

export const GetPaymentDetails = () =>
    useContext(PaymentDetailsContext) as PaymentDetailsType;

function PaymentDetailsProvider({ children }: { children: ReactNode }) {
    return (
        <PaymentDetailsContext.Provider value={{}}>
            {children}
        </PaymentDetailsContext.Provider>
    );
}

export default PaymentDetailsProvider;
