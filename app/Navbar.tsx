"use client";
import Link from "next/link";
import { SiGoogletasks } from "react-icons/si";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  return (
    <nav className="flex space-x-8  items-center border-b mb-5 px-5 py-3">
      <Link className="font-black size-10" href="/">
        <SiGoogletasks />
      </Link>
      <NavLinks />
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tasks", href: "/tasks" },
  ];
  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classNames({
              "nav-link": true,
              "!text-zinc-900": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
