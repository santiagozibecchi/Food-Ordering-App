import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
   {
      customer: {
         type: String,
         required: true,
         maxlength: 60,
      },
      adress: {
         type: String,
         required: true,
         maxlength: 200,
      },
      total: {
         type: Number,
         required: true,
         maxlength: 200,
      },
      status: {
         type: Number,
         default: 0,
      },
      method: {
         type: Number,
         required: true,
      },
   },
   { timestamps: true }
);

// * Condicion
// Si anteriormente ya se encuentra el producto
// No lo vuelvas a crear devuelta

export default mongoose.models.Product ||
   mongoose.model("Product", ProductSchema);

// Metodo de pago
// * METHOD -> 0 = cash / 1 = payable
