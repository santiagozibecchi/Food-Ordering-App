import { db } from "../../../database";
import Order from "../../../models/Order";

export default async function (req, res) {
   const { method } = req;

   await db.connect();

   if (method === "GET") {
      try {
         const orders = await Order.find();
         await db.disconnect();
         res.status(200).json(orders);
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }
   if (method === "POST") {
      try {
         const order = await Order.create(req.body);
         await db.disconnect();
         res.status(201).json(order);
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }
}
