import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList }) {
   
   return (
      <div className={styles.container}>
         <Head>
            <title>Pizza Restaurant</title>
            <meta name="description" content="Best Pizza Shop" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Featured />
         <PizzaList pizzaList={pizzaList} />
      </div>
   );
}

// In nextjs fetch all data before rendering all those components
// then we are showing those componets with those props we get

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
   const { data } = await axios.get("http://localhost:3000/api/products");

   return {
      props: {
         pizzaList: data,
      },
   };
};
