import db from "../../../database/db";
import Order from "../../../models/Order";

const halder = async (req, res) => {
   const { method } = req;

   await db.connect();

   if (method === "GET") {
   }
   if (method === "PUT") {
   }
   if (method === "POST") {
   }
};

export default halder;
