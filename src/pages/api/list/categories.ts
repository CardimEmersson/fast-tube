import { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "service/connectDb";

const listCategories = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  try {
    const db = await connectToDatabase(process.env.MONGODB_URI!);

    const collection = db.collection("categories");

    const documentCategories = collection.find();

    const categories = await documentCategories
      .map((category) => {
        return category;
      })
      .toArray();

    return response.status(200).json({ categories });
  } catch (err) {
    console.log(err);
  }
};

export default listCategories;
