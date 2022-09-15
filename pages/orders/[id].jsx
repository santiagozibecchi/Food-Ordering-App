import React from "react";
import styles from "../../styles/Order.module.css";
import Image from "next/image";

const OrderPage = () => {
   return (
      <div className={styles.container}>
         <div className={styles.left}>
            <div className={styles.row}>
               <table className={styles.table}>
                  <thead>
                     <tr className={styles.tr}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Adress</th>
                        <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>
                           <span className={styles.id}>56315441</span>
                        </td>
                        <td>
                           <span className={styles.name}>John Doe</span>
                        </td>
                        <td>
                           <span className={styles.adress}>
                              Elton st. 225-55 CA
                           </span>
                        </td>
                        <td>
                           <span className={styles.total}>$39.80</span>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div className={styles.row}>
               <div className={styles.status}>
                  <Image src="/img/paid.png" width={30} height={30} alt="" />
                  <span>Payment</span>
                  <div className={styles.checkedIcon}>
                     <Image
                        src="/img/checked.png"
                        width={20}
                        height={20}
                        alt=""
                     />
                  </div>
               </div>
               <div className={styles.status}>
                  <Image src="/img/bake.png" width={30} height={30} alt="" />
                  <span>Prepating</span>
                  <div className={styles.checkedIcon}>
                     <Image
                        src="/img/checked.png"
                        width={20}
                        height={20}
                        alt=""
                     />
                  </div>
               </div>
               <div className={styles.status}>
                  <Image src="/img/bike.png" width={30} height={30} alt="" />
                  <span>On the way</span>
                  <div className={styles.checkedIcon}>
                     <Image
                        src="/img/checked.png"
                        width={20}
                        height={20}
                        alt=""
                     />
                  </div>
               </div>
               <div className={styles.status}>
                  <Image
                     src="/img/delivered.png"
                     width={30}
                     height={30}
                     alt=""
                  />
                  <span>Delivered</span>
                  <div className={styles.checkedIcon}>
                     <Image
                        src="/img/checked.png"
                        width={20}
                        height={20}
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.right}>
            <div className={styles.wrapper}>
               <h2 className={styles.title}>CART TOTAL</h2>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
               </div>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Discount:</b>$79.60
               </div>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Total:</b>$79.60
               </div>
               <button disabled className={styles.button}>
                  PAID
               </button>
            </div>
         </div>
      </div>
   );
};

export default OrderPage;
