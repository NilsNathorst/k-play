import theme from "./Theme";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "2px solid rgba(0,0,0,0.1)",
    color: state.isSelected ? "red" : theme.colorDark,
    padding: 20
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: "100%"
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
};
export default customStyles;
