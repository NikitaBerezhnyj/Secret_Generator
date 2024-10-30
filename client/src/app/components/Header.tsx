"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/Header.css";

interface HeaderProps {
  activePage: string;
}

const Header = ({ activePage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const checkDeviceType = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  return (
    <header className="header">
      <div className="brand">
        <Link href="/" onClick={closeMenu}>
          Secret Generator
        </Link>
      </div>
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        {isOpen ? (
          <IoCloseSharp size={24} />
        ) : (
          <>
            <RxHamburgerMenu size={24} />
          </>
        )}
      </div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <Link
          href="/"
          onClick={closeMenu}
          className={`nav-link ${activePage === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={closeMenu}
          className={`nav-link ${activePage === "/about" ? "active" : ""}`}
        >
          About
        </Link>
        <Link
          href="/docs"
          onClick={closeMenu}
          className={`nav-link ${activePage === "/docs" ? "active" : ""}`}
        >
          Docs
        </Link>
      </nav>
    </header>
  );
};

export default Header;
