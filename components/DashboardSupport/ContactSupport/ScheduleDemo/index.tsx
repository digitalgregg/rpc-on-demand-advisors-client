import React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ScheduleDemo = () => {
    const router = useRouter();

    useCalendlyEventListener({
        // onProfilePageViewed: () => console.log("onProfilePageViewed"),
        // onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        // onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => {
            toast.success("Please check your email for more information.");
            setTimeout(() => {
                router.push("/dashboard/support/contact-support");
            }, 4000);
        },
    });
    return (
        <>
            <InlineWidget
                url="https://calendly.com/greggMckee"
                styles={{
                    height: "720px",
                    minWidth: "320px",
                    marginBottom: "30px",
                }}
            />
        </>
    );
};
export default ScheduleDemo;
