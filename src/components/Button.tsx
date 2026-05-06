import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import React from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center font-medium rounded-md transition-colors cursor-pointer",
  {
    variants: {
      size: {
        default: "px-2 py-2 text-sm",
        ["default-ytsize"]: "px-3 py-1.5 text-sm",
        sm: "px-2 py-1 text-xs",
        md: "px-4 py-2 text-md",
        lg: "px-6 py-2 text-base",
      },
      variant: {
        default:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-[#272727] dark:text-white dark:hover:bg-[#3f3f3f]",
        ["default-rounded"]:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-full dark:bg-[#272727] dark:text-white dark:hover:bg-[#3f3f3f]",
        ghost:
          "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-[#aaaaaa] dark:hover:bg-[#272727]",
        icon: "text-gray-900 hover:bg-gray-200 rounded-full dark:text-white dark:hover:bg-[#272727]",
        ytbtn:
          "bg-gray-900 text-white px-3 py-1.5 dark:bg-white dark:text-gray-900",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export default function Button({ size, variant, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(buttonStyles({ size, variant }), className)}
      {...props}
    />
  );
}