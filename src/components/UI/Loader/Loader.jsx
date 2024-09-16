import { Oval } from "react-loader-spinner";

const Loader = ({
  visible = true,
  height = 80,
  width = 80,
  color = "#e44848",
  secondaryColor = "#d84343",
  ...rest
}) => {
  return (
    <Oval
      visible={visible}
      height={height}
      width={width}
      color={color}
      secondaryColor={secondaryColor}
      ariaLabel="oval-loading"
      {...rest}
    />
  );
};

export default Loader;
