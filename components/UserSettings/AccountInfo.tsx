import React, { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api";
import { getLocal, setLocal } from "./../../utils/localStorage";
import { toast } from "react-toastify";
import LodingAnimation from "./../Shared/LodingAnimation/index";

const AccountInfo = () => {
  const inputStyle =
    "w-[100%] h-[48px] bg-[#fff] border border-[#E0E0E0] text-normal text-[14px] text-[#6D6D6D] rounded-[4px] px-[20px] py-[18px] mt-[12px]";
  const labelStyle = "font-normal text-[16px] leading-[22px] text-[#000000]";
  const [error, setError] = useState("");
  const user = getLocal("user");
  const team = getLocal("team");
  const userInfo = getLocal("user-info");
  const [buttonLoading, setButtonLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    setButtonLoading(true);
    setError("");
    try {
      const userData = { name: data.name, companyName: data.companyName };
      const updateUserInfo = await api.put(`/api/user/${user._id}`, userData);

      user.name = data.name;
      user.companyName = data.companyName;
      setLocal("user", user);

      const teamData = { team_name: data.team_name };
      const updateTeamInfo = await api.put(`/api/team/${team.id}`, teamData);

      team.company_name = data.companyName;
      team.team_name = data.team_name;
      setLocal("team", team);

      userInfo.name = data.name;
      userInfo.companyName = data.companyName;
      setLocal("user-info", userInfo);

      toast.success("User updated successfully");
      setButtonLoading(false);
    } catch (err: any) {
      setError(err?.response?.data?.message);
      setButtonLoading(false);
    }
  };
  return (
    <div className="w-[100%] bg-[#FFFFFF] p-[20px] mb-[30px]">
      <h3 className="font-semibold text-[18px] leading-[25px] text-[#000805] mb-[15px]">
        Account Info
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-[15px]">
          <div>
            <label className={labelStyle} htmlFor="name">
              Profile name
            </label>
            <input
              {...register("name", { required: true })}
              className={inputStyle}
              defaultValue={user?.name}
              placeholder="Enter your name"
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
              }}
            />
            <br />
            {errors.name && (
              <h3 className="text-primary mb-[10px] text-[12px]">
                Profile name is required
              </h3>
            )}
          </div>
          <div>
            <label className={labelStyle} htmlFor="companyName">
              Company name
            </label>
            <input
              {...register("companyName", { required: true })}
              className={inputStyle}
              placeholder="Company Name"
              defaultValue={user?.companyName}
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
              }}
            />
            <br />
            {errors.companyName && (
              <h3 className="text-primary mb-[10px] text-[12px]">
                Company name is required
              </h3>
            )}
          </div>
          <div>
            <label className={labelStyle} htmlFor="team_name">
              Team name
            </label>
            <input
              {...register("team_name", { required: true })}
              className={inputStyle}
              defaultValue={team?.team_name}
              placeholder="Team name"
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
              }}
            />
            <br />
            {errors.team_name && (
              <h3 className="text-primary mb-[10px] text-[12px]">
                Team name is required
              </h3>
            )}
          </div>
          <div>
            <label className={labelStyle} htmlFor="role">
              Account type (not editable)
            </label>
            <input
              {...register("role", { required: true })}
              className={inputStyle}
              value={team?.role}
              placeholder="Account type"
              style={{
                boxShadow: " inset 1px 3px 3px rgba(0, 0, 0, 0.03)",
              }}
            />
          </div>
        </div>
        {error && (
          <h3 className="text-primary text-[12px] mt-[10px]">{error}</h3>
        )}
        <button
          type="submit"
          className="xs:w-[100%] mt-[20px] hover:bg-primary transition duration-700 ease-in-out hover:text-[#FFFFFF] sm:w-[207px] h-[45px] border border-primary rounded font-semibold text-[14px] leading-[19px] text-primary"
        >
          {buttonLoading ? (
            <span className="flex items-center gap-[10px] justify-center">
              <div>
                <LodingAnimation color="red" />
              </div>
              <div>Loading...</div>
            </span>
          ) : (
            "Update Account Info"
          )}
        </button>
      </form>
    </div>
  );
};

export default AccountInfo;
