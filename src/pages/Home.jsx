function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mb-3">
        Aishah Dawood
      </h1>
      <h1 class="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-3xl lg:leading-[1.1] mb-4 text-muted-foreground">
        A coder by day, problem-solver by night!
      </h1>
      <p class="w-full text-left text-base font-light text-foreground sm:text-lg mb-4">
        I am a dedicated Software Engineer specializing in full-stack
        application development. I enjoy crafting responsive web solutions using
        modern technologies like Next.js, React, and Tailwind CSS. Currently, I
        am expanding my skills into mobile development with React Native and
        Expo, aiming to deliver comprehensive, user-centric software solutions.
      </p>
      <div class="flex w-full items-center justify-start gap-2 my-4 pt-2">
        <a
          target="_blank"
          data-slot="button"
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 gap-1.5 px-3 has-[&gt;svg]:px-2.5 rounded-md"
          href="https://www.overleaf.com/read/pwbbqtpthxxr#946f81"
        >
          Get Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-external-link size-3"
            aria-hidden="true"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
        </a>
        <a
          data-slot="button"
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 gap-1.5 px-3 has-[&gt;svg]:px-2.5 rounded-md"
          href="mailto:aishahdawood@gmail.com"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail size-4"
            aria-hidden="true"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>
          Send Mail
        </a>
      </div>
    </div>
  );
}

export default Home;
