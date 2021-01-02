import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <main>
      <h1>Confirmation</h1>
      <p>You successfully signed up!</p>
      <p>
        <Link to="/">Return to home</Link>
      </p>
    </main>
  );
}
