import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
   const quantity = useSelector((state) => state.cart.quantity);

   return (
      <div className={styles.container}>
         <div className={styles.item}>
            <div className={styles.callButton}>
               <Image src="/img/telephone.png" alt="" width="32" height="32" />
            </div>
            <div className={styles.texts}>
               <div className={styles.text}>ORDER NOW!</div>
               <div className={styles.text}>03777 646 464621</div>
            </div>
         </div>

         <div className={styles.item}>
            <ul className={styles.list}>
               <li className={styles.listItem}>Homepage</li>
               <li className={styles.listItem}>Producs</li>
               <li className={styles.listItem}>Menu</li>
               <Image
                  src="/img/logo.png"
                  alt="logo"
                  width="160px"
                  height="69px"
               />
               <li className={styles.listItem}>Events</li>
               <li className={styles.listItem}>Blog</li>
               <li className={styles.listItem}>Contact</li>
            </ul>
         </div>
         <div className={styles.item}>
            <div className={styles.cart}>
               <Image
                  src="/img/cart.png"
                  alt="logo"
                  width="30px"
                  height="30px"
               />
               <div className={styles.counter}>{quantity}</div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
