"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt, BiChevronDown } from "react-icons/bi";
import clsx from "clsx";
import { useState } from "react";
const links = [
  { name: "Home", href: "/dashboard", icon: BiHomeAlt },
  { name: "Home", href: "/de", icon: BiHomeAlt },
  { name: "Home", href: "/das", icon: BiHomeAlt },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: BiChevronDown,
    sublinks: [
      // Sublinks for the "Customers" link
      { name: "Use Client", href: "/dashboard/customers/use-client" },
      { name: "Add Customer", href: "/dashboard/customers/add-customer" },
    ],
  },
  { name: "Home", href: "/das", icon: BiHomeAlt },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (name: string) => {
    setExpandedItems({
      ...expandedItems,
      [name]: !expandedItems[name],
    });
  };
  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <div key={index}>
            {link.sublinks ? (
              <div className="relative">
                <div
                  onClick={() => toggleExpand(link.name)}
                  className={clsx(
                    "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-[#dddddd] hover:text-black md:flex-none md:justify-start md:p-2 md:px-3",
                    {
                      "bg-white text-black font-bold": pathname === link.href,
                    }
                  )}
                >
                  <LinkIcon className="w-6" />
                  <p className="hidden md:block">{link.name}</p>
                </div>
                {expandedItems[link.name] &&
                  link.sublinks.map((sublink, subindex) => (
                    <Link
                      key={subindex}
                      href={sublink.href}
                      className={clsx(
                        "flex h-[48px] items-center gap-2 p-2 text-sm font-medium hover:bg-[#dddddd] hover:text-black",
                        {
                          "bg-white text-black font-bold":
                            pathname === sublink.href,
                        }
                      )}
                    >
                      {sublink.name}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link
                href={link.href}
                key={index}
                className={clsx(
                  "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-[#dddddd] hover:text-black md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    "bg-white text-black font-bold": pathname === link.href,
                  }
                )}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            )}
          </div>
        );
      })}
    </>
  );
}
