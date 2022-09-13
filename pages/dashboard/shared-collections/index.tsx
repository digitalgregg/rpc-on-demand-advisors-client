import ViewCollection from "../../../components/Dashboard/CollectionPage/ViewCollection";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useAtom } from "jotai";
import { signupState, team_state } from "../../../state/index";
import { useQuery } from "react-query";
import { fetchSharedCollections } from "../../../api-call/CollectionApi";

function SharedCollection() {
    const [userData] = useAtom(signupState);
    const [teamData] = useAtom(team_state);

    const { data, isSuccess, isLoading, isError, refetch } = useQuery(
        "fetch-shared-collection",
        () => fetchSharedCollections(userData._id, teamData.id),
        {
            select: (response) =>
                Array.isArray(response.data)
                    ? response.data.reverse()
                    : response.data,
            retry(failureCount, error: any) {
                if (error.response.data.success === false) {
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    return (
        <DashboardLayout>
            <ViewCollection
                isSuccess={isSuccess}
                isError={isError}
                isLoading={isLoading}
                refetch={refetch}
                data={data}
            />
        </DashboardLayout>
    );
}

export default SharedCollection;
