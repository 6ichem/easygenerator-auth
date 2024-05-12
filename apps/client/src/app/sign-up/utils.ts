import { SignUpFields } from "./types";

export const validateUser = (user: SignUpFields): string[] => {
  const errors: string[] = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user.email)) {
    errors.push("Please enter a valid email address");
  }

  if (!user.name.trim()) {
    errors.push("Please enter your name");
  }

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!passwordRegex.test(user.password)) {
    errors.push(
      "Password must be at least 8 characters long and contain at least 1 letter, 1 number, and 1 special character"
    );
  }

  return errors;
};
