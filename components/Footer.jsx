import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
   return (
      <div className={styles.container}>
         <div className={styles.item}>
            <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover"/>
         </div>
         <div className={styles.item}>
            <div className={styles.card}>
               <h2 className={styles.motto}>
                  OH YES, WE DID. WELL BAKED SLICE OF PIZZA
               </h2>
            </div>
            <div className={styles.card}>
               <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
               <p className={styles.text}>
                  1654 R. Don Road
                  <br /> NewYork, 8555
                  <br /> (620) 6665-511
               </p>
               <p className={styles.text}>
                  1654 R. Don Road
                  <br /> NewYork, 8555
                  <br /> (620) 6665-511
               </p>
               <p className={styles.text}>
                  1654 R. Don Road
                  <br /> NewYork, 8555
                  <br /> (620) 6665-511
               </p>
            </div>
            <div className={styles.card}>
               <h1 className={styles.title}>WORKING HOURS</h1>
               <p className={styles.text}>
                  MONDAY UNTIL FRIDAY
                  <br /> 9:00 - 22:00
               </p>
               <p className={styles.text}>
                  SATURDAY - SUNDAY
                  <br /> 9:00 - 22:00
               </p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
