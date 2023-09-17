import { navLinks } from "../constants";
import { useData } from "../context";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { theme } = useData();

  const handleNavigation = (e, id) => {
    if (!id.startsWith("#")) return;

    e.preventDefault();
    const element = document.querySelector(id);

    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop !== 0) {
        window.scrollBy(0, elementTop - 90);
      }
    }
  };

  return (
    <header className="fixed top-0 w-full bg-ct-primary z-10">
      <nav
        className="max-container px-8 sm:px-16 py-8 flex justify-between
      items-center relative"
      >
        <a href="#" className="cursor-pointer">
          <img src={theme.logoSm} width={70} alt="logo" />
        </a>

        <ul className="hidden md:flex flex-1 justify-end gap-16 ">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="text-muted font-palanquin uppercase font-semibold
              text-center
              text-lg hover:text-secondary"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="cursor-pointer md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <i className="fi fi-rr-rectangle-xmark text-secondary text-2xl flex items-center"></i>
          ) : (
            <i className="fi fi-br-bars-staggered text-primary text-2xl flex items-center "></i>
          )}
        </button>

        {toggle && (
          <ul
            className="flex md:hidden flex-1 items-center flex-col w-60
          mr-8 sm:mr-16 flicker-in-1
          rounded-2xl right-0
        absolute bg-ct-secondary top-full"
          >
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`text-muted font-palanquin uppercase font-semibold
               w-full
              text-lg hover:text-secondary`}
              >
                <a
                  className="py-6 m-0 h-max inline-block text-center w-full"
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
