import { validateRegistration } from "../lib/validation";
import handleRender from "./handle-render";

/**
 * Handler for registration route.
 * @param {express.Request} req Express Request object
 * @param {express.Response} res Express Response object
 */
export default function handleRegistration(req, res) {
  const isValid = validateRegistration(req.body);
  // In a real-world application, this would also create the new user.

  const json = () => res.status(isValid ? 200 : 400).json({ isValid });

  const html = () => {
    if (isValid) {
      res.redirect(302, "/confirmation");
    } else {
      handleRender(req, res);
    }
  };

  // https://expressjs.com/en/4x/api.html#res.format
  res.format({
    json,
    html,
  });
}
