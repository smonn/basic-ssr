import express from "express";
import renderApp from "./lib/render-app";

const app = express();

// This wildcard route will ensure we catch all GET requests.
app.get("/*", (req, res) => {
  // This context lets us track redirects and 404:s triggered by React Router.
  const context = {};
  const html = renderApp(req.url, context);

  if (context.url) {
    // This means a redirect was triggered.
    res.redirect(context.statusCode || 301, context.url);
  } else {
    if (context.statusCode) {
      // This usually means we have a 404.
      res.status(context.statusCode);
    }

    res.send(html);
  }
});

app.listen(process.env.PORT || 3000);
