import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import type React from 'react'

export function SwitchGroup({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="control"
      {...props}
      className={clsx(
        className,
        // Basic groups
        'ui:space-y-3 ui:**:data-[slot=label]:font-normal',
        // With descriptions
        'ui:has-data-[slot=description]:space-y-6 ui:has-data-[slot=description]:**:data-[slot=label]:font-medium'
      )}
    />
  )
}

export function SwitchField({
  className,
  ...props
}: { className?: string } & Omit<Headless.FieldProps, 'as' | 'className'>) {
  return (
    <Headless.Field
      data-slot="field"
      {...props}
      className={clsx(
        className,
        // Base layout
        'ui:grid ui:grid-cols-[1fr_auto] ui:gap-x-8 ui:gap-y-1 ui:sm:grid-cols-[1fr_auto]',
        // Control layout
        'ui:*:data-[slot=control]:col-start-2 ui:*:data-[slot=control]:self-start ui:sm:*:data-[slot=control]:mt-0.5',
        // Label layout
        'ui:*:data-[slot=label]:col-start-1 ui:*:data-[slot=label]:row-start-1',
        // Description layout
        'ui:*:data-[slot=description]:col-start-1 ui:*:data-[slot=description]:row-start-2',
        // With description
        'ui:has-data-[slot=description]:**:data-[slot=label]:font-medium'
      )}
    />
  )
}

const colors = {
  'dark/zinc': [
    'ui:[--switch-bg-ring:var(--color-zinc-950)]/90 ui:[--switch-bg:var(--color-zinc-900)] ui:dark:[--switch-bg-ring:transparent] ui:dark:[--switch-bg:var(--color-white)]/25',
    'ui:[--switch-ring:var(--color-zinc-950)]/90 ui:[--switch-shadow:var(--color-black)]/10 ui:[--switch:white] ui:dark:[--switch-ring:var(--color-zinc-700)]/90',
  ],
  'dark/white': [
    'ui:[--switch-bg-ring:var(--color-zinc-950)]/90 ui:[--switch-bg:var(--color-zinc-900)] ui:dark:[--switch-bg-ring:transparent] ui:dark:[--switch-bg:var(--color-white)]',
    'ui:[--switch-ring:var(--color-zinc-950)]/90 ui:[--switch-shadow:var(--color-black)]/10 ui:[--switch:white] ui:dark:[--switch-ring:transparent] ui:dark:[--switch:var(--color-zinc-900)]',
  ],
  dark: [
    'ui:[--switch-bg-ring:var(--color-zinc-950)]/90 ui:[--switch-bg:var(--color-zinc-900)] ui:dark:[--switch-bg-ring:var(--color-white)]/15',
    'ui:[--switch-ring:var(--color-zinc-950)]/90 ui:[--switch-shadow:var(--color-black)]/10 ui:[--switch:white]',
  ],
  zinc: [
    'ui:[--switch-bg-ring:var(--color-zinc-700)]/90 ui:[--switch-bg:var(--color-zinc-600)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch-shadow:var(--color-black)]/10 ui:[--switch:white] ui:[--switch-ring:var(--color-zinc-700)]/90',
  ],
  white: [
    'ui:[--switch-bg-ring:var(--color-black)]/15 ui:[--switch-bg:white] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch-shadow:var(--color-black)]/10 ui:[--switch-ring:transparent] ui:[--switch:var(--color-zinc-950)]',
  ],
  red: [
    'ui:[--switch-bg-ring:var(--color-red-700)]/90 ui:[--switch-bg:var(--color-red-600)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-red-700)]/90 ui:[--switch-shadow:var(--color-red-900)]/20',
  ],
  orange: [
    'ui:[--switch-bg-ring:var(--color-orange-600)]/90 ui:[--switch-bg:var(--color-orange-500)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-orange-600)]/90 ui:[--switch-shadow:var(--color-orange-900)]/20',
  ],
  amber: [
    'ui:[--switch-bg-ring:var(--color-amber-500)]/80 ui:[--switch-bg:var(--color-amber-400)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch-ring:transparent] ui:[--switch-shadow:transparent] ui:[--switch:var(--color-amber-950)]',
  ],
  yellow: [
    'ui:[--switch-bg-ring:var(--color-yellow-400)]/80 ui:[--switch-bg:var(--color-yellow-300)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch-ring:transparent] ui:[--switch-shadow:transparent] ui:[--switch:var(--color-yellow-950)]',
  ],
  lime: [
    'ui:[--switch-bg-ring:var(--color-lime-400)]/80 ui:[--switch-bg:var(--color-lime-300)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch-ring:transparent] ui:[--switch-shadow:transparent] ui:[--switch:var(--color-lime-950)]',
  ],
  green: [
    'ui:[--switch-bg-ring:var(--color-green-700)]/90 ui:[--switch-bg:var(--color-green-600)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-green-700)]/90 ui:[--switch-shadow:var(--color-green-900)]/20',
  ],
  emerald: [
    'ui:[--switch-bg-ring:var(--color-emerald-600)]/90 ui:[--switch-bg:var(--color-emerald-500)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-emerald-600)]/90 ui:[--switch-shadow:var(--color-emerald-900)]/20',
  ],
  teal: [
    'ui:[--switch-bg-ring:var(--color-teal-700)]/90 ui:[--switch-bg:var(--color-teal-600)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-teal-700)]/90 ui:[--switch-shadow:var(--color-teal-900)]/20',
  ],
  cyan: [
    'ui:[--switch-bg-ring:var(--color-cyan-400)]/80 ui:[--switch-bg:var(--color-cyan-300)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch-ring:transparent] ui:[--switch-shadow:transparent] ui:[--switch:var(--color-cyan-950)]',
  ],
  sky: [
    'ui:[--switch-bg-ring:var(--color-sky-600)]/80 ui:[--switch-bg:var(--color-sky-500)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-sky-600)]/80 ui:[--switch-shadow:var(--color-sky-900)]/20',
  ],
  blue: [
    'ui:[--switch-bg-ring:var(--color-blue-700)]/90 ui:[--switch-bg:var(--color-blue-600)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-blue-700)]/90 ui:[--switch-shadow:var(--color-blue-900)]/20',
  ],
  indigo: [
    'ui:[--switch-bg-ring:var(--color-indigo-600)]/90 ui:[--switch-bg:var(--color-indigo-500)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-indigo-600)]/90 ui:[--switch-shadow:var(--color-indigo-900)]/20',
  ],
  violet: [
    'ui:[--switch-bg-ring:var(--color-violet-600)]/90 ui:[--switch-bg:var(--color-violet-500)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-violet-600)]/90 ui:[--switch-shadow:var(--color-violet-900)]/20',
  ],
  purple: [
    'ui:[--switch-bg-ring:var(--color-purple-600)]/90 ui:[--switch-bg:var(--color-purple-500)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-purple-600)]/90 ui:[--switch-shadow:var(--color-purple-900)]/20',
  ],
  fuchsia: [
    'ui:[--switch-bg-ring:var(--color-fuchsia-600)]/90 ui:[--switch-bg:var(--color-fuchsia-500)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-fuchsia-600)]/90 ui:[--switch-shadow:var(--color-fuchsia-900)]/20',
  ],
  pink: [
    'ui:[--switch-bg-ring:var(--color-pink-600)]/90 ui:[--switch-bg:var(--color-pink-500)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-pink-600)]/90 ui:[--switch-shadow:var(--color-pink-900)]/20',
  ],
  rose: [
    'ui:[--switch-bg-ring:var(--color-rose-600)]/90 ui:[--switch-bg:var(--color-rose-500)] ui:dark:[--switch-bg-ring:transparent]',
    'ui:[--switch:white] ui:[--switch-ring:var(--color-rose-600)]/90 ui:[--switch-shadow:var(--color-rose-900)]/20',
  ],
}

