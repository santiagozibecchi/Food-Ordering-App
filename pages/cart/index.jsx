import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/Cart.module.css";

import { useEffect } from "react";
import {
   PayPalScriptProvider,
   PayPalButtons,
   usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const CartPage = () => {
   // This values are the props in the UI
   const amount = "2";
   const currency = "USD";
   const style = { layout: "vertical" };

   const dispatch = useDispatch();
   const cart = useSelector((state) => state.cart);

   return (
      <div className={styles.container}>
         <div className={styles.left}>
            <table className={styles.table}>
               <thead>
                  <tr className={styles.trTitle}>
                     <th>Product</th>
                     <th>Name</th>
                     <th>Extras</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Total</th>
                  </tr>
               </thead>
               <tbody>
                  {cart.products.map((product) => (
                     <tr className={styles.tr} key={product._id}>
                        <td>
                           <div className={styles.imgContainer}>
                              <Image
                                 src={product.img}
                                 layout="fill"
                                 objectFit="cover"
                                 alt=""
                              />
                           </div>
                        </td>
                        <td>
                           <span className={styles.name}>{product.title}</span>
                        </td>
                        <td>
                           <span className={styles.extras}>
                              {product.extras.map((extra) => (
                                 <span key={extra._id}>{extra.text}</span>
                              ))}
                           </span>
                        </td>
                        <td>
                           <span className={styles.price}>
                              ${product.costPrice}
                           </span>
                        </td>
                        <td>
                           <span className={styles.quantity}>
                              {product.quantity}
                           </span>
                        </td>
                        <td>
                           <span className={styles.total}>
                              ${product.costPrice * product.quantity}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className={styles.right}>
            <div className={styles.wrapper}>
               <h2 className={styles.title}>CART TOTAL</h2>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Subtotal:</b>$
                  {cart.total}
               </div>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Discount:</b>$0.00
               </div>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Total:</b>${cart.total}
               </div>
               <button className={styles.button}>CHECKOUT NOW!</button>
            </div>
         </div>
      </div>
   );
};

export default CartPage;
