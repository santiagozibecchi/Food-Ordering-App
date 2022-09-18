import React, { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import {
   PayPalScriptProvider,
   PayPalButtons,
   usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { reset } from "../../redux/cartSlice";
import axios from "axios";

import styles from "../../styles/Cart.module.css";
import OrderDetail from "../../components/OrderDetail";

const CartPage = () => {
   const [open, setOpen] = useState(false);
   // Metodo de pago en efectivo
   const [cash, setCash] = useState(false);
   const cart = useSelector((state) => state.cart);

   // This values are the props in the UI
   const amount = cart.total;
   const currency = "USD";
   const style = { layout: "vertical" };

   const dispatch = useDispatch();
   const router = useRouter();

   // creando orden con los datos de paypay
   const createOrder = async (data) => {
      try {
         const res = await axios.post("http://localhost:3000/api/orders", data);

         res.status === 201 && router.push("/orders/" + res.data._id);
         dispatch(reset());
      } catch (error) {
         console.log(error);
      }
   };

   // Custom component to wrap the PayPalButtons and handle currency changes
   const ButtonWrapper = ({ currency, showSpinner }) => {
      // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
      // This is the main reason to wrap the PayPalButtons in a new component
      const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

      useEffect(() => {
         dispatch({
            type: "resetOptions",
            value: {
               ...options,
               currency: currency,
            },
         });
      }, [currency, showSpinner]);

      return (
         <>
            {showSpinner && isPending && <div className="spinner" />}
            <PayPalButtons
               style={style}
               disabled={false}
               forceReRender={[amount, currency, style]}
               fundingSource={undefined}
               createOrder={(data, actions) => {
                  return actions.order
                     .create({
                        purchase_units: [
                           {
                              amount: {
                                 currency_code: currency,
                                 value: amount,
                              },
                           },
                        ],
                     })
                     .then((orderId) => {
                        // Your code here after create the order
                        return orderId;
                     });
               }}
               onApprove={function (data, actions) {
                  return actions.order.capture().then(function (details) {
                     // Your code here after capture the order
                     // Codigo que se ejecuta luego de terminar la transaccion correctamente
                     // console.log(details);
                     const shipping = details.purchase_units[0].shipping;
                     createOrder({
                        customer: shipping.name.full_name,
                        address: shipping.address.address_line_1,
                        total: cart.total,
                        method: 1,
                     });
                  });
               }}
            />
         </>
      );
   };

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
               {open ? (
                  <div className={styles.paymentMethods}>
                     <button
                        onClick={() => setCash(true)}
                        className={styles.payButton}
                     >
                        CASH ONDELIVERY
                     </button>
                     <PayPalScriptProvider
                        options={{
                           "client-id":
                              "Afew96u1-bgZeWz7y6h3tPHXcyrmZ9XLZU-iIutLaPs_otKIfdjRGnHChMO2b9mC6fSo5XcrLOL1XUsV",
                           components: "buttons",
                           currency: "USD",
                           "disable-funding": "credit,card,p24",
                        }}
                     >
                        <ButtonWrapper
                           currency={currency}
                           showSpinner={false}
                        />
                     </PayPalScriptProvider>
                  </div>
               ) : (
                  <button
                     onClick={() => setOpen(true)}
                     className={styles.button}
                  >
                     CHECKOUT NOW!
                  </button>
               )}
            </div>
         </div>
         {cash && <OrderDetail createOrder={createOrder} total={cart.total} />}
      </div>
   );
};

export default CartPage;
