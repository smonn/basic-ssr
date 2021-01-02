// Simple email regular expression, not for production use.
export const emailAddressPattern = /^[^@\s]+@[^@\s]+$/;

// Require 8 characters, must not start or end with a space.
export const passwordPattern = /^\S.{6,}\S$/;

export function validateEmailAddress(emailAddress = "") {
  return emailAddressPattern.test(emailAddress);
}

export function validatePassword(password = "") {
  return passwordPattern.test(password);
}

export function validateRegistration({ email_address, password } = {}) {
  return validateEmailAddress(email_address) && validatePassword(password);
}
