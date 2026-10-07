import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
  headingLevel?: 1 | 2;
};

// 通用页面区块组件，统一留白、标题和淡入动画。
export function Section({ id, eyebrow, title, description, children, action, headingLevel = 2 }: SectionProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <section id={id} className="reveal mx-auto max-w-6xl scroll-mt-40 px-5 py-16 md:py-20">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase text-accent">
              {eyebrow}
            </p>
          ) : null}
          <Heading className="text-3xl font-semibold text-ink md:text-4xl">
            {title}
          </Heading>
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
