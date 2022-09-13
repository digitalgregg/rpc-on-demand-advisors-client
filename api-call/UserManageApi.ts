import { useQuery } from "react-query";
import { toast } from "react-toastify";
import api from "../api";
import { UserManageType } from "../components/Context/UserManageProvider";
import { removeEmpty } from "../utils/removeEmpty";

export const fetchInviteUsers = async (team_id: string, user_id: string) => {
    return api.get(
        "/api/invite/fetch?team_id=" + team_id + "&user_id=" + user_id
    );
};

export const fetchTeamUsers = async (team_id: string) => {
    return api.get("/api/team/" + team_id);
};

export const deleteInvitedUser = async (data: UserManageType) => {
    try {
        await api.post("/api/invite/remove", removeEmpty(data));
        toast.success("User deleted successfully");
    } catch (error) {
        console.log(error);
    }
};
