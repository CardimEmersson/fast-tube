import { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "service/connectDb";

const createVideo = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  const { titleCategory, titleVideo, url, userId } = request.body;

  try {
    const db = await connectToDatabase(process.env.MONGODB_URI!);

    const collection = db.collection("categories");

    const documentCategory = collection.find({
      title: titleCategory,
    });

    const category = await documentCategory
      .map((category) => {
        return category;
      })
      .toArray();

    const categoryVideos = category[0]?.videos || [];

    const newVideos = [
      ...categoryVideos,
      {
        title: titleVideo,
        url,
        userId,
        createdAt: new Date(),
        updateAt: new Date(),
      },
    ];

    await collection.updateOne(
      { title: titleCategory },
      { $set: { videos: newVideos } }
    );

    return response.status(201).json({ message: "Video criado com sucesso!" });
  } catch (err) {
    console.log(err);
  }
};

export default createVideo;
