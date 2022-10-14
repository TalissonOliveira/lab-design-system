import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg',
  asChild?: boolean
  className?: string
  children: ReactNode
}

export function Heading({ size = 'md', asChild, className, children }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp className={clsx(
      'text-gray-100 font-sans font-bold', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg'
      },
      className
    )}>
      {children}
    </Comp>
  )
}
