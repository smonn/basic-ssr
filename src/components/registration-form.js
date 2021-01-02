import { passwordPattern } from "../lib/validation";

export default function RegistrationForm({ action }) {
  return (
    <form action={action} method="POST">
      <div>
        <label htmlFor="email_address">Email address</label>
        <input
          data-cy="registration-email-address"
          id="email_address"
          name="email_address"
          type="email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          data-cy="registration-password"
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          pattern={passwordPattern.source}
          aria-describedby="password-help"
        />
        <small id="password-help">
          Minimum 8 characters and must not start or end with whitespace.
        </small>
      </div>
      <div>
        <button data-cy="registration-submit" type="submit">
          Register
        </button>
      </div>
    </form>
  );
}
