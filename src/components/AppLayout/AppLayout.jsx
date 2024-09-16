import { Suspense, useEffect, useMemo } from "react";
import { useMatches } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "components/Header/Header";
import { AppLoader } from "components/UI";
import { getSeo } from "../../seo";
import { useState } from "react";

const AppLayout = ({ children }) => {
  // const matches = useMatches();
  // const currentRouteName = matches.find((match) => match.handle)?.handle
  //   .routeName;

  // const [seo, setSeo] = useState({});

  // useEffect(() => {
  //   const t = getSeo(currentRouteName);
  //   setSeo(t);
  // }, [currentRouteName]);

  return (
    <>
      <Helmet>
        {/* <title>{seo.title}</title>
        {seo.meta?.map(({ name, content }, index) => (
          <meta key={index} name={name} content={content} />
        ))} */}
      </Helmet>
      <Header />
      <main>
        <Suspense fallback={<AppLoader visible={true} />}>{children}</Suspense>
      </main>
    </>
  );
};

export default AppLayout;
