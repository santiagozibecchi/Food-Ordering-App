import React from "react";
import PizzaCard from "./PizzaCard";
import styles from "../styles/PizzaList.module.css";

const PizzaList = () => {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}></h1>
         <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor
            sapiente quas doloremque aspernatur, beatae voluptates recusandae
            nobis tempore ipsam, laborum soluta quae illo maxime cupiditate
            illum molestias porro eveniet!
         </p>
         <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
         </div>
      </div>
   );
};

export default PizzaList;
