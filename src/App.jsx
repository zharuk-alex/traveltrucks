import Layout from "components/AppLayout/AppLayout";
import routes from "./routes.jsx";
import { useRoutes } from "react-router-dom";

const App = () => {
  const AppRoutes = () => useRoutes(routes);

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
