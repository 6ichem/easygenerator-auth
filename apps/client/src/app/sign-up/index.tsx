import FormLayout from "@/components/layout";
import SignUpForm from "./components/sign-up-form";
import { Fragment } from "react/jsx-runtime";
import { ROUTE_PATHS } from "@/router/constants";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <FormLayout
      title="Sign up"
      description="Create your account to get started"
    >
      <Fragment>
        <SignUpForm />
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            to={ROUTE_PATHS.SIGN_IN}
          >
            Sign in
          </Link>
        </div>
      </Fragment>
    </FormLayout>
  );
}
