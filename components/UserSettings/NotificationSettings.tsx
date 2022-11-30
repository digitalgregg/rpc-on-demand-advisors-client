import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../api";
import { getLocal } from "../../utils/localStorage";
import ToggleButton from "../Shared/ToggleButton";
import { useAtom } from "jotai";
import {
    NotificationWebAtom,
    NotificationEmailAtom,
    team_state,
} from "../../state";
import { useQuery } from "react-query";

const NotificationSettings = () => {
    const [teamData] = useAtom(team_state);

    const [toggleBtnWeb, setToogleBtnWeb] = useState<boolean>(false);
    const [toggleBtnEmail, setToggleBtnEmail] = useState<boolean>(false);

    const { data, isLoading, isError, refetch } = useQuery(
        "get-notification",
        () =>
            api.get(
                "/api/notification?team_id=" +
                    teamData.id +
                    "&user_id=" +
                    teamData.user_id
            ),
        {
            select: (response) => response.data,
            retry(failureCount, error: any) {
                if (error.response.data.success === false) {
                    return false;
                } else {
                    return true;
                }
            },
            onSuccess: (data) => {
                setToogleBtnWeb(data.web_notification);
                setToggleBtnEmail(data.email_notification);
            },
            onError(err) {
                console.log(err);
            },
        }
    );

    const handleWebToggle = async () => {
        setToogleBtnWeb(!toggleBtnWeb);

        if (!toggleBtnWeb) {
            if (!("Notification" in window)) {
                console.log(
                    "This browser does not support desktop notification"
                );
            } else if (Notification.permission !== "granted") {
                Notification.requestPermission();
            }
        }
        const apiObj = {
            team_id: teamData.id,
            user_id: teamData.user_id,
            role_type: teamData.role,
            web_notification: !toggleBtnWeb,
        };
        try {
            await api.put("/api/notification/" + teamData.user_id, apiObj);
            toast.success("Notification updated successfully");
            refetch();
        } catch (err) {
            setToogleBtnWeb(!toggleBtnWeb);
            console.log(err);
        }
    };
    const handleEmailToggle = async () => {
        setToggleBtnEmail(!toggleBtnEmail);
        const apiObj = {
            team_id: teamData.id,
            user_id: teamData.user_id,
            role_type: teamData.role,
            email_notification: !toggleBtnEmail,
        };
        try {
            await api.put("/api/notification/" + teamData.user_id, apiObj);
            toast.success("Notification updated successfully");
            refetch();
        } catch (err) {
            setToggleBtnEmail(!toggleBtnEmail);
            console.log(err);
        }
    };

    return (
        <div className="bg-[#FFFFFF] p-[20px]">
            <h3 className="text-semibold text-[18px] leading-[25px] mb-[26px] text-[#000000]">
                Notification Settings
            </h3>
            <div className="flex border border-[#9E9E9E] xs:px-[18px] xs:py-[16px] 3xl:px-[15px] 3xl:py-[24.5px] w-[100%] items-center mb-[26px] rounded-[8px]">
                <h4 className="flex-1 font-normal text-[16px] text-[#000000]">
                    Web notification
                </h4>
                <ToggleButton
                    toggle={toggleBtnWeb}
                    handleToggle={handleWebToggle}
                    className={`${
                        toggleBtnWeb === false ? "bg-[#DEDEDE]" : ""
                    }`}
                />
            </div>
            <div className="flex border border-[#9E9E9E] xs:px-[18px] xs:py-[16px] 3xl:px-[15px] 3xl:py-[24.5px] w-[100%] items-center rounded-[8px]">
                <h4 className="flex-1 font-normal text-[16px] text-[#000000]">
                    Email notification
                </h4>
                <ToggleButton
                    toggle={toggleBtnEmail}
                    handleToggle={handleEmailToggle}
                    className={`${
                        toggleBtnEmail === false ? "bg-[#DEDEDE]" : ""
                    }`}
                />
            </div>
        </div>
    );
};

export default NotificationSettings;

// const FellowComponent = () => {
//     const [buttonItemClick, setButtonItemClick] = useState<number>();
//     const [userItemIsActive, setUserItemIsActive] = useState<boolean>(false);
//     const [toggleBtnWeb, setToggleBtnWeb] = useAtom(NotificationWebAtom);
//     const [toggleBtnEmail, setToggleBtnEmail] = useAtom(NotificationEmailAtom);
//     const [webAtomState, setWebAtomState] = useAtom(NotificationWebAtom);
//     const [emailAtomState, setEmailAtomState] = useAtom(NotificationEmailAtom);
//     const teamId = getLocal("team");
//     console.log(toggleBtnWeb, ".....fast....web");
//     console.log(toggleBtnEmail, ".....fast....email");
//     const pushFunc = (e: number) => {
//         if (e === 1) {
//             if (toggleBtnWeb === true) setToggleBtnWeb(false);
//             if (toggleBtnWeb === false) setToggleBtnWeb(true);

//             console.log(toggleBtnWeb, ".......web");
//         }
//         if (e === 2) {
//             if (toggleBtnEmail === true) setToggleBtnEmail(false);
//             if (toggleBtnEmail === false) setToggleBtnEmail(true);

//             console.log(toggleBtnEmail, "......web");
//         }

