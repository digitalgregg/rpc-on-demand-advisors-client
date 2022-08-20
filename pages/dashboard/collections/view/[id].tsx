import React from "react";
import CustomSelect from "../../../../components/Shared/CustomSelect";

function CollectionsView() {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    return (
        <div>
            <CustomSelect options={options} type={"multi"} />
        </div>
    );
}

export default CollectionsView;
