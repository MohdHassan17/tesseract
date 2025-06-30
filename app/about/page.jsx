
import styles from '@/public/css/About.module.css'
import Button from '@/ui/Button'
import Image from 'next/image'

function About() {
  return (
    <>
      <div className={styles.aboutHero}>
        <div className={styles.bottomFade}>

        </div>
        <Image
          src='/assets/section/clientele-bg.png'
          width={10}
          height={10}
          className={styles.heroImg}

        />
        <div className={styles.aboutHeroWrapper}>
           <div className={styles["hero-content"]}>
          <h1 className={styles["hero-title"]}>
            We build the digital infrastructure  <br /> behind everyday life.
          </h1>
          
        </div>
        
        
      </div>

      </div>
 
    
    
    </>
  )
}

export default About