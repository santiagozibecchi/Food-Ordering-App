import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Product.module.css";

const Product = ({ pizza }) => {
   const [size, setsize] = useState(0);

   // At the first time we just have an initial price
   // and after that if the customer choose an additional ingredient
   // or chage the size of the pizza
   // the cost will change
   const handleChange = (e, text, price) => {
      const checked = e.target.check;

      if (checked) {
      }
   };

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
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>${pizza.prices[size]}</span>
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
            <h3 className={styles.choose}>Choose additional ingredient</h3>
            <div className={styles.ingredients}>
               {pizza.extraOptions.map(({ text, price, _id }) => (
                  <div className={styles.option} key={_id}>
                     <input
                        type="checkbox"
                        id={text}
                        name={text}
                        className={styles.checkbox}
                        onChange={(e) => handleChange(e, text, price)}
                     />
                     <label htmlFor={text}>{text}</label>
                  </div>
               ))}
            </div>
            <div className={styles.add}>
               <input
                  type="number"
                  defaultValue={1}
                  className={styles.quantity}
               />
               <button className={styles.button}>Add to Cart</button>
            </div>
         </div>
      </div>
   );
};

export const getServerSideProps = async ({ params }) => {
   // params.id => viene de la url

   const { data } = await axios.get(
      `http://localhost:3000/api/products/${params.id}`
   );

   return {
      props: {
         pizza: data,
      },
   };
};

export default Product;
