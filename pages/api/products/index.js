import { db } from "../../../database";
import Product from "../../../models/Product";

export default async function (req, res) {
   const { method } = req;
   await db.connect();

   if (method === "GET") {
      try {
         const products = await Product.find();

         await db.disconnect();
         res.status(200).json(products);
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
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
