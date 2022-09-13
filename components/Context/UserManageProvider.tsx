import React, { createContext, useContext, ReactNode } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getCollection } from "../../api-call/CollectionApi";

export interface UserManageType {
    _id: string;
    name: string;
    email: string;
    role: string;
    team_id: string;
    status: string;
    profile: string;
}

type UserManage = {
    data: UserManageType[];
    refetch: () => any;
};

const UserManageContext = createContext<UserManage | null>(null);

export const GetUserManageContext = () =>
    useContext(UserManageContext) as UserManage;

function UserManageProvider({
    children,
    refetch,
    data,
}: {
    children: ReactNode;
    refetch: () => any;
    data: UserManageType[];
}) {
    return (
        <UserManageContext.Provider value={{ refetch, data }}>
            {children}
        </UserManageContext.Provider>
    );
}

export default UserManageProvider;
