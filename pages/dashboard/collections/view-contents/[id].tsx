import React from "react";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import ContentCard from "../../../../components/ContentCard/index";
import ViewCollectionContent from "../../../../components/Dashboard/CollectionPage/ViewCollectionContent";

const ViewContent = () => {
    return (
        <>
            <DashboardLayout>
                <ViewCollectionContent />
            </DashboardLayout>
        </>
    );
};

export default ViewContent;
