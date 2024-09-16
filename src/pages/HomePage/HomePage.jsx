import { Btn } from "components/UI";
import Hero from "components/Hero/Hero";
import heroBg from "../../assets/images/hero_bg.jpg";
import heroBgx2 from "../../assets/images/hero_bg@2x.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const heroProps = {
    title: "Campers of your dreams",
    subtitle: "You can find everything you want in our catalog",
    image: {
      src: heroBg,
      srcSet: `${heroBg} 1x, ${heroBgx2} 2x`,
      alt: "Campers of your dreams",
    },
  };

  return (
    <Hero {...heroProps}>
      <Btn onClick={() => navigate("/catalog")}>View Now</Btn>
    </Hero>
  );
};

export default HomePage;
