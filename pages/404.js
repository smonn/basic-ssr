import { Route } from "react-router-dom";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.statusCode = 404;
        }

        return (
          <Layout>
            <h1>Not Found</h1>
          </Layout>
        );
      }}
    />
  );
}