//         const apiPostData = {
//             user_id: teamId?.user_id,
//             team_id: teamId?.id,
//             email_notification: toggleBtnEmail,
//             web_notification: toggleBtnWeb,
//             role_type: teamId?.role,
//         };
//         api.post(
//             `https://oda-center.herokuapp.com/api/notification`,
//             apiPostData
//         ).then((res) => {
//             toast.success(res.data.message);
//         });
//         console.log(e, "...post..fun");
//     };
//     const putFunc = (e: number) => {
//         if (e === 1) {
//             if (toggleBtnWeb === true) setToggleBtnWeb(false);
//             if (toggleBtnWeb === false) setToggleBtnWeb(true);
//             console.log(toggleBtnWeb, ".........email");
//         }
//         if (e === 2) {
//             if (toggleBtnEmail === true) setToggleBtnEmail(false);
//             if (toggleBtnEmail === false) setToggleBtnEmail(true);

//             console.log(toggleBtnEmail, "...........email");
//         }
//         const apiputData = {
//             email_notification: toggleBtnEmail,
//             web_notification: toggleBtnWeb,
//         };
//         alert("hi");
//         api.put(
//             `https://oda-center.herokuapp.com/api/notification/${teamId?.user_id}`,
//             apiputData
//         ).then((res) => {
//             if (res.status === 200) {
//                 toast.success(res.data.message);
//             }
//             if (res.status === 204) {
//                 toast.success("no content get");
//             }
//         });
//         console.log(e, "...put..fun");
//     };
//     useEffect(() => {
//         api.get(
//             `/api/notification?user_id=${teamId?.user_id}&team_id=${teamId?.id}`
//         ).then((val: any) => {
//             const getData = val?.data;
//             getData.filter((value: any) => {
//                 // eikhane
//                 console.log(value);
//                 if (
//                     teamId?.user_id === value?.user_id &&
//                     teamId?.id === value?.team_id
//                 ) {
//                     setUserItemIsActive(true);
//                     setToggleBtnWeb(value?.web_notification);
//                     setToggleBtnEmail(value?.email_notification);
//                 }
//             });
//         });
//     }, []);
//     return <div></div>;
// };

// const [team_idBoolean, setTeam_idBoolean] = useState<boolean>(false);
// const [web_notificationToggle, setWeb_notificationToggle] =
//     useState<any>(false);
// const [email_notificationToggle, setEmail_notificationToggle] =
//     useState<any>(false);
// const [webAtomState, setWebAtomState] = useAtom(NotificationWebAtom);
// const [emailAtomState, setEmailAtomState] = useAtom(NotificationEmailAtom);
// const teamId = getLocal("team");
// const [changeWeb, setChangeWeb] = useState<any>();
// const [changeEmail, setChangeEmail] = useState<any>();
// console.log(changeWeb, ".......email_notification");
// console.log(changeEmail, ".......web_notification");
// // console.log(web_notificationToggle, ".......web_notificationToggle");
// // console.log(email_notificationToggle, ".......email_notificationToggle");
// useEffect(() => {
//     const getApiFun = () => {
//         api.get(
//             `/api/notification?user_id=${teamId?.user_id}&team_id=${teamId?.id}`
//         ).then((value) => {
//             return value.data.filter((e: any) => {
//                 if (
//                     e?.team_id === teamId?.id &&
//                     e.user_id === teamId?.user_id
//                 ) {
//                     setTeam_idBoolean(true);
//                     setChangeEmail(e?.email_notification);
//                     setChangeWeb(e?.web_notification);
//                     setEmail_notificationToggle(e?.email_notification);
//                     setWeb_notificationToggle(e?.web_notification);
//                 }
//             });
//         });
//     };
//     getApiFun();
// }, [
//     setTeam_idBoolean,
//     teamId?.id,
//     teamId?.user_id,
// ]);

// const apiToggleFun = (e: any) => {
//     if (e === "web_notification") {
//         // setWeb_notificationToggle(!web_notificationToggle);
//         if (changeWeb === false) {
//             setWeb_notificationToggle(true);
//         } else {
//             setWeb_notificationToggle(false);
//         }
//         setChangeWeb(web_notificationToggle);
//         console.log(changeWeb, "......web_notification........");
//     }
//     if (e === "email_notification") {
//         // setEmail_notificationToggle(!email_notificationToggle);
//         if (changeEmail === false) {
//             setEmail_notificationToggle(true);
//         } else {
//             setEmail_notificationToggle(false);
//         }
//         setChangeEmail(email_notificationToggle);
//         console.log(changeEmail, "......email_notification........");
//     }
//     // setWebAtomState(web_notificationToggle);
//     // setEmailAtomState(email_notificationToggle);
//     const apiPostData = {
//         user_id: teamId?.user_id,
//         team_id: teamId?.id,
//         email_notification: changeEmail,
//         web_notification: changeWeb,
//         role_type: teamId?.role,
//     };
//     const apiputData = {
//         email_notification: changeEmail,
//         web_notification: changeWeb,
//     };
//     if (team_idBoolean === false) {
//         api.post(
//             `https://oda-center.herokuapp.com/api/notification`,
//             apiPostData
//         ).then((res) => {
//             toast.success(res.data.message);
//         });
//     } else if (team_idBoolean === true) {
//         api.put(
//             `https://oda-center.herokuapp.com/api/notification/${teamId?.user_id}`,
//             apiputData
//         ).then((res) => {
//             if (res.status === 200) {
//                 toast.success(res.data.message);
//             }
//             if (res.status === 204) {
//                 toast.success("no content get");
//             }
//         });
//     }
// };
