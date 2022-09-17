import React, { useState } from "react";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import { notifications } from "../../../../components/fake";
import Select from "react-select";
import ToggleButton from "../../../../components/Shared/ToggleButton";
import { Layout } from "../../../../components/accountSettings/Layout";
import api from "../../../../api";
import { getLocal } from "../../../../utils/localStorage";
import { useQuery } from "react-query";

const options = [
  { value: "All Users", label: "All Users" },
  { value: "Admin", label: "Admin" },
  { value: "None", label: "None" },
];

const Notifications = () => {
  const team = getLocal("team");
  const [isToggle, setIsToggle] = useState(false);
  const [selectUser, setSelectUser] = useState({
    value: "All Users",
    label: "All Users",
  });
  const lowerCaseValue = selectUser.value.toLowerCase();
  const customStyles: any = {
    control: (base: any, state: any) => ({
      ...base,
      border: "1px solid #9E9E9E",
      boxShadow: "none",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "#fff" : "#000000",
      fontSize: "14px",
      fontWeight: state.isSelected ? 700 : 400,
      width: "95%",
      borderRadius: "4px",
      margin: "0 auto",
      "&:hover": {
        color: state.isSelected ? "#fff" : "#E51937",
        fontWeight: state.isSelected ? 700 : 600,
      },
    }),
    indicatorsContainer: (provided: any) => ({
      border: "none",
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      transition: "top 0.1s, font-size 0.1s",
      width: "64px",
      fontSize: "10px",
    }),
  };

  const { isLoading, data, refetch } = useQuery(
    ["get notification", team.id],
    () =>
      api.get(
        `/api/weekly-digests-notification/${team.id}`
      ),
    {
      enabled: !!team.id,
      onSuccess: (data) => {
        setIsToggle(data?.data.isToggle);
      },
    }
  );
  const toggle = data?.data?.isToggle;

  const handleToggle = async () => {
    setIsToggle(!isToggle);
    try {
      const updateData = {
        team_id: team.id,
        role_type: lowerCaseValue,
        isToggle: !isToggle,
      };
      await api.put(
        `/api/weekly-digests-notification/${team.id}`,
        updateData
      );
      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = async (e: any) => {
    setSelectUser(e);
    try {
      const updateData = {
        team_id: team.id,
        role_type: e.value.toLowerCase(),
        isToggle: toggle,
      };
      const res = await api.put(
        `/api/weekly-digests-notification/${team.id}`,
        updateData
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <DashboardLayout>
      <Layout>
        <div className="w-[100%] pb-[20px]">
          <h2 className="font-semibold text-[24px] leading-[33px] xs:mb-[14px] sm:mb-[30px] text-[#000000]">
            Notifications
          </h2>
          <div>
            {notifications.map((notification) => {
              return (
                <div
                  key={notification.id}
                  className="xs:border-b xs:border-[#0000001a] sm:border-none xs:last:border-none w-full sm:bg-[#FFFFFF] md:rounded-[4px] md:h-[159px] xl:h-[137px] 2xl:h-[115px] sm:p-[30px] md:mb-[16px] xs:bg-inherit flex justify-between items-center"
                >
                  <div className="xs:mt-[16px] sm:mt-[0px]">
                    <h3 className="font-bold text-[18px] leading-[25px] mb-[8px] text-[#000805]">
                      {notification.title}
                    </h3>
                    <p className="font-normal text-[16px] leading-[22px] text-[#676767] xs:mb-[16px] xs:w-[209px] sm:w-[290px] lg:w-[411px] 2xl:w-[631px] sm:mb-[0px]">
                      {notification.description}
                    </p>
                  </div>
                  <div className="">
                    <div className="flex xs:flex-col md:flex-row md:flex-wrap md:w-[200px]">
                      <div className="md:mr-[20px] md:mb-[0px] sm:mb-[20px] xs:mb-[10px]">
                        <Select
                          value={selectUser}
                          onChange={handleChange}
                          placeholder="Select User"
                          options={options}
                          styles={customStyles}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 4,
                            colors: {
                              ...theme.colors,
                              primary25: "#E519371A",
                              primary: "#E51937",
                            },
                          })}
                          className="text-[#000000] font-normal text-[14px] xs:w-[100px] sm:w-[115px]"
                          name="select-user"
                        />
                      </div>
                      <div className="text-right">
                        <ToggleButton
                          toggle={isToggle}
                          handleToggle={handleToggle}
                          className={`${
                            isToggle === false ? "bg-[#DEDEDE]" : ""
                          } ${
                            isToggle &&
                            "xs:before:translate-x-[10px] sm:before:translate-x-[21px]"
                          } sm:before:h-[26px] sm:before:w-[26px] xs:before:h-[14.62px] xs:before:w-[14.62px] xs:before:bottom-[2px] sm:before:bottom-[3px]`}
                          labelClass={`xs:w-[31.5px] xs:h-[18px] sm:w-[56px] sm:h-[32px]`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </DashboardLayout>
  );
};
export default Notifications;
