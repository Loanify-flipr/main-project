import styles from "../styles/hero.module.css";
import Image from 'next/image'
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Digital lending with personal service</h1>
        <p className={styles.description}>
          Simple online experience .Dedicated Loan Professional. Online
          Preapprovals
        </p>
        <div className={styles.buttonblock}>
          <button className={styles.button}>Apply for Loans</button>
          <button className={styles.button}>Lend Money</button>
        </div>
      </div>
      <div className={styles.card}>
        <Image src="/img/final.png" width="100%" height="100%" layout="fill" alt="error" />
      </div>
    </div>
  );
};

export default Hero;
