import { Oval } from "react-loader-spinner";

const Loader = ({ visible = true, height = 80, width = 80, ...rest }) => {
  return (
    <Oval
      visible={visible}
      height={height}
      width={width}
      color="#e44848"
      secondaryColor="#d84343"
      ariaLabel="oval-loading"
      {...rest}
    />
  );
};

export default Loader;
