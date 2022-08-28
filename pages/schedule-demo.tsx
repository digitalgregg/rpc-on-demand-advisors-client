import React from "react";
import Layout from "./../components/Shared/Layout/Layout";
import { InlineWidget , useCalendlyEventListener} from "react-calendly";
import {useRouter} from "next/router";
import { toast } from "react-toastify";

const ScheduleDemo = () => {
    const router = useRouter();

    useCalendlyEventListener({
        // onProfilePageViewed: () => console.log("onProfilePageViewed"),
        // onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        // onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => {
            toast.success("Please check your email for more information.")
            setTimeout(() => {
                router.push("/")
            }, 4000)
        },
      });
  return (
    <div className="bg-[#F8F8F8]">
      <Layout>
        <div className="">
          <InlineWidget
            url="https://calendly.com/greggMckee"
          />
        </div>
      </Layout>
    </div>
  );
};

export default ScheduleDemo;
