import ViewCollection from "../../../components/Dashboard/CollectionPage/ViewCollection";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useAtom } from "jotai";
import { signupState, team_state } from "../../../state/index";
import { useQuery } from "react-query";
import {
    fetchSharedCollections,
    useFilterCollections,
    useSharedFilterCollections,
} from "../../../api-call/CollectionApi";
import { useState } from "react";
import { SelectOption } from "../../../components/Shared/SortedSelect";
import Meta from "../../../components/Meta";

function SharedCollection() {
    const [teamData] = useAtom(team_state);

    const [filter, setFilter] = useState<SelectOption>({
        value: "newest",
        label: "Newest",
    });

    const { data, isSuccess, isLoading, isError, refetch } =
        useSharedFilterCollections(
            { user_id: teamData.user_id, team_id: teamData.id },
            filter
        );

    return (
        <DashboardLayout>
            <Meta title="Shared Collections | Dashboard" />
            <ViewCollection
                isSuccess={isSuccess}
                isError={isError}
                isLoading={isLoading}
                refetch={refetch}
                data={data}
                filter={filter}
                setFilter={setFilter}
            />
        </DashboardLayout>
    );
}

export default SharedCollection;
