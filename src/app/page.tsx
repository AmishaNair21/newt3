import { images } from "~/server/db/schema";
import { db } from "~/server/db";


export const dynamic ="force-dynamic";



export default async function HomePage() {

  const fetchedImages = await db.select().from(images);
  
  return (
    <main>
      <div className="flex flex-wrap gap-5">
     
        {
          [...fetchedImages,...fetchedImages,...fetchedImages].map((image,index)=>(
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url}/>
            </div>
          ))
        }
      </div>
     
    </main>
  );
} 
