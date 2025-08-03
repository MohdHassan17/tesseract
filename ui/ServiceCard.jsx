import Image from "next/image";


import styles from "@/public/css/ui/ServiceCard.module.css";

import { LuArrowRight } from "react-icons/lu";

import Button from "@/ui/Button";
import Link from "next/link";

export default function ServiceCard({ title, description, imageSrc, href }) {
  return (
      <div className={styles.serviceWrapper}>
             <div className={styles["service-card"]} >

     

        <div className={styles["service-content"]}>
          <h2 className={styles["service-title"]}>{title}</h2>
          <p className={styles['service-description']}>{description}</p>
          <span>  <Link href={`${href}`}> <div className={styles.cardBtn}><LuArrowRight size={20} color="#6e00ff"/></div></Link></span>
          
    
    
    </div>
    </div>
      </div>
      
   
  );
}
