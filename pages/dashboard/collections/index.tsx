import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ViewCollection from "../../../components/Dashboard/CollectionPage/ViewCollection";
import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { signupState, team_state } from "../../../state/index";
import {
    fetchMyCollections,
    useFilterCollections,
} from "../../../api-call/CollectionApi";
import { useState } from "react";
import { SelectOption } from "../../../components/Shared/SortedSelect";

function Collections() {
    const [userData] = useAtom(signupState);

    const [filter, setFilter] = useState<SelectOption>({
        value: "newest",
        label: "Newest",
    });

    const { data, error, isSuccess, isLoading, isError, refetch } =
        useFilterCollections(userData._id, filter);
    return (
        <DashboardLayout>
            <ViewCollection
                data={data}
                isSuccess={isSuccess}
                isLoading={isLoading}
                isError={isError}
                refetch={refetch}
                filter={filter}
                setFilter={setFilter}
            />
        </DashboardLayout>
    );
}

export default Collections;
