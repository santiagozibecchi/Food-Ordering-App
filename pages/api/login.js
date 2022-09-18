import cookie from "cookie";

const handler = async (req, res) => {
   const { method } = req;

   await db.connect();

   if (method === "POST") {
      const { username, password } = req.body;
      if (
         username === process.env.USERNAME &&
         password === process.env.PASSWORD
      ) {
         // si lo anterior cumple con las condiciones, enviamos una cookie
         res.setHeaders(
            "Set-Cookie",
            cookie.serialize("token", process.env.TOKEN, {
               maxAge: 60 * 60,
               sameSite: "strict",
               path: "/",
            })
         );
         res.status(200).json("Succesfull");
      } else {
         res.status(400).json("Wrong Credentials!");
      }
   }
};

export default handler;
