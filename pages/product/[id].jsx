import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";

const pizza = {
   id: 1,
   img: "/img/pizza.png",
   name: "CAMPAGNOLA",
   price: [19.9, 23.9, 27.9],
   desc: "Aliquip non aliqua minim consectetur eu.",
};

const Product = () => {
   const [size, setsize] = useState(0);

   return (
      <div className={styles.container}>
         <div className={styles.left}>
            <div className={styles.imgContainer}>
               <Image
                  src={pizza.img}
                  layout="fill"
                  alt=""
                  objectFit="contain"
               />
            </div>
         </div>
         <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>

            <div className={styles.sizes}>
               <div className={styles.size} onClick={() => setsize(0)}>
                  <Image alt="" src="/img/size.png" layout="fill" />
                  <span className={styles.number}>Small</span>
               </div>
               <div className={styles.size} onClick={() => setsize(1)}>
                  <Image alt="" src="/img/size.png" layout="fill" />
                  <span className={styles.number}>Medium</span>
               </div>
               <div className={styles.size} onClick={() => setsize(2)}>
                  <Image alt="" src="/img/size.png" layout="fill" />
                  <span className={styles.number}>Large</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Product;
