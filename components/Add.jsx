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

   const handleExtraInput = (e) => {
      setExtra({ ...extra, [e.target.name]: e.target.value });
   };

   const handleExtra = (e) => {
      setExtraOptions((prev) => [...prev, extra]);
   };

   const changePrice = (e, index) => {
      const currentPrices = prices;
      // key : value
      // currentPrices[index] -> posicion en el array
      // Asignando valor a la posicion determinada
      currentPrices[index] = e.target.value;
      setPrices(currentPrices);
   };

   const handleClick = async () => {};

   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <span className={styles.close} onClick={() => setClose(true)}>
               X
            </span>
            <h1 className={styles.title}>Add a new Pizza</h1>
            <div className={styles.item}>
               <label className={styles.label}>Choose an image</label>
               <input
                  className={styles.input}
                  type="file"
                  // Just one file per upload
                  onChange={(e) => setFile(e.target.files[0])}
               />
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
               <div className={styles.priceContainer}>
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
                  <button className={styles.extraButton} onClick={handleExtra}>
                     Add new extra
                  </button>
               </div>
               <div className={styles.extraItems}>
                  {extraOptions.map((option) => (
                     <span className={styles.extraItem} key={option.text}>
                        {option.text}
                     </span>
                  ))}
               </div>
            </div>
            <button className={styles.addButton} onClick={handleClick}>
               Create
            </button>
         </div>
      </div>
   );
};

export default Add;
