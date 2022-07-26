import { toast } from "react-toastify";
import api from "../api";

type InviteUserType = {
    team_id: string;
    name: string;
    email: string;
    role: string;
};

export const inviteUserApi = async (data: InviteUserType) => {
    try {
        await api.post("/api/invite", data);
        toast.success(
            "Invite send successfully, An email send to invited user"
        );
    } catch (err: any) {
        console.log(err);
        toast.error(err?.response.data.message);
    }
};

export const updateInviteUser = async (data: any) => {
    try {
        await api.put("/api/invite/update", data);
        toast.success("Invited user updated successfully");
    } catch (err: any) {
        console.log(err);
        toast.error(err?.response.data.message);
    }
};
