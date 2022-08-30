export const tagCustomStyle = {
  control: (base: any, state: any) => ({
    ...base,
    border: "1px solid #9E9E9E",
    boxShadow: "none",
    minHeight: "55px",
    justifyContent: "between",
    "&:hover": {
      border: "1px solid #E51937",
    },
  }),
  // indicatorsContainer: (provided:any) => ({
  //     border: "none"
  //   }),
};
export const useragCustomStyle = {
  control: (base: any, state: any) => ({
    ...base,
    border: "none",
    boxShadow: "none",
    minHeight: "26px",
    "&:hover": {
      border: "none",
    },
  }),
  menu: (base: any, state: any) => ({
    ...base,
    maxHeight: "200px",
    backgroundColor: "white",
    overflow: "auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    radius: "4px",
    marginTop: "2px",
    padding: "0px 8px 0px 8px",
  }),
  option: (styles: any, state: any) => {
    return {
      ...styles,
      ":hover": {
        background: "rgba(229,25,55,0.1)",
        color: "#E51937",
        fontWeight: 600,
      },
      backgroundColor: state.isSelected ? "#E51937" : "transparent",
      fontSize: 14,
      borderRadius: 4,
      fontWeight: state.isSelected ? 700 : 400,
      color: state.isSelected ? "#fff" : "#000",
      border: "none"
    };
  },
  multiValue: (base: any) => ({
    ...base,
    background: "none",
    border: "1px solid #9E939E",
    borderRadius: "4px",
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: "0px!important"
  }),
  multiValueRemove: (base:any) => ({
    ...base,
    "&>svg": {
        background: "#222",
        borderRadius: "50px",
        color: "white",
    },
    ":hover": {
        transform: "scale(1.1)",
        transition: "all",
        transitionDuration: ".2s"
    }
  }),
  dropdownIndzsdaifcator: (base:any) => ({
    ...base,
    background: "red",
    border: "1px solid lightgray",
    width: "300px",
    height: "26px",
    display: "flex",
    justifyContent: "between"
  }),
  indicatorSeparator: (base:any) => ({
    display: "none"
  }),
};
