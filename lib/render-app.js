import { StaticRouter } from "react-router-dom";
import App from "../components/app";

/**
 * Renders the App into a string.
 * @param {string} url The current URL to render
 * @param {object} staticContext Context for static router
 */
export default function renderApp(url, staticContext) {
  // To avoid putting all of this in a string, we'll use JSX for html, head, body, etc. too.
  let markup = renderToString(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Hello World" />
        <title>Hello World</title>
      </head>
      <body>
        <StaticRouter location={url} context={staticContext}>
          <App />
        </StaticRouter>
      </body>
    </html>
  );

  // Since we don't care about hydration here, we can safely remove the `data-reactroot` attribute.
  markup = markup.replace(` data-reactroot=""`, "");

  // We need to set the doctype here as we can't include it using JSX.
  return `<!DOCTYPE html>${markup}`;
}
