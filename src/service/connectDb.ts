import { MongoClient, Db } from "mongodb";
import { URL } from "url";

let cachedDb: Db | null = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const url = new URL(uri);

  const dbName = url.pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export { connectToDatabase };
