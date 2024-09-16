import Layout from "components/AppLayout/AppLayout";
import routes from "./routes.jsx";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { AppLoader } from "./components/UI/index.js";

const App = () => {
  const AppRoutes = () => useRoutes(routes);

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