type Color = keyof typeof colors

export function Switch({
  color = 'dark/zinc',
  className,
  ...props
}: {
  color?: Color
  className?: string
} & Omit<Headless.SwitchProps, 'as' | 'className' | 'children'>) {
  return (
    <Headless.Switch
      data-slot="control"
      {...props}
      className={clsx(
        className,
        // Base styles
        'ui:group ui:relative ui:isolate ui:inline-flex ui:h-6 ui:w-10 ui:cursor-default ui:rounded-full ui:p-[3px] ui:sm:h-5 ui:sm:w-8',
        // Transitions
        'ui:transition ui:duration-0 ui:ease-in-out ui:data-changing:duration-200',
        // Outline and background color in forced-colors mode so switch is still visible
        'ui:forced-colors:outline ui:forced-colors:[--switch-bg:Highlight] ui:dark:forced-colors:[--switch-bg:Highlight]',
        // Unchecked
        'ui:bg-zinc-200 ui:ring-1 ui:ring-black/5 ui:ring-inset ui:dark:bg-white/5 ui:dark:ring-white/15',
        // Checked
        'ui:data-checked:bg-(--switch-bg) ui:data-checked:ring-(--switch-bg-ring) ui:dark:data-checked:bg-(--switch-bg) ui:dark:data-checked:ring-(--switch-bg-ring)',
        // Focus
        'ui:focus:not-data-focus:outline-hidden ui:data-focus:outline-2 ui:data-focus:outline-offset-2 ui:data-focus:outline-blue-500',
        // Hover
        'ui:data-hover:ring-black/15 ui:data-hover:data-checked:ring-(--switch-bg-ring)',
        'ui:dark:data-hover:ring-white/25 ui:dark:data-hover:data-checked:ring-(--switch-bg-ring)',
        // Disabled
        'ui:data-disabled:bg-zinc-200 ui:data-disabled:opacity-50 ui:data-disabled:data-checked:bg-zinc-200 ui:data-disabled:data-checked:ring-black/5',
        'ui:dark:data-disabled:bg-white/15 ui:dark:data-disabled:data-checked:bg-white/15 ui:dark:data-disabled:data-checked:ring-white/15',
        // Color specific styles
        colors[color]
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          // Basic layout
          'ui:pointer-events-none ui:relative ui:inline-block ui:size-4.5 ui:rounded-full ui:sm:size-3.5',
          // Transition
          'ui:translate-x-0 ui:transition ui:duration-200 ui:ease-in-out',
          // Invisible border so the switch is still visible in forced-colors mode
          'ui:border ui:border-transparent',
          // Unchecked
          'ui:bg-white ui:shadow-sm ui:ring-1 ui:ring-black/5',
          // Checked
          'ui:group-data-checked:bg-(--switch) ui:group-data-checked:shadow-(--switch-shadow) ui:group-data-checked:ring-(--switch-ring)',
          'ui:group-data-checked:translate-x-4 ui:sm:group-data-checked:translate-x-3',
          // Disabled
          'ui:group-data-checked:group-data-disabled:bg-white ui:group-data-checked:group-data-disabled:shadow-sm ui:group-data-checked:group-data-disabled:ring-black/5'
        )}
      />
    </Headless.Switch>
  )
}
