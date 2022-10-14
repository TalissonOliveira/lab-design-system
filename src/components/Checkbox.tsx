import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox({ ...rest }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="bg-gray-800 w-6 h-6 p-[2px] rounded" {...rest}>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
