import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 h-18 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-[1.6rem] font-medium leading-none"
        >
          Aishah
          <br /> <span className="ml-5">Dawood</span>
        </Link>
        <nav className="flex items-center gap-8">
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Projects", to: "/projects" },
            { label: "Contact", to: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-md transition-opacity ${
                  isActive
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-400 hover:text-neutral-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
