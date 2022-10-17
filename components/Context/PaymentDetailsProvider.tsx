import { useAtom } from "jotai";
import React, { createContext, ReactNode, useContext } from "react";
import { useQuery } from "react-query";
import secureLocalStorage from "react-secure-storage";
import api from "../../api";
import { PaymentMethod } from "../../state";
import { PMDTYPE } from "../../utils/interfaces";

type PaymentDetailsType = {
    data: PMDTYPE;
    isLoading: boolean;
    isSuccess: boolean;
    refetch: () => any;
};

const PaymentDetailsContext = createContext<PaymentDetailsType | null>(null);

export const GetPaymentDetails = () =>
    useContext(PaymentDetailsContext) as PaymentDetailsType;

function PaymentDetailsProvider({ children }: { children: ReactNode }) {
    const [paymentMethod] = useAtom(PaymentMethod);

    const { data, isLoading, isSuccess, refetch } = useQuery(
        ["payment-method", paymentMethod],
        () => api.get(`/api/payment/method/${paymentMethod.id}`),
        {
            select: (res) => res.data,
            retry: false,
            refetchOnWindowFocus: false,
            enabled: paymentMethod.id ? true : false,
        }
    );

    return (
        <PaymentDetailsContext.Provider
            value={{ data, isLoading, isSuccess, refetch }}
        >
            {children}
        </PaymentDetailsContext.Provider>
    );
}

export default PaymentDetailsProvider;
