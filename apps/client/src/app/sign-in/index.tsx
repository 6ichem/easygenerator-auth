import FormLayout from "@/components/layout";
import SignInForm from "./components/sign-in-form";
import { Fragment } from "react/jsx-runtime";
import { ROUTE_PATHS } from "@/router/constants";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <FormLayout
      title="Sign in to your account"
      description="Welcome back! Please enter your credentials to access your account."
    >
      <Fragment>
        <SignInForm />
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            to={ROUTE_PATHS.SIGN_UP}
          >
            Sign up
          </Link>
        </div>
      </Fragment>
    </FormLayout>
  );
}
