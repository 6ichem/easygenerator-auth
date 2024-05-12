import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/custom/button";
import { PasswordInput } from "@/components/custom/password-input";
import { useCallback, useState } from "react";
import { SIGN_UP_FIELDS } from "../constants";
import { validateUser } from "../utils";
import ValidationError from "./validation-error";
import { Register } from "@/core/http";
import { setAuthToken } from "@/core/utils";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "@/router/constants";

export default function SignUpForm() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [signUpForm, setSignUpForm] = useState(SIGN_UP_FIELDS);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormErrors([]);
    setSignUpForm((currForm) => ({
      ...currForm,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormValid = useCallback(() => {
    return Object.values(signUpForm).every((field) => field !== "");
  }, [signUpForm]);

  const LoginUser = async () => {
    try {
      const data = await Register(signUpForm);

      if (data.success) {
        setAuthToken(data.access_token);
        toast({
          title: "Registered successfully.",
        });
        setTimeout(() => {
          navigate(ROUTE_PATHS.HOME);
        }, 1500);
      }

      return data;
    } catch (e: any) {
      toast({
        variant: "destructive",
        title:
          e?.response?.data?.message ??
          "An error occured while attempting to sign up.",
      });
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const validationErrors = validateUser(signUpForm);
    if (validationErrors.length === 0) {
      await LoginUser();
      setLoading(false);
    } else {
      setFormErrors(validationErrors);
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={submitForm}>
      {formErrors.length > 0 && <ValidationError errors={formErrors} />}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="John doe"
          required
          type="text"
          onChange={(e) => handleFormChange(e)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="john.doe@example.com"
          required
          type="email"
          onChange={(e) => handleFormChange(e)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          placeholder="********"
          name="password"
          onChange={(e) => handleFormChange(e)}
        />
      </div>
      <Button
        className="w-full"
        type="submit"
        disabled={!isFormValid()}
        loading={isLoading}
      >
        Register
      </Button>
    </form>
  );
}
