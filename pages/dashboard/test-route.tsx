import { useAtom } from "jotai";
import Script from "next/script";
import React, { useEffect } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

function TestRoute() {
    useEffect(() => {
        if (
            Notification.permission === "default" ||
            Notification.permission === "denied"
        ) {
            Notification.requestPermission();
        }
    }, []);

    function sendNotification(message: string, user: string) {
        const notification = new Notification("New message from Open Chat", {
            icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
            body: `@${user}: ${message}`,
        });
        notification.onclick = () =>
            function () {
                window.open("http://localhost:3000/chat");
            };
        console.log(notification);
    }

    function notifyMe() {
        if (!("Notification" in window)) {
            // Check if the browser supports notifications
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
            // Check whether notification permissions have already been granted;
            // if so, create a notification
            const notification = new Notification("Hi there!");
            // …
        } else if (Notification.permission !== "denied") {
            // We need to ask the user for permission
            Notification.requestPermission().then((permission) => {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    const notification = new Notification("Hi there!");
                    // …
                }
            });
        }

        // At last, if the user has denied notifications, and you
        // want to be respectful there is no need to bother them anymore.
    }

    const handleNotification = () => {
        notifyMe();
    };
    return (
        <DashboardLayout>
            <button onClick={notifyMe}>Click Me</button>
        </DashboardLayout>
    );
}

export default TestRoute;
