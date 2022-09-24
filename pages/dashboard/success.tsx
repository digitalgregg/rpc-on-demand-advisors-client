import React from "react";
import { useQuery } from "react-query";
import api from "./../../api/index";
import { useRouter } from "next/router";

const Success = () => {
    const router = useRouter();
    const session = router.query;
    const sessionId = session.session_id;
    console.log(session.session_id, "session id ");
    const { data, isLoading } = useQuery(
        ["get-checkout-session", sessionId],
        () =>
            api.get(`http://localhost:8080/api/payment?sessionId=${sessionId}`),
        { enabled: !!sessionId }
    );
    console.log(data, "data...");
    return <div>this is success page...</div>;
};

export default Success;
