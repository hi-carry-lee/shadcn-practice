"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "./input";

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative flex items-center">
      <Input
        {...props}
        ref={ref}
        className={cn("pr-10", className)}
        type={showPassword ? "text" : "password"}
      />
      <span className="absolute right-2 cursor-pointer select-none">
        {showPassword ? (
          <EyeIcon
            onClick={() => {
              console.log("222");
              setShowPassword(false);
            }}
          />
        ) : (
          <EyeOffIcon
            onClick={() => {
              console.log("111");
              setShowPassword(true);
            }}
          />
        )}
      </span>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
