import React from 'react'
import { cva } from "class-variance-authority";
import { LucideProps } from 'lucide-react';
import { cn } from '@/lib/cn';
// const buttonVariants = cva()

type ButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const buttonVariants = cva('w-[180px] inline-flex items-center justify-center  gap-2  py-2 px-3  font-medium text-center text-base rounded-full ',{
  variants: {
    variant: {
      primary: 'bg-(--color-primary) text-white ',
      secondary: 'bg-(--color-foreground) text-(--color-background)  '
    }
  },
  defaultVariants : {
    variant: 'secondary'
  }

})


function Button({children, variant, icon, ...props } : ButtonProps) {

  const hasIcon = Boolean(icon)
  return (
  
    <>
      <a className={cn(buttonVariants({variant}))} {...props}>{children}  {hasIcon && (
        <span className=' p-1 text-sm text-white rounded-full'>
          {icon}
        </span>
      )} </a>
    </>
  )
}

export default Button