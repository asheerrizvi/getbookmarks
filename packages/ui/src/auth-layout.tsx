import type React from "react";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="ui:flex ui:min-h-dvh ui:flex-col ui:p-2">
      <div className="ui:flex ui:grow ui:items-center ui:justify-center ui:p-6 ui:lg:rounded-lg ui:lg:bg-white ui:lg:p-10 ui:lg:shadow-xs ui:lg:ring-1 ui:lg:ring-zinc-950/5 ui:dark:lg:bg-zinc-900 ui:dark:lg:ring-white/10">
        {children}
      </div>
    </main>
  );
}
