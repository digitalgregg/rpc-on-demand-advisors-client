import { useQuery } from "react-query";
import api from "../api";

export const fetchInviteUsers = async (team_id: string) => {
    return api.get("/api/invite?team_id=" + team_id);
};

export const fetchTeamUsers = async (team_id: string) => {
    return api.get("/api/team/" + team_id);
};

export const UserManageQuery = (team_id: string) => {
    const {
        data: inviteUsersData,
        isLoading: loading1,
        isSuccess: success1,
        refetch,
    } = useQuery("invite-user", () => fetchInviteUsers(team_id));
    const {
        data: teamUsersData,
        isLoading: loading2,
        isSuccess: success2,
    } = useQuery("team-user", () => fetchTeamUsers(team_id));
    const isLoading = loading1 || loading2;
    const isSuccess = success1 && success2;

    const inviteData = isSuccess
        ? inviteUsersData?.data.map((v: any) => {
              return {
                  profile: "",
                  name: v.name,
                  email: v.email,
                  role: v.role,
                  status: "Not activated",
                  id: v._id,
              };
          })
        : [];

    const teamData = isSuccess
        ? teamUsersData?.data.map((v: any) => {
              return {
                  profile: "",
                  name: v.user_id.name,
                  email: v.user_id.email,
                  role: v.role,
                  status: "Active",
                  id: v._id,
              };
          })
        : [];

    const data = isSuccess ? teamData.concat(inviteData) : [];
    return {
        isLoading,
        isSuccess,
        data,
    };
};
