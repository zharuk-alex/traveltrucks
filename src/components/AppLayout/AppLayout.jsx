import { Suspense, useEffect, useMemo } from "react";
import Header from "components/Header/Header";
import { AppLoader } from "components/UI";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AppLayout = ({ children }) => {
  const location = useLocation();

  const pageTitle = useMemo(() => {
    switch (location.pathname) {
      case "/":
        return "Home - Campers of your dreams";
      case "/catalog":
        return "Catalog - Browse Our Campers";
      case location.pathname.match(/\/catalog\/\d+/)?.input:
        return `Camper Details`;
      default:
        return "Page Not Found";
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />
      <main>
        <Suspense fallback={<AppLoader visible={true} />}>{children}</Suspense>
      </main>
    </>
  );
};

export default AppLayout;
