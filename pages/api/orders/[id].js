import { db } from "../../../database";
import Order from "../../../models/Order";

const halder = async (req, res) => {
   const {
      method,
      query: { id } /* de la url */,
   } = req;

   await db.connect();

   if (method === "GET") {
      try {
         const order = await Order.findById(id);
         await db.disconnect();

         res.status(200).json(order);
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }
   if (method === "PUT") {
   }
   if (method === "POST") {
   }
};

export default halder;
