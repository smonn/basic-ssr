import renderApp from "../lib/render-app";

/**
 * Renders the app to HTML and sets the response accordingly.
 * @param {express.Request} req Express Request object
 * @param {express.Response} res Express Response object
 */
export default function handleRender(req, res) {
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
}
