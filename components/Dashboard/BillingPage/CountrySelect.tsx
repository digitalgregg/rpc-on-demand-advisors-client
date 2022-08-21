import React from "react";
import SelectField from "../../Shared/SelectField";
import DropdownField from "../../Shared/DropdownField";
import { DropdownItem, Dropdown } from "../../Shared/Dropdown";

import countryData from "../../Shared/Json/CountryData.json";

function CountrySelect() {
    return (
        <DropdownField
            className="!border-[#e0e0e0]"
            height="44px"
            label="Country"
            name="country"
            placeholderClass="!text-sm"
            iconClass="!w-[12px]"
            labelClass="!text-sm"
            placeholder="Select a country"
        >
            {countryData.map((v, i) => (
                <DropdownItem key={i} value={v.countryNameEn}>
                    {v.countryNameEn}
                </DropdownItem>
            ))}
        </DropdownField>
    );
}

export default CountrySelect;
