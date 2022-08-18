import { Styles } from "react-modal";
import { StylesConfig } from "react-select";
import { toast } from "react-toastify";

export const selectCustomStyles: StylesConfig = {
  option: (provided: any, state: any) => {
    return {
      ...provided,
      fontSize: "16px",
      backgroundColor: state.isFocused ? "#E51937" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      cursor: "pointer",
    };
  },
  control: (provided) => ({
    ...provided,
    width: "100%",
    borderRadius: 4,
    height: 48,
    border: "1px solid #9E9E9E",
    padding: "0px 5px",
    fontSize: "16px",
    cursor: "pointer",
  }),
  input: (provided) => ({
    ...provided,
  }),
  container: (provided) => ({
    ...provided,
    backgroundColor: "green",
    borderRadius: 99999,
  }),
};
