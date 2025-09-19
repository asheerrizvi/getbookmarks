import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'

export const Select = forwardRef(function Select(
  { className, multiple, ...props }: { className?: string } & Omit<Headless.SelectProps, 'as' | 'className'>,
  ref: React.ForwardedRef<HTMLSelectElement>
) {
  return (
    <span
      data-slot="control"
      className={clsx([
        className,
        // Basic layout
        'ui:group ui:relative ui:block ui:w-full',
        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        'ui:before:absolute ui:before:inset-px ui:before:rounded-[calc(var(--radius-lg)-1px)] ui:before:bg-white ui:before:shadow-sm',
        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        'ui:dark:before:hidden',
        // Focus ring
        'ui:after:pointer-events-none ui:after:absolute ui:after:inset-0 ui:after:rounded-lg ui:after:ring-transparent ui:after:ring-inset ui:has-data-focus:after:ring-2 ui:has-data-focus:after:ring-blue-500',
        // Disabled state
        'ui:has-data-disabled:opacity-50 ui:has-data-disabled:before:bg-zinc-950/5 ui:has-data-disabled:before:shadow-none',
      ])}
    >
      <Headless.Select
        ref={ref}
        multiple={multiple}
        {...props}
        className={clsx([
          // Basic layout
          'ui:relative ui:block ui:w-full ui:appearance-none ui:rounded-lg ui:py-[calc(--spacing(2.5)-1px)] ui:sm:py-[calc(--spacing(1.5)-1px)]',
          // Horizontal padding
          multiple
            ? 'ui:px-[calc(--spacing(3.5)-1px)] ui:sm:px-[calc(--spacing(3)-1px)]'
            : 'ui:pr-[calc(--spacing(10)-1px)] ui:pl-[calc(--spacing(3.5)-1px)] ui:sm:pr-[calc(--spacing(9)-1px)] ui:sm:pl-[calc(--spacing(3)-1px)]',
          // Options (multi-select)
          'ui:[&_optgroup]:font-semibold',
          // Typography
          'ui:text-base/6 ui:text-zinc-950 ui:placeholder:text-zinc-500 ui:sm:text-sm/6 ui:dark:text-white ui:dark:*:text-white',
          // Border
          'ui:border ui:border-zinc-950/10 ui:data-hover:border-zinc-950/20 ui:dark:border-white/10 ui:dark:data-hover:border-white/20',
          // Background color
          'ui:bg-transparent ui:dark:bg-white/5 ui:dark:*:bg-zinc-800',
          // Hide default focus styles
          'ui:focus:outline-hidden',
          // Invalid state
          'ui:data-invalid:border-red-500 ui:data-invalid:data-hover:border-red-500 ui:dark:data-invalid:border-red-600 ui:dark:data-invalid:data-hover:border-red-600',
          // Disabled state
          'ui:data-disabled:border-zinc-950/20 ui:data-disabled:opacity-100 ui:dark:data-disabled:border-white/15 ui:dark:data-disabled:bg-white/2.5 ui:dark:data-hover:data-disabled:border-white/15',
        ])}
      />
      {!multiple && (
        <span className="ui:pointer-events-none ui:absolute ui:inset-y-0 ui:right-0 ui:flex ui:items-center ui:pr-2">
          <svg
            className="ui:size-5 ui:stroke-zinc-500 ui:group-has-data-disabled:stroke-zinc-600 ui:sm:size-4 ui:dark:stroke-zinc-400 ui:forced-colors:stroke-[CanvasText]"
            viewBox="0 0 16 16"
            aria-hidden="true"
            fill="none"
          >
            <path d="M5.75 10.75L8 13L10.25 10.75" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.25 5.25L8 3L5.75 5.25" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </span>
  )
})
