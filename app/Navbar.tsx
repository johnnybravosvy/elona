"use client";
import Link from "next/link";
import { SiGoogletasks } from "react-icons/si";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <div>
        <Link href="/">
          <SiGoogletasks />
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tasks", href: "/tasks/list" },
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
