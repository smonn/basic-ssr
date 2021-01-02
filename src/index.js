import express from "express";
import handleRegistration from "./handlers/handle-registration";
import handleRender from "./handlers/handle-render";

const app = express();

// Handle POSTs both for HTML and JSON requests.
app.post(
  "/register",
  express.urlencoded({ extended: false }),
  express.json(),
  handleRegistration
);

// This wildcard route will ensure we catch all GET requests.
app.get("/*", handleRender);

app.listen(process.env.PORT || 3000);
