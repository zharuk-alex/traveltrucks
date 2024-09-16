import logoUrl from "../../assets/icons/logo.svg";

const Logo = ({ className = "" }) => {
  return (
    <div className={className}>
      <img src={logoUrl} alt="Logo" />
    </div>
  );
};

export default Logo;
