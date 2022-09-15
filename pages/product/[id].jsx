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
            <span>${pizza.price[size]}</span>
         </div>
      </div>
   );
};

export default Product;
