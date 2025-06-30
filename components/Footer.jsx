"use client"

import Image from 'next/image'
import Link from 'next/link'


import styles from '@/public/css/components/Footer.module.css'


function Footer() {





  return (
    <footer className={styles.footer}>

        

    <div className={styles['footer-logo-container']}>
        <Image src="/assets/logo/footer-logo.svg" className={styles['footer-logo']} width={130} height={50}  alt="logo" />
    </div>
    <div className={styles['links-container']}>
        <div className={styles['links']}>
        <h3 className={styles["links-heading"]}>Contact Us</h3>
        <a href="https://wa.me/923314550893" className={styles['link']}>+92 331 4550893</a>
         <a href="mailto:discover@tesseractdev.org"  className={styles['link']}>discover@tesseractdev.org</a>
         <div className="social-links">

         </div>
        </div>

        <div className={styles['links']}>
        <h3 className={styles["links-heading"]}>Overview</h3>
        <Link href='#'  className={styles['link']} >About</Link>
         <Link href='#'  className={styles['link']}>Services</Link>
         <Link href='#'  className={styles['link']}>Contact Us</Link>
        
        </div>
    </div>


    </footer>
  )
}

export default Footer