import styles from '../styles/Footer.module.css'
import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.cardLarge}>
            <h1 className={styles.title}>Loanify</h1>
            <h4>Follow us on social media!</h4>
            <div className={styles.socialMedia}>
            <h4>Instagram</h4>
            <h4>Twitter</h4>
            <h4>facebook</h4>
        </div>
        </div>
        <div className={styles.cardSmall}>
            <h3 className={styles.titlesmall}>Loanify</h3>
            <h4><Link href='/' className={styles.cardItems}>Home</Link></h4>
            <h4><Link href='/' className={styles.cardItems}>License</Link></h4>
            <h4><Link href='/' className={styles.cardItems}>Join Our Team</Link></h4>
        </div>
        <div className={styles.cardSmall}>
        <h3 className={styles.titlesmall}>Resources</h3>
            <h4><Link href='/' className={styles.cardItems}>get a quote</Link></h4>
            <h4><Link href='/' className={styles.cardItems}>Apply Now</Link></h4>
            <h4><Link href='/' className={styles.cardItems}>Blog</Link></h4>
        </div>
        <div className={styles.cardMed}>
        <h3 className={styles.titlesmall}>Contact us</h3>
            <h5><Link href='/' className={styles.cardItems}>Mail</Link></h5>
            <h5 className={styles.cardItems}>Number</h5>
            <h5 className={styles.cardItems}>Headquarters</h5>
        </div>
    </footer>
  )
}

export default Footer