import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
};

// 通用页面区块组件，统一留白、标题和淡入动画。
export function Section({ eyebrow, title, description, children, action }: SectionProps) {
  return (
    <section className="reveal mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-muted">{description}</p>
          ) : null}
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      {children}
    </section>
  );
}
