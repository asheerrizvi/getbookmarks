import * as Headless from '@headlessui/react'
import clsx from 'clsx'

export function RadioGroup({
  className,
  ...props
}: { className?: string } & Omit<Headless.RadioGroupProps, 'as' | 'className'>) {
  return (
    <Headless.RadioGroup
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

export function RadioField({
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
        'ui:grid ui:grid-cols-[1.125rem_1fr] ui:gap-x-4 ui:gap-y-1 ui:sm:grid-cols-[1rem_1fr]',
        // Control layout
        'ui:*:data-[slot=control]:col-start-1 ui:*:data-[slot=control]:row-start-1 ui:*:data-[slot=control]:mt-0.75 ui:sm:*:data-[slot=control]:mt-1',
        // Label layout
        'ui:*:data-[slot=label]:col-start-2 ui:*:data-[slot=label]:row-start-1',
        // Description layout
        'ui:*:data-[slot=description]:col-start-2 ui:*:data-[slot=description]:row-start-2',
        // With description
        'ui:has-data-[slot=description]:**:data-[slot=label]:font-medium'
      )}
    />
  )
}

const base = [
  // Basic layout
  'ui:relative ui:isolate ui:flex ui:size-4.75 ui:shrink-0 ui:rounded-full ui:sm:size-4.25',
  // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
  'ui:before:absolute ui:before:inset-0 ui:before:-z-10 ui:before:rounded-full ui:before:bg-white ui:before:shadow-sm',
  // Background color when checked
  'ui:group-data-checked:before:bg-(--radio-checked-bg)',
  // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
  'ui:dark:before:hidden',
  // Background color applied to control in dark mode
  'ui:dark:bg-white/5 ui:dark:group-data-checked:bg-(--radio-checked-bg)',
  // Border
  'ui:border ui:border-zinc-950/15 ui:group-data-checked:border-transparent ui:group-data-hover:group-data-checked:border-transparent ui:group-data-hover:border-zinc-950/30 ui:group-data-checked:bg-(--radio-checked-border)',
  'ui:dark:border-white/15 ui:dark:group-data-checked:border-white/5 ui:dark:group-data-hover:group-data-checked:border-white/5 ui:dark:group-data-hover:border-white/30',
  // Inner highlight shadow
  'ui:after:absolute ui:after:inset-0 ui:after:rounded-full ui:after:shadow-[inset_0_1px_--theme(--color-white/15%)]',
  'ui:dark:after:-inset-px ui:dark:after:hidden ui:dark:after:rounded-full ui:dark:group-data-checked:after:block',
  // Indicator color (light mode)
  'ui:[--radio-indicator:transparent] ui:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] ui:group-data-hover:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] ui:group-data-hover:[--radio-indicator:var(--color-zinc-900)]/10',
  // Indicator color (dark mode)
  'ui:dark:group-data-hover:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] ui:dark:group-data-hover:[--radio-indicator:var(--color-zinc-700)]',
  // Focus ring
  'ui:group-data-focus:outline ui:group-data-focus:outline-2 ui:group-data-focus:outline-offset-2 ui:group-data-focus:outline-blue-500',
  // Disabled state
  'ui:group-data-disabled:opacity-50',
  'ui:group-data-disabled:border-zinc-950/25 ui:group-data-disabled:bg-zinc-950/5 ui:group-data-disabled:[--radio-checked-indicator:var(--color-zinc-950)]/50 ui:group-data-disabled:before:bg-transparent',
  'ui:dark:group-data-disabled:border-white/20 ui:dark:group-data-disabled:bg-white/2.5 ui:dark:group-data-disabled:[--radio-checked-indicator:var(--color-white)]/50 ui:dark:group-data-checked:group-data-disabled:after:hidden',
]

