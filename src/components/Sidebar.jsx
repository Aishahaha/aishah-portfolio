import { NavLink } from "react-router-dom";

const links = [
  { label: "Introduction", href: "/" },
  { label: "About Me", href: "/About" },
  { label: "Projects", href: "/Projects" },
  { label: "Skills & Tools", href: "/Skills" },
  { label: "Experience", href: "/Experience" },
  { label: "Education", href: "/Education" },
  { label: "Contact", href: "/Contact" },
];

function Sidebar() {
  return (
    <aside class="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
      <div class="h-full py-6 pr-4 overflow-auto no-scrollbar lg:py-8">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-1">
            <h4 class="rounded-md px-2 py-1 text-sm font-medium">Sections</h4>
            <div class="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground ${isActive ? "bg-accent font-medium text-accent-foreground" : "font-normal text-foreground"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              {/* <a
                class="group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground bg-accent font-medium text-accent-foreground"
                target=""
                rel=""
                href="/"
              >
                Introduction
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

/* <div class="h-full py-6 pr-4 overflow-auto no-scrollbar lg:py-8">
                <div class="flex flex-col gap-6">
                  <div class="flex flex-col gap-1">
                    <h4 class="rounded-md px-2 py-1 text-sm font-medium">
                      Sections
                    </h4>
                    <div class="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
                      <a
                        class="group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground bg-accent font-medium text-accent-foreground"
                        target=""
                        rel=""
                        href="/"
                      >
                        Introduction
                      </a>
                      <a
                        class="group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground font-normal text-foreground"
                        target=""
                        rel=""
                        href="/about"
                      >
                        About Me
                      </a>
                      <a
                        class="group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground font-normal text-foreground"
                        target=""
                        rel=""
                        href="/projects"
                      >
                        Projects
                      </a>
                      <a
                        class="group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground font-normal text-foreground"
                        target=""
                        rel=""
                        href="/skills-tools"
                      >
                        Skills &amp; Tools
                      </a>
                      <a
                        class="group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground font-normal text-foreground"
                        target=""
                        rel=""
                        href="/experience"
                      >
                        Experience
                      </a>
                      <a
                        class="group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground font-normal text-foreground"
                        target=""
                        rel=""
                        href="/education"
                      >
                        Education
                      </a>
                      <a
                        class="group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground font-normal text-foreground"
                        target=""
                        rel=""
                        href="/contact"
                      >
                        Contact
                      </a>
                      <a
                        class="group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground font-normal text-foreground"
                        target=""
                        rel=""
                        href="/stats"
                      >
                        Stats
                      </a>
                    </div>
                  </div>
                </div>
              </div> */
