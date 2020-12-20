import express from "express";
import { renderToString } from "react-dom/server";

const app = express();

function App() {
  // to avoid putting all of this in a string, we'll use JSX for html, head, body etc too
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Hello World" />
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
  );
}

app.get("/", (_, res) => {
  // since we don't care about hydration here, we can safely remove the `data-reactroot` attribute
  const markup = renderToString(<App />).replace(` data-reactroot=""`, "");
  // need to set the doctype here as we can't set it using JSX
  res.send(`<!DOCTYPE html>${markup}`);
});

app.listen(process.env.PORT || 3000);
