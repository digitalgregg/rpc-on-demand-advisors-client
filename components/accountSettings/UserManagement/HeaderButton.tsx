import { useAtom } from "jotai";
import React from "react";
import { useState } from "react";
import { team_state } from "../../../state";
import UserManagementModel from "../../modal/UserManagementModal";

function HeaderButton() {
    const [inviteModal, setInviteModal] = useState(false);
    const [teamData] = useAtom(team_state);
    return (
        <>
            <div className="flex items-center mb-[10px]">
                <h3 className="flex-1 font-semibold text-[18px] leading-[25px] text-[#101010]">
                    User Management
                </h3>
                {teamData.role === "admin" && (
                    <button
                        onClick={() => setInviteModal(true)}
                        className="hover-transition hover:bg-primary hover:text-White w-[132px] h-[39px] md:h-[42px] border border-primary rounded-[4px] font-normal sm:text-[14px] sm:leading-[19px] md:text-[16px] md:leading-[22px] text-primary"
                    >
                        Send Invite
                    </button>
                )}
            </div>
            <UserManagementModel
                isOpen={inviteModal}
                type={"invite"}
                onClose={() => setInviteModal(false)}
            />
        </>
    );
}

export default HeaderButton;
