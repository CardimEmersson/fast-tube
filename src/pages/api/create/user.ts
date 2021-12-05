import { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "service/connectDb";

const createUser = async (request: VercelRequest, response: VercelResponse) => {
  const { id, name, email, photo } = request.body;

  try {
    const db = await connectToDatabase(process.env.MONGODB_URI!);

    const collection = db.collection("users");

    await collection.insertOne({
      id,
      name,
      email,
      photo,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return response
      .status(201)
      .json({ message: "Usuário criado com sucesso!" });
  } catch (err) {
    console.log(err);
  }
};

export default createUser;
