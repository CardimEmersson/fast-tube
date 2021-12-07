import { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "service/connectDb";

const deleteVideo = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  const { url } = request.body;
  const { userId } = request.query;

  try {
    const db = await connectToDatabase(process.env.MONGODB_URI!);

    const collection = db.collection("categories");

    await collection.updateOne(
      { "videos.userId": userId, "videos.url": url },
      { $pull: { videos: { url } } }
    );

    return response
      .status(200)
      .json({ message: "Video deletado com sucesso!" });
  } catch (err) {
    console.log(err);
  }
};

export default deleteVideo;
