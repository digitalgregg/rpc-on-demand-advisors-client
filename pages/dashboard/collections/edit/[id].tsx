import React from "react";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import EditCollection from "../../../../components/Dashboard/CollectionPage/EditCollection";
import CollectionDataProvider from "../../../../components/Context/CollectionDataProvider";

function EditCollectionPage() {
    return (
        <DashboardLayout>
            <CollectionDataProvider>
                <EditCollection />
            </CollectionDataProvider>
        </DashboardLayout>
    );
}

export default EditCollectionPage;
