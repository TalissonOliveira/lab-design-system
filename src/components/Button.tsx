import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  className?: string
  children: ReactNode
}

export function Button({ asChild, className, children, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'bg-cyan-500 w-full py-3 px-4 text-black text-sm font-semibold rounded hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
}
