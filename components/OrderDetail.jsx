import React, { useState } from "react";
import styles from "../styles.OrderDetail.module.css";

const OrderDetail = () => {
   const [customer, setCustomer] = useState("");
   const [address, setAddress] = useState("");

   const handleInputChange = (e) => {
      setCustomer(e.target.value);
   };

   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <h1>You will pay $12 after delivery</h1>
            <div className={styles.item}>
               <label className={styles.label}>Name Surname</label>
               <input
                  placeholder="John Doe"
                  type="text"
                  className={styles.input}
                  onChange={handleInputChange}
               />
            </div>
         </div>
      </div>
   );
};

export default OrderDetail;
