import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface HomeLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export function HomeLayout({ children, className }: HomeLayoutProps) {
  return (
    <div className="flex-auto grid place-content-center">
      <main
        className={cn(
          'prose prose-zinc dark:prose-invert prose-a:font-normal prose-a:no-underline hover:prose-a:underline prose-a:text-blue-500 dark:prose-a:text-blue-400 max-w-md m-8 prose-hr:my-8 last:prose-hr:hidden',
          className
        )}
      >
        {children}
      </main>
    </div>
  );
}
