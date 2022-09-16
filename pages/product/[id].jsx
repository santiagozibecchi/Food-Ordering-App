import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Product.module.css";

const Product = ({ pizza }) => {
   const [size, setSize] = useState(0);
   // Initial state is the small pizza
   // state that determinate pizza price
   const [costPrice, setCostPrice] = useState(pizza.prices[0]);

   // Centralizo una funcion que actualiza el precio segun
   // que opcion seleccione el cliente, ya que el precio varia por
   // entradas distintas:
   // input del checkbox y el size de la pizza
   const changePrice = (variation) => {
      // actualizo el precio
      setCostPrice(costPrice + variation);
   };

   const handleSize = (sizeIndex) => {
      const difference = pizza.prices[sizeIndex] - pizza.prices[size];
      // determino de que tipo de tamanio es la pizza
      setSize(sizeIndex);
      changePrice(difference);
   };

   // At the first time we just have an initial price
   // and after that if the customer choose an additional ingredient
   // or chage the size of the pizza
   // the cost will change
   const handleChange = (e, price) => {
      const checked = e.target.checked;

      if (checked) {
         changePrice(price);
      } else {
         changePrice(-price);
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
            <span className={styles.price}>${costPrice}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>

            <div className={styles.sizes}>
               <div className={styles.size} onClick={() => handleSize(0)}>
                  <Image alt="" src="/img/size.png" layout="fill" />
                  <span className={styles.number}>Small</span>
               </div>
               <div className={styles.size} onClick={() => handleSize(1)}>
                  <Image alt="" src="/img/size.png" layout="fill" />
                  <span className={styles.number}>Medium</span>
               </div>
               <div className={styles.size} onClick={() => handleSize(2)}>
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
                        onChange={(e) => handleChange(e, price)}
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
