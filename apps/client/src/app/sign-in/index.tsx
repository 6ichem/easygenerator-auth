import SignInForm from "./components/sign-in-form";

export default function SignIn() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 text-center">
          Create your account
        </h1>

        <SignInForm />

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            href="#"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
