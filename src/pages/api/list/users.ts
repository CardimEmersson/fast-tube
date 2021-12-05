import { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "service/connectDb";

const listUsers = async (request: VercelRequest, response: VercelResponse) => {
  try {
    const db = await connectToDatabase(process.env.MONGODB_URI!);

    const collection = db.collection("users");

    const documentUsers = collection.find();

    const users = await documentUsers
      .map((user) => {
        return user;
      })
      .toArray();

    return response.status(200).json({ users });
  } catch (err) {
    console.log(err);
  }
};

export default listUsers;
