import "server-only";
import { auth} from "@clerk/nextjs/server";
import { db } from "./db";
import { images } from "./db/schema";
import { eq } from "drizzle-orm";


export async function getMyImages(){
    const { userId } = auth();

    if (!userId) throw new Error("Unauthorized")

  const fetchedImages = await db.select().from(images).where(eq(images.userId,userId));

    return fetchedImages;

}