import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/Add.module.css";

const Add = ({ setClose }) => {
   const [file, setFile] = useState(null);
   const [title, setTitle] = useState(null);
   const [desc, setDesc] = useState(null);
   const [prices, setPrices] = useState([]);
   const [extraOptions, setExtraOptions] = useState([]);
   const [extra, setExtra] = useState(null);

   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <span className={styles.close} onClick={() => setClose(true)}>
               X
            </span>
            <h1>Add a new Pizza</h1>
            <div className={styles.item}>
               <label className={styles.label}>Choose an image</label>
               <input className={styles.input} type="file" />
            </div>
            <div className={styles.item}>
               <label className={styles.label}>Title</label>
               <input
                  className={styles.input}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
               />
            </div>
            <div className={styles.item}>
               <label className={styles.label}>Description</label>
               <textarea
                  rows={4}
                  type="text"
                  onChange={(e) => setDesc(e.target.value)}
               />
            </div>
            <div className={styles.item}>
               <label className={styles.label}>Prices</label>
               <input
                  className={`${styles.input} ${styles.inputSm}`}
                  type="number"
                  placeholder="Small"
                  onChange={(e) => changePrice(e, 0)}
               />
               <input
                  className={`${styles.input} ${styles.inputSm}`}
                  type="number"
                  placeholder="Medium"
                  onChange={(e) => changePrice(e, 1)}
               />
               <input
                  className={`${styles.input} ${styles.inputSm}`}
                  type="number"
                  placeholder="Large"
                  onChange={(e) => changePrice(e, 2)}
               />
            </div>
            <div className={styles.item}>
               <label className={styles.label}>Extra</label>
               <div className={styles.extra}>
                  <input
                     placeholder="Item"
                     className={`${styles.input} ${styles.inputSm}`}
                     type="text"
                     name="text"
                     onChange={handleExtraInput}
                  />
                  <input
                     placeholder="Price"
                     className={`${styles.input} ${styles.inputSm}`}
                     type="number"
                     name="price"
                     onChange={handleExtraInput}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Add;
