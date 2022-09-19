import React from "react";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Order.module.css";

const OrderPage = ({ order }) => {
   // * STATUS -> 0, 1, 2, 3
   // A medida que avanza el pedido retorna el css correspondiente
   const status = order.status;

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
                           <span className={styles.id}>{order._id}</span>
                        </td>
                        <td>
                           <span className={styles.name}>{order.customer}</span>
                        </td>
                        <td>
                           <span className={styles.adress}>
                              {order.address}
                           </span>
                        </td>
                        <td>
                           <span className={styles.total}>${order.total}</span>
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
                  <b className={styles.totalTextTitle}>Subtotal:</b>$
                  {order.total}
               </div>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Discount:</b>$0.00
               </div>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Total:</b>${order.total}
               </div>
               <button disabled className={styles.button}>
                  PAID
               </button>
            </div>
         </div>
      </div>
   );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async ({ params }) => {
   const { data } = await axios.get(
      `http://localhost:3000/api/orders/${params.id}`
   );

   return {
      props: {
         order: data,
      },
   };
};

export default OrderPage;