const colors = {
  'dark/zinc': [
    'ui:[--radio-checked-bg:var(--color-zinc-900)] ui:[--radio-checked-border:var(--color-zinc-950)]/90 ui:[--radio-checked-indicator:var(--color-white)]',
    'ui:dark:[--radio-checked-bg:var(--color-zinc-600)]',
  ],
  'dark/white': [
    'ui:[--radio-checked-bg:var(--color-zinc-900)] ui:[--radio-checked-border:var(--color-zinc-950)]/90 ui:[--radio-checked-indicator:var(--color-white)]',
    'ui:dark:[--radio-checked-bg:var(--color-white)] ui:dark:[--radio-checked-border:var(--color-zinc-950)]/15 ui:dark:[--radio-checked-indicator:var(--color-zinc-900)]',
  ],
  white:
    'ui:[--radio-checked-bg:var(--color-white)] ui:[--radio-checked-border:var(--color-zinc-950)]/15 ui:[--radio-checked-indicator:var(--color-zinc-900)]',
  dark: 'ui:[--radio-checked-bg:var(--color-zinc-900)] ui:[--radio-checked-border:var(--color-zinc-950)]/90 ui:[--radio-checked-indicator:var(--color-white)]',
  zinc: 'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-zinc-600)] ui:[--radio-checked-border:var(--color-zinc-700)]/90',
  red: 'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-red-600)] ui:[--radio-checked-border:var(--color-red-700)]/90',
  orange:
    'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-orange-500)] ui:[--radio-checked-border:var(--color-orange-600)]/90',
  amber:
    'ui:[--radio-checked-bg:var(--color-amber-400)] ui:[--radio-checked-border:var(--color-amber-500)]/80 ui:[--radio-checked-indicator:var(--color-amber-950)]',
  yellow:
    'ui:[--radio-checked-bg:var(--color-yellow-300)] ui:[--radio-checked-border:var(--color-yellow-400)]/80 ui:[--radio-checked-indicator:var(--color-yellow-950)]',
  lime: 'ui:[--radio-checked-bg:var(--color-lime-300)] ui:[--radio-checked-border:var(--color-lime-400)]/80 ui:[--radio-checked-indicator:var(--color-lime-950)]',
  green:
    'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-green-600)] ui:[--radio-checked-border:var(--color-green-700)]/90',
  emerald:
    'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-emerald-600)] ui:[--radio-checked-border:var(--color-emerald-700)]/90',
  teal: 'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-teal-600)] ui:[--radio-checked-border:var(--color-teal-700)]/90',
  cyan: 'ui:[--radio-checked-bg:var(--color-cyan-300)] ui:[--radio-checked-border:var(--color-cyan-400)]/80 ui:[--radio-checked-indicator:var(--color-cyan-950)]',
  sky: 'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-sky-500)] ui:[--radio-checked-border:var(--color-sky-600)]/80',
  blue: 'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-blue-600)] ui:[--radio-checked-border:var(--color-blue-700)]/90',
  indigo:
    'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-indigo-500)] ui:[--radio-checked-border:var(--color-indigo-600)]/90',
  violet:
    'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-violet-500)] ui:[--radio-checked-border:var(--color-violet-600)]/90',
  purple:
    'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-purple-500)] ui:[--radio-checked-border:var(--color-purple-600)]/90',
  fuchsia:
    'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-fuchsia-500)] ui:[--radio-checked-border:var(--color-fuchsia-600)]/90',
  pink: 'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-pink-500)] ui:[--radio-checked-border:var(--color-pink-600)]/90',
  rose: 'ui:[--radio-checked-indicator:var(--color-white)] ui:[--radio-checked-bg:var(--color-rose-500)] ui:[--radio-checked-border:var(--color-rose-600)]/90',
}

type Color = keyof typeof colors

export function Radio({
  color = 'dark/zinc',
  className,
  ...props
}: { color?: Color; className?: string } & Omit<Headless.RadioProps, 'as' | 'className' | 'children'>) {
  return (
    <Headless.Radio
      data-slot="control"
      {...props}
      className={clsx(className, 'ui:group ui:inline-flex ui:focus:outline-hidden')}
    >
      <span className={clsx([base, colors[color]])}>
        <span
          className={clsx(
            'ui:size-full ui:rounded-full ui:border-[4.5px] ui:border-transparent ui:bg-(--radio-indicator) ui:bg-clip-padding',
            // Forced colors mode
            'ui:forced-colors:border-[Canvas] ui:forced-colors:group-data-checked:border-[Highlight]'
          )}
        />
      </span>
    </Headless.Radio>
  )
}
