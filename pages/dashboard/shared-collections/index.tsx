import ViewCollection from "../../../components/Dashboard/CollectionPage/ViewCollection";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useAtom } from "jotai";
import { signupState, team_state } from "../../../state/index";
import { useQuery } from "react-query";
import {
    fetchMyCollections,
    fetchSharedCollections,
} from "../../../api-call/CollectionApi";

function SharedCollection() {
    const [userData] = useAtom(signupState);
    const [teamData] = useAtom(team_state);

    const { data, isSuccess, isLoading, isError } = useQuery(
        "fetch-shared-collection",
        () => fetchSharedCollections(userData._id, teamData.id)
    );

    console.log(data);

    return (
        <DashboardLayout>
            <ViewCollection
                isSuccess={isSuccess}
                isError={isError}
                isLoading={isLoading}
                data={data?.data}
            />
        </DashboardLayout>
    );
}

export default SharedCollection;
