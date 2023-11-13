import { siteConfig } from '@/config/site';

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Pen Power AI
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Creating top-notch articles has never been this easy.{' '}
          <br className="hidden sm:inline" />
          Let PenPowerAI be your creative partner in every article.
        </p>
      </div>
    </section>
  );
}
