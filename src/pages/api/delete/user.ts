import { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "service/connectDb";

const deleteUser = async (request: VercelRequest, response: VercelResponse) => {
  const { userId } = request.query;

  try {
    const db = await connectToDatabase(process.env.MONGODB_URI!);

    const collectionCategories = db.collection("categories");
    const collectionUsers = db.collection("users");

    const videos = collectionCategories.find({
      "videos.userId": userId,
    });

    const userVideos = await videos
      .map((category) => {
        return category;
      })
      .toArray();

    userVideos.forEach(async () => {
      await collectionCategories.updateOne(
        { "videos.userId": userId },
        { $pull: { videos: { userId } } }
      );
    });

    await collectionUsers.deleteOne({ id: userId });

    return response
      .status(200)
      .json({ message: "Usuário deletado com sucesso!" });
  } catch (err) {
    console.log(err);
  }
};

export default deleteUser;
