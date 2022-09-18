import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Admin.module.css";
import axios from "axios";

const AdminPage = ({ orders, products }) => {
   const [pizzaList, setPizzaList] = useState(products);
   const [orderList, setOrderList] = useState(orders);
   const status = ["preparing", "on the way", "delivered"];

   const handleDelete = async (id) => {
      try {
         const resp = await axios.delete(
            `http://localhost:3000/api/products/${id}`
         );
         setPizzaList(pizzaList.filter((p) => p._id !== id));
      } catch (error) {
         console.log(error);
      }
   };

   const handleStatus = async (id) => {
      const item = orderList.filter((order) => order._id === id)[0];

      try {
         const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            // enviamos esto desde el cliente al backend -> req.body
            status: item.status + 1,
         });
         setOrderList([
            res.data,
            ...orderList.filter((order) => order._id !== id),
         ]);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className={styles.container}>
         {/* PRODUCTS */}
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
               {pizzaList.map((product) => (
                  <tbody key={product._id}>
                     <tr className={styles.trTitle}>
                        <td>
                           <Image
                              src={product.img}
                              width={50}
                              height={50}
                              objectFit="cover"
                              alt=""
                           />
                        </td>
                        <td>{product._id.slice(0, 5)}...</td>
                        <td>{product.title}</td>
                        <td>${product.prices[0]}</td>
                        <td>
                           <button className={styles.button}>Edit</button>
                           <button
                              onClick={() => handleDelete(product._id)}
                              className={styles.button}
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  </tbody>
               ))}
            </table>
         </div>
         {/* ORDERS */}
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
               {orders.map((order) => (
                  <tbody key={order._id}>
                     <tr className={styles.trTitle}>
                        <td>{order._id.slice(0, 5)}...</td>
                        <td>{order.customer}</td>
                        <td>${order.total}</td>
                        <td>
                           {order.method === 0 ? (
                              <span>cash</span>
                           ) : (
                              <span>Paid</span>
                           )}
                        </td>
                        <td>{status[order.status]}</td>
                        <td>
                           <button onClick={() => handleStatus(order._id)}>
                              Next Stage
                           </button>
                        </td>
                     </tr>
                  </tbody>
               ))}
            </table>
         </div>
      </div>
   );
};

export const getServerSideProps = async () => {
   const productsRes = await axios.get("http://localhost:3000/api/products");
   const orderRes = await axios.get("http://localhost:3000/api/orders");

   return {
      props: {
         orders: orderRes.data,
         products: productsRes.data,
      },
   };
};

export default AdminPage;
