import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import { useState } from 'react'
const Navbar = () => {
    const [open,setOpen] = useState(false);
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
        <div className={styles.hamburger} onClick = {()=>setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
        <div>
            
        </div>
        <ul className={styles.menu} style = {{right:open?'0px':'-50vw'}}>
        <li className={styles.menuItem}>
                <Link href='/'>Home</Link>
            </li>
        <li className={styles.menuItem}>
                <Link href='/'>Login</Link>
            </li>
            <li className={styles.menuItem}>
                <Link href='/'>Programs</Link>
            </li>
            <li className={styles.menuItem}>
                <Link href='/'>Resources</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar