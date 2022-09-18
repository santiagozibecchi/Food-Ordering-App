import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import Add from "../components/Add";
import AddButton from "../components/AddButton";

export default function Home({ pizzaList, admin }) {
   const [close, setClose] = useState(true);

   return (
      <div className={styles.container}>
         <Head>
            <title>Pizza Restaurant</title>
            <meta name="description" content="Best Pizza Shop" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Featured />
         {admin && <AddButton setClose={setClose} />}
         <PizzaList pizzaList={pizzaList} />
         {!close && <Add setClose={setClose} />}
      </div>
   );
}

// In nextjs fetch all data before rendering all those components
// then we are showing those componets with those props we get

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
   const myCookie = ctx.req?.cookies || "";
   let admin = false;

   if (myCookie.token === process.env.TOKEN) {
      admin = true;
   }

   const { data } = await axios.get("http://localhost:3000/api/products");

   return {
      props: {
         pizzaList: data,
         admin,
      },
   };
};
