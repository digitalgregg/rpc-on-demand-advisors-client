import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { io } from "socket.io-client";
import { signupState } from "../../state";

const SOCKET_SERVER =
    process.env.NEXT_PUBLIC_SOCKET_URL || "ws://localhost:8080";

function useNotification() {
    const [userData] = useAtom(signupState);
    useEffect(() => {
        const websocket = new WebSocket(SOCKET_SERVER);
        websocket.addEventListener("message", (event) => {
            const data = JSON.parse(event.data);
            if (data.user_id === userData._id) {
                notifyUser(data, userData._id);
            }
        });
    }, []);
}

function notifyUser(data: any, user_id: string) {
    if (!("Notification" in window)) {
        toast.success("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        if (data.user_id === user_id) {
            notify(data);
        }
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
            if (data.user_id === user_id) {
                notify(data);
            }
        });
    }
}

type NotifyType = {
    recipient: string;
    views: string;
    content_id: string;
};

const notify = (data: NotifyType) => {
    const notification = new Notification(
        `${data.recipient} viewed your content`,
        {
            icon: "/icon/logo.svg",
            body: `Your content is just visited by the recipient. Total views: ${data.views} times`,
        }
    );
    notification.addEventListener("click", () => {
        window.open(
            `http://localhost:3000/dashboard/contents/view-details/${data.content_id}`
        );
    });
};
export default useNotification;
