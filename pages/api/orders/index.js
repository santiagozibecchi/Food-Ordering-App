import db from "../../../database/db";
import Order from "../../../models/Order";

const halder = async (req, res) => {
   const { method } = req;

   await db.connect();

   if (method === "GET") {
      try {
         const orders = await Order.find();
         res.status(200).json(orders);
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }
   if (method === "POST") {
      try {
         const order = await Order.create(req.body);
         res.status(201).json(order);
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }
};

export default halder;
