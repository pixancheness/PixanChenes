"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import { Button } from "@/modules/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/modules/ui/card";
import { Input } from "@/modules/ui/input";
import { Label } from "@/modules/ui/label";
import SignInWithGoogleButton from "./SignInWithGoogleButton";
import { login } from "@/lib/auth-actions";
import { useTranslations } from "next-intl";
import { toast } from "@/modules/ui/toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations("Auth.login");

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Iniciando sesión..." : t("loginButton")}
    </Button>
  );
}

export function LoginForm() {
  const t = useTranslations("Auth.login");

  async function handleSubmit(formData: FormData) {
    const result = await login(formData);

    if (result?.error) {
      toast.error(result.message);
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">{t("email.label")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t("email.placeholder")}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">{t("password.label")}</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  {t("forgotPassword")}
                </Link>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <SubmitButton />
            <SignInWithGoogleButton />
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          {t("noAccount")}{" "}
          <Link href="/signup" className="underline">
            {t("signUpLink")}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
