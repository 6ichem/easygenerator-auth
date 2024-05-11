import { Button } from "@/components/custom/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordInput } from "@/components/custom/password-input";
import { SignInFormSchema } from "../dto";
import { Login } from "@/core/http";
import { useToast } from "@/components/ui/use-toast";
import { setAuthToken } from "@/core/utils";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "@/router/constants";

export default function SignInForm() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInFormSchema>) {
    try {
      const data = await Login(values);

      if (data.success) {
        setAuthToken(data.access_token);
        toast({
          title: "Logged in successfully.",
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
          "An error occured while attempting to sign in.",
      });
    }
  }

  const isSubmitDisabled =
    !form.getFieldState("email").isDirty ||
    !form.getFieldState("password").isDirty;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Password</FormLabel>

                <FormControl>
                  <PasswordInput placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="mt-2"
            disabled={isSubmitDisabled}
            loading={form.formState.isSubmitting}
          >
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
}
