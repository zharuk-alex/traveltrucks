import { lazy } from "react";
import CamperReviews from "components/CamperReviews/CamperReviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
    title: "Home",
    isNav: true,
    handle: { routeName: "home" },
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
    title: "Catalog",
    isNav: true,
    handle: { routeName: "catalog" },
  },
  {
    path: "/catalog/:id",
    element: <CamperDetailsPage />,
    children: [{ path: "reviews", element: <CamperReviews /> }],
    handle: { routeName: "camper_details" },
  },
  {
    path: "*",
    element: <NotFoundPage />,
    handle: { routeName: "not_found" },
  },
];

export default routes;
