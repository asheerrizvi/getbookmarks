import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'

export const Textarea = forwardRef(function Textarea(
  {
    className,
    resizable = true,
    ...props
  }: { className?: string; resizable?: boolean } & Omit<Headless.TextareaProps, 'as' | 'className'>,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <span
      data-slot="control"
      className={clsx([
        className,
        // Basic layout
        'ui:relative ui:block ui:w-full',
        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        'ui:before:absolute ui:before:inset-px ui:before:rounded-[calc(var(--radius-lg)-1px)] ui:before:bg-white ui:before:shadow-sm',
        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        'ui:dark:before:hidden',
        // Focus ring
        'ui:after:pointer-events-none ui:after:absolute ui:after:inset-0 ui:after:rounded-lg ui:after:ring-transparent ui:after:ring-inset ui:sm:focus-within:after:ring-2 ui:sm:focus-within:after:ring-blue-500',
        // Disabled state
        'ui:has-data-disabled:opacity-50 ui:has-data-disabled:before:bg-zinc-950/5 ui:has-data-disabled:before:shadow-none',
      ])}
    >
      <Headless.Textarea
        ref={ref}
        {...props}
        className={clsx([
          // Basic layout
          'ui:relative ui:block ui:h-full ui:w-full ui:appearance-none ui:rounded-lg ui:px-[calc(--spacing(3.5)-1px)] ui:py-[calc(--spacing(2.5)-1px)] ui:sm:px-[calc(--spacing(3)-1px)] ui:sm:py-[calc(--spacing(1.5)-1px)]',
          // Typography
          'ui:text-base/6 ui:text-zinc-950 ui:placeholder:text-zinc-500 ui:sm:text-sm/6 ui:dark:text-white',
          // Border
          'ui:border ui:border-zinc-950/10 ui:data-hover:border-zinc-950/20 ui:dark:border-white/10 ui:dark:data-hover:border-white/20',
          // Background color
          'ui:bg-transparent ui:dark:bg-white/5',
          // Hide default focus styles
          'ui:focus:outline-hidden',
          // Invalid state
          'ui:data-invalid:border-red-500 ui:data-invalid:data-hover:border-red-500 ui:dark:data-invalid:border-red-600 ui:dark:data-invalid:data-hover:border-red-600',
          // Disabled state
          'ui:disabled:border-zinc-950/20 ui:dark:disabled:border-white/15 ui:dark:disabled:bg-white/2.5 ui:dark:data-hover:disabled:border-white/15',
          // Resizable
          resizable ? 'ui:resize-y' : 'ui:resize-none',
        ])}
      />
    </span>
  )
})
