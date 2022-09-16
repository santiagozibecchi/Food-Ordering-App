import React from "react";
import styles from "../../styles/Order.module.css";
import Image from "next/image";

const OrderPage = () => {
   // * STATUS -> 0, 1, 2, 3
   // A medida que avanza el pedido retorna el css correspondiente
   const status = 1;

   const statusClass = (index) => {
      if (index - status < 1) return styles.done;
      if (index - status === 1) return styles.inProgress;
      if (index - status > 1) return styles.undone;
   };

   return (
      <div className={styles.container}>
         <div className={styles.left}>
            <div className={styles.row}>
               <table className={styles.table}>
                  <thead>
                     <tr className={styles.trTitle}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Adress</th>
                        <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className={styles.tr}>
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
               <div className={statusClass(0)}>
                  <Image src="/img/paid.png" width={30} height={30} alt="" />
                  <span>Payment</span>
                  <div className={styles.checkedIcon}>
                     <Image
                        className={styles.checkedIcon}
                        src="/img/checked.png"
                        width={20}
                        height={20}
                        alt=""
                     />
                  </div>
               </div>
               <div className={statusClass(1)}>
                  <Image src="/img/bake.png" width={30} height={30} alt="" />
                  <span>Prepating</span>
                  <div className={styles.checkedIcon}>
                     <Image
                        className={styles.checkedIcon}
                        src="/img/checked.png"
                        width={20}
                        height={20}
                        alt=""
                     />
                  </div>
               </div>
               <div className={statusClass(2)}>
                  <Image src="/img/bike.png" width={30} height={30} alt="" />
                  <span>On the way</span>
                  <div className={styles.checkedIcon}>
                     <Image
                        className={styles.checkedIcon}
                        src="/img/checked.png"
                        width={20}
                        height={20}
                        alt=""
                     />
                  </div>
               </div>
               <div className={statusClass(3)}>
                  <Image
                     src="/img/delivered.png"
                     width={30}
                     height={30}
                     alt=""
                  />
                  <span>Delivered</span>
                  <div className={styles.checkedIcon}>
                     <Image
                        className={styles.checkedIcon}
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
