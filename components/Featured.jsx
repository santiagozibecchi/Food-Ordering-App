import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";

const images = [
   "/img/featured.png",
   "/img/featured2.png",
   "/img/featured3.png",
];

const Featured = () => {
   const [indexImg, setIndexImg] = useState(0);

   const handleArrow = (direction) => {
      if (direction === "l") {
         setIndexImg(indexImg !== 0 ? indexImg - 1 : 2);
      }
      if (direction === "r") {
         setIndexImg(indexImg !== 2 ? indexImg + 1 : 0);
      }
   };

   return (
      <div className={styles.container}>
         <div
            className={styles.arrowContainer}
            style={{ left: 0 }}
            onClick={() => handleArrow("l")}
         >
            <Image
               src="/img/arrowl.png"
               alt=""
               layout="fill"
               objectFit="contian"
            />
         </div>

         <div
            className={styles.wrapper}
            style={{
               transform: `translateX(${-100 * indexImg}vw)`,
            }}
         >
            {images.map((img, index) => (
               <div key={index} className={styles.imgContainer}>
                  <Image src={img} alt="" layout="fill" objectFit="contian" />
               </div>
            ))}
         </div>

         <div
            className={styles.arrowContainer}
            style={{ right: 0 }}
            onClick={() => handleArrow("r")}
         >
            <Image
               src="/img/arrowr.png"
               alt=""
               layout="fill"
               objectFit="contian"
            />
         </div>
      </div>
   );
};

export default Featured;
