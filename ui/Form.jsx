import styles from '@/public/css/ui/Form.module.css'
import services from '@/data/services.json'

import Heading from './Heading'

function Form() {
  return (
    <>

    <div className={styles.formContainer}>
        <h2 className={styles.formHeading}> Got a <span>Project ?</span> </h2>
        <form  className={styles.form}>
            <input type="text" name='name' placeholder='Name' className={styles.input} />
            <input type="text" name='email' placeholder='Email' className={styles.input} />
            <select name="service" id="" className={`${styles.input} ${styles.select}`} >
                <option disabled selected> Select Service</option>
                {services.map(service => <option value={service.title}>{service.title}</option>)}
                
            </select>
            <textarea name="message" id="" className={styles.textArea} placeholder='Message'></textarea>
            <input type="submit" className={styles.submit} value="Send Message" />
        </form>
    </div>
    
    </>
  )
}

export default Form