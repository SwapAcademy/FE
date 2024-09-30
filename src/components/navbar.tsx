import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Courses",
      href: "/courses",
    },
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div>
      <header>
        <div>
          <h1>Swap Academy</h1>
        </div>
        <nav>
          {navItems.map((item, index) => {
            return (
              <a key={index} href={item.href}>
                {item.name}
              </a>
            );
          })}
        </nav>
        <div>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
