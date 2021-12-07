import { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "service/connectDb";

const listVideos = async (request: VercelRequest, response: VercelResponse) => {
  const { userId } = request.query;

  try {
    const db = await connectToDatabase(process.env.MONGODB_URI!);

    const collection = db.collection("categories");

    const videos = collection.find({
      "videos.userId": userId,
    });

    const userVideos = await videos
      .map((category) => {
        category.videos = category.videos.filter((video: any) => {
          return video.userId === userId;
        });

        return category;
      })
      .toArray();

    return response.status(200).json({ userVideos });
  } catch (err) {
    console.log(err);
  }
};

export default listVideos;
