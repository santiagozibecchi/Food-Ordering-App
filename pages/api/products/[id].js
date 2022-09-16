import Product from "../../../models/Product";
import { db } from "../../../database";

export default async function (req, res) {
   const {
      method,
      query: { id },
   } = req;

   await db.connect();

   if (method === "GET") {
      try {
         const product = await Product.findById(id);

         await db.disconnect();
         res.status(200).json(product);
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }

   if (method === "PUT") {
      const product = await Product.create(req.body);

      res.status(201).json(product);

      await db.disconnect();

      try {
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }

   if (method === "DELETE") {
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
