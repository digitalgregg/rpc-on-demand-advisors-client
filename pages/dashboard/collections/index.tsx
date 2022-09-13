import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ViewCollection from "../../../components/Dashboard/CollectionPage/ViewCollection";
import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { signupState, team_state } from "../../../state/index";
import { fetchMyCollections } from "../../../api-call/CollectionApi";

function Collections() {
    const [userData] = useAtom(signupState);
    const { data, isSuccess, isLoading, isError, refetch } = useQuery(
        "get-collections",
        () => fetchMyCollections(userData._id)
    );
    return (
        <DashboardLayout>
            <ViewCollection
                data={data?.data}
                isSuccess={isSuccess}
                isLoading={isLoading}
                isError={isError}
                refetch={refetch}
            />
        </DashboardLayout>
    );
}

export default Collections;
