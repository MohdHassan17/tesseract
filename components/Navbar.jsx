'use client'
import { useState } from 'react';

import styles from '@/public/css/Navbar.module.css'; // Ensure your CSS is NOT in /public
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import Button from '@/ui/Button';

import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {

  const [nav, setNav] = useState(false)
  const toggleNav = () =>{
    setNav(!nav)
    console.log(nav)
  }
  return (
    <div className={styles.navbar}>
      <div className={styles["hamburger"]}>
          <RxHamburgerMenu size={30} onClick={()=>toggleNav()}/>
      </div>
      <div className={styles['nav-logo-container']}>
        
        <Link href="/"><Image src="/assets/logo/footer-logo.svg" className={styles['nav-logo']} width={130} height={50}  alt="logo" /></Link>
      </div>
      <div className={clsx(
                    styles["nav-links"],
                    nav == true ? styles["nav-open"] : ''
                  )}>
        <Link href="/services" className={styles['nav-link']}>Our Services</Link>
        <Link href="#" className={styles['nav-link']}>About</Link>
        <Link href="#" className={styles['nav-link']}>Our Work</Link>

    </div>

    <div className={styles['nav-btn-container']}>
    <Button href="#" text="Speak To Us"  className={styles.navBtn}/>
    </div>
    </div>
  );
}

export default Navbar;
