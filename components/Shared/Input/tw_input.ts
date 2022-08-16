import { UseTwInputProps } from "./Input.types";

export const tw_input = (options = {} as UseTwInputProps): string => {
  // Default settings
  const { varient = "outlined", size = "medium", rounded = "md" } = options;

  const inputSize =
    size === "medium"
      ? "px-5 py-2.5 text-[21px] leading-[25px] border"
      : size === "large"
      ? "px-8 py-4 text-[20px] h-[73px] leading-[35px] border-2"
      : "";

  const inputRounded =
    rounded === "md"
      ? size === "medium"
        ? "rounded-[18px]"
        : "rounded-[28px]"
      : rounded === "full"
      ? "rounded-full"
      : "";

  const inputClasses = `${inputRounded} ${inputSize} border-gray focus:border-[#505050] outline-none font-semibold placeholder:opacity-100 placeholder:text-[#888888] text-dark-gray disabled:opacity-40 disabled:bg-slate-50`;

  return inputClasses;
};
