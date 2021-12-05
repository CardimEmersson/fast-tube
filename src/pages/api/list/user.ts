import { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "service/connectDb";

const listUser = async (request: VercelRequest, response: VercelResponse) => {
  const { id } = request.query;

  try {
    const db = await connectToDatabase(process.env.MONGODB_URI!);

    const collection = db.collection("users");

    const user = await collection.findOne({ id });

    return response.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

export default listUser;
