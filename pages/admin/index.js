import React from "react";
import Image from "next/image";
import styles from "../../styles/Admin.module.css";

const AdminPage = () => {
   return (
      <div className={styles.container}>
         <div className={styles.item}>
            <h1 className={styles.title}>Products</h1>

            <table className={styles.table}>
               <thead>
                  <tr className={styles}>
                     <th>Image</th>
                     <th>Id</th>
                     <th>Title</th>
                     <th>Price</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr className={styles.trTitle}>
                     <td>
                        <Image
                           src="/img/pizza.png"
                           width={50}
                           height={50}
                           objectFit="cover"
                           alt=""
                        />
                     </td>
                     <td>PizzaId</td>
                     <td>PizzaTitle</td>
                     <td>$50</td>
                     <td>
                        <button className={styles.button}>Edit</button>
                        <button className={styles.button}>Delete</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className={styles.item}>
            <h1 className={styles.title}>Orders</h1>

            <table className={styles.table}>
               <thead>
                  <tr className={styles.trTitle}>
                     <th>Id</th>
                     <th>Customer</th>
                     <th>Total</th>
                     <th>Payment</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr className={styles.trTitle}>
                     <td>{"5666612318041".slice(0,5)}...</td>
                     <td>John Doe</td>
                     <td>$50</td>
                     <td>Paid</td>
                     <td>Preparing</td>
                     <td>
                        <button className={styles}>Next Stage</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AdminPage;
