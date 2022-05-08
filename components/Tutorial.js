import styles from '../styles/Tutorial.module.css'
const Tutorial = () => {
  return (
    <div className={styles.outercontainer}>
      <div className={styles.container}>
          <h1 className={styles.heading}>How does our process work?</h1>
        <ul className={styles.gridWrapper}>
            {/* item 1 */}
          <li className={styles.listItem}>
            <div>
            <svg width="21" height="44" viewBox="0 0 21 44" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-01accedc=""><path d="M20.6491 0.363635H10.1662C10.1236 3.75142 6.16051 7.79972 0.919034 7.79972V16.1094C5.69176 16.1094 8.65341 14.3835 9.71875 12.8707H10.1236V44H20.6491V0.363635Z" fill="#DADADA" data-v-01accedc=""></path></svg>
              <h3>Apply online</h3>
              <p>Simple online experience and dedicated loan</p>
            </div>
            {/* item 2 */}
          </li>
          <li className={styles.listItem}>
            <div>
            <svg width="34" height="45" viewBox="0 0 34 45" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-01accedc=""><path d="M1.21733 45H33.5185V36.4986H15.8338V36.2216L21.054 31.4062C30.5142 23.1605 32.9858 18.9631 32.9858 13.956C32.9858 6.09375 26.5724 0.767044 16.6648 0.767044C7.01278 0.767044 0.556818 6.32812 0.578125 15.2131H10.571C10.571 11.2713 13 8.99148 16.6222 8.99148C20.1804 8.99148 22.7585 11.1861 22.7585 14.7869C22.7585 18.0469 20.7131 20.2628 17.1335 23.4801L1.21733 37.4148V45Z" fill="#DADADA" data-v-01accedc=""></path></svg>
              <h3>Upload Documents</h3>
              <p>We only need your PAN card and an address proof</p>
            </div>
          </li>
          {/* item 3 */}
          <li className={styles.listItem}>
            <div>
            <svg width="36" height="45" viewBox="0 0 36 45" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-01accedc=""><path d="M0.535511 31.1733C0.705966 39.1207 7.56676 44.5966 17.7301 44.5966C27.6378 44.5966 35.1804 39.3764 35.1804 31.5142C35.1804 26.2088 31.75 20.456 21.9915 19.3693V19.0284L33.7528 7.94886V0.363635H2.73011V8.86506H21.054V9.14204L11.7642 18.1761V25.2926H16.8991C21.4162 25.2926 24.1222 27.4872 24.1222 30.7045C24.1222 33.858 21.5653 36.0312 17.7514 36.0312C14.1293 36.0312 11.3168 34.0923 11.1676 31.1733H0.535511Z" fill="#DADADA" data-v-01accedc=""></path></svg>
              <h3>Lock your rate</h3>
              <p>Find people lending money at your desired rates</p>
            </div>
          </li>
          {/* item 4 */}
          <li className={styles.listItem}>
            <div>
            <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-01accedc=""><path d="M0.684659 36.7557H21.7571V44H31.6222V36.7557H37.0554V28.446H31.6222V16.7273H22.098V28.446H11.1463V28.1051L26.679 0.363635H16.5795L0.684659 28.5312V36.7557Z" fill="#DADADA" data-v-01accedc=""></path></svg>
              <h3>Close Your Loan</h3>
              <p>Simple online experience and dedicated loan</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tutorial;
