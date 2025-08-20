"use client";
import { useState } from "react";

import styles from "@/public/css/Navbar.module.css"; // Ensure your CSS is NOT in /public
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Button from "@/ui/Button";

import { RxHamburgerMenu } from "react-icons/rx";
import ModalForm from "@/ui/ModalForm";

function Navbar({onOpenModal}) {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
   
  };
  return (
    <div className={styles.navbar}>
      <div className={styles["hamburger"]}>
        <RxHamburgerMenu size={30} onClick={() => toggleNav()} />
      </div>
      <div className={styles["nav-logo-container"]}>
        <Link href="/">
          <Image
            src={"/assets/brand/tesseract.png"}
            className={styles["nav-logo"]}
            width={130}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div
        className={clsx(
          styles["nav-links"],
          nav == true ? styles["nav-open"] : ""
        )}
      >
        <Link
          href="/services"
          className={styles["nav-link"]}
          onClick={() => toggleNav()}
        >
          Our Services
        </Link>
        <Link
          href="/about"
          className={styles["nav-link"]}
          onClick={() => toggleNav()}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={styles["nav-link"]}
          onClick={() => toggleNav()}
        >
          Blog
        </Link>
      </div>

      <div className={styles["nav-btn-container"]}>
        <Button onClick={onOpenModal} text="Speak To Us" className={styles.navBtn} />
      </div>
    </div>
  );
}

export default Navbar;
