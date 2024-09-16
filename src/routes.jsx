import { lazy } from "react";
import CamperReviews from "components/CamperReviews/CamperReviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const routes = [
  { path: "/", element: <HomePage />, title: "Home", isNav: true },
  {
    path: "/catalog",
    element: <CatalogPage />,
    title: "Catalog",
    isNav: true,
  },
  {
    path: "/catalog/:id",
    element: <CamperDetailsPage />,
    children: [{ path: "reviews", element: <CamperReviews /> }],
  },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
