import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps {
  asChild?: boolean
  children: ReactNode
}

export function Button({ asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={clsx(
      'bg-cyan-500 w-full py-4 px-3 text-black text-sm font-semibold rounded hover:bg-cyan-300 transition-colors focus:ring-2 ring-white'
    )}>
      {children}
    </Comp>
  )
}
