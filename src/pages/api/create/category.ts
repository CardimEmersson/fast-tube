import { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "service/connectDb";

const createCategory = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  const { title, color } = request.body;

  try {
    const db = await connectToDatabase(process.env.MONGODB_URI!);

    const collection = db.collection("categories");

    const findCategory = collection.find({ title });

    const categoryExists = await findCategory
      .map((category) => {
        return category;
      })
      .toArray();

    if (categoryExists.length > 0) {
      return response.status(400).json({ message: "Categoria já existe!" });
    }

    await collection.insertOne({
      title,
      color,
      videos: [],
      createdAt: new Date(),
      updateAt: new Date(),
    });

    return response
      .status(201)
      .json({ message: "Categoria criada com sucesso!" });
  } catch (err) {
    console.log(err);
  }
};

export default createCategory;
