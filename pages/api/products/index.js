import Product from "../../../models/Product";
import { db } from "../../../database";

export default async function (req, res) {
   const { method } = req;
   await db.connect();

   if (method === "GET") {
   }

   if (method === "POST") {
      const product = await Product.create(req.body);

      res.status(201).json(product);

      await db.disconnect();

      try {
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }
}
