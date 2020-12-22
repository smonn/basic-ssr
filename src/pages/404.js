import { Link, Route } from "react-router-dom";

export default function NotFound() {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.statusCode = 404;
        }

        return (
          <main>
            <h1>Page Not Found</h1>
            <p>
              <Link to="/">Return to home</Link>
            </p>
          </main>
        );
      }}
    />
  );
}
