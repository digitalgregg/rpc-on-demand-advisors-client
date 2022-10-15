import { useAtom } from "jotai";
import { createContext, ReactNode, useContext } from "react";
import { useQuery } from "react-query";
import api from "../../api";
import { team_state, UserPlanState } from "../../state";

type GlobalContextType = {
    refetchPlanData: () => any;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GetGlobalContext = () =>
    useContext(GlobalContext) as GlobalContextType;

function GlobalContextProvider({ children }: { children: ReactNode }) {
    const [teamData] = useAtom(team_state);
    const [planData, setPlanData] = useAtom(UserPlanState);
    const { refetch } = useQuery(
        ["fetch-user-plan"],
        () => api.get("/api/billing/validate/" + teamData.id),
        {
            select: (res) => res.data,
            onSuccess: (data) => {
                setPlanData(data);
            },
            enabled: !!teamData.id,
        }
    );

    return (
        <GlobalContext.Provider value={{ refetchPlanData: refetch }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
