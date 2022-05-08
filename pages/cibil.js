import styles from  "../styles/cibil.module.css"
export default function Cibil(){
    return (
        <div className={styles.container}>
            <p className={`${styles.color_green} ${styles.md}`}>Based on the details you uploaded ...</p>
            <div className={styles.card_container}>
                <h2 className={styles.lg}>Your CIBIL Score:</h2>
                <div className={styles.section}></div>

                <h1 className={styles.cibilScore}>
                    300
                </h1>

                <h3 className={styles.maxLoan}>Maximum Loan Amount: {}</h3>
            </div>
            <form action="">
            <button className={`${styles.btn} ${styles.btn_home}`} type="button">Return Home</button>
            <button className={`${styles.btn} ${styles.btn_apply}`} type="button">Apply <span></span></button>
            </form>
            
        </div>
    )
}