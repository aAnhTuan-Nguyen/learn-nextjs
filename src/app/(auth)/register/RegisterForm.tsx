"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterBody, RegisterBodyType } from "@/schemaValidations/auth.schema";
import envConfig from "@/config";

export default function RegisterForm() {
  // 1. Define your form.
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody), // Dùng để kết nối Zod với React Hook Form, giúp xác thực dữ liệu theo schema
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: RegisterBodyType) {
    const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`, {
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => res.json());
    console.log(result);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          console.log(errors);
        })}
        className="space-y-2 max-w-[600px] w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-4 w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
