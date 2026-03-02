import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { CiMenuBurger } from "react-icons/ci";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `
  relative inline-flex items-center px-3 py-2 text-lg font-semibold
  transition-all duration-300
  focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2

  ${isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}

  after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0
  after:-translate-x-1/2 after:rounded-full after:bg-blue-600
  after:transition-all after:duration-300

  ${isActive ? "after:w-6" : "hover:after:w-6"}
  `;

const solutions = [
  { label: "Automotive Assembly", to: "/solution/automotive" },
  { label: "Medical Castors", to: "/solution/medical" },
  { label: "Heavy Duty", to: "/solution/heavy-duty" },
  { label: "Custom Solutions", to: "/solution/custom-solution" },
  { label: "Warehouse & Logistics", to: "/solution/warehouse-castor" },
  { label: "Furniture", to: "/solution/furniture-castors" },
];

const mainNavItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Who We Are" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/solution", label: "Product Showcase", items: solutions },
  { to: "/contact", label: "Get In Touch" },
];

export default function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);
  const location = useLocation();

  // Desktop dropdown state + timeout ref for smooth hover-out
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const isSolutionActive =
    activeDropdown === "Product Showcase" ||
    location.pathname.startsWith("/solution");

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const q = searchQuery.trim();
      navigate(q ? `/solution?q=${encodeURIComponent(q)}` : "/solution");
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSolutionOpen(false);
  };

  // Desktop dropdown handlers
  const openDropdown = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220); // small delay → easier to reach menu
  };

  const toggleDropdown = (label, e) => {
    if (e) e.preventDefault(); // prevent navigation if it's a link
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      openDropdown(label);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="mx-auto flex h-16 sm:h-20 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/Casters_Global_Logo.png"
                alt="Casters global logo"
                className="h-20 w-full"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              {mainNavItems.map((item) =>
                item.items ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      type="button"
                      onClick={(e) => toggleDropdown(item.label, e)}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                      className={`
    relative inline-flex items-center gap-1.5 px-3 py-2
    text-lg font-semibold transition-all duration-300
    focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2

    ${isSolutionActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}

    after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0
    after:-translate-x-1/2 after:rounded-full after:bg-blue-600
    after:transition-all after:duration-300

    ${isSolutionActive ? "after:w-6" : "hover:after:w-6"}
  `}
                    >
                      {item.label}

                      <svg
                        className={`size-4 transition-transform duration-300 ${
                          isSolutionActive ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown panel */}
                    {activeDropdown === item.label && (
                      <div
                        className="absolute left-0 top-full z-10 mt-2 w-64 origin-top-left transition-all duration-150 ease-out"
                        onMouseEnter={() => {
                          if (timeoutRef.current)
                            clearTimeout(timeoutRef.current);
                        }}
                        onMouseLeave={closeDropdown}
                      >
                        <div className="rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink key={item.to} to={item.to} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/request-info"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-blue-600 transition-colors shadow-sm"
            >
              Request Info
            </Link>
            <a
              aria-label="Chat on WhatsApp"
              className=" bg-[#25D366] hover:bg-[#128C7E] text-white p-2.5 rounded-full shadow-2xl  hover:shadow-xl flex items-center justify-center group"
              href="https://wa.me/8826883046?text=Hello%21%20I%20would%20like%20to%20know%20more%20about%20your%20castors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-3 h-3 md:w-5 md:h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <CiMenuBurger size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer – remains click-only */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-9999 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMobile}
            aria-hidden="true"
          />

          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <h2 className="text-lg font-bold text-slate-900">Menu</h2>
              <button
                onClick={closeMobile}
                className="rounded-lg p-2 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            <div className="p-5 border-b border-slate-100">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                <input
                  placeholder="Search castors…"
                  className="w-full rounded-full bg-slate-100 py-3 pl-12 pr-5 text-sm border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto p-5 space-y-1">
              {mainNavItems.map((item) =>
                item.items ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileSolutionOpen((p) => !p)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                      aria-expanded={mobileSolutionOpen}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`size-4 transition-transform ${mobileSolutionOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {mobileSolutionOpen && (
                      <div className="mt-1 ml-5 space-y-1 border-l-2 border-slate-200 pl-4 animate-fade-in">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={closeMobile}
                            className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    onClick={closeMobile}
                    className={`flex rounded-lg px-4 py-3 font-medium transition-colors
    ${
      location.pathname === item.to
        ? "bg-blue-50 text-blue-600"
        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
