import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/">Loanify</Link>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <Link href='/'>Home</Link>
            </li>
            <li className={styles.listItem}>
                <Link href='/'>Loan programs</Link>
            </li>
            <li className={styles.listItem}>
                <Link href='/'>Resources</Link>
            </li>
        </ul>
        <div className={styles.loginblock}>
        <Link href='/' className={styles.loginItem}>Xyz</Link>
        <button className={styles.darkbutton}>Login</button>
        </div>
    </div>
  )
}

export default Navbar