import Product from "../../../models/Product";
import { db } from "../../../database";

export default async function (req, res) {
   const {
      method,
      cookies,
      query: { id },
   } = req;

   const token = cookies.token;

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
      if (!token || token !== process.env.TOKEN) {
         return res.status(401).json("Not authenticated");
      }

      const product = await Product.findByIdAndUpdate(id, req.body, {
         new: true,
      });
      // req.body porque le estamos enviando data desde el cliente

      res.status(200).json(product);

      await db.disconnect();

      try {
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }

   if (method === "DELETE") {
      if (!token || token !== process.env.TOKEN) {
         return res.status(401).json("Not authenticated");
      }

      const product = await Product.findByIdAndDelete(id);

      res.status(200).json("Product delete: ", product);

      await db.disconnect();

      try {
      } catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }
}
