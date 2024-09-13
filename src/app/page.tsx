import { images } from "~/server/db/schema";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";



export const dynamic ="force-dynamic";

   async function Images(){
  const fetchedImages = await db.select().from(images);
  return(
    <div className="flex flex-wrap gap-5">
     
    {
      fetchedImages.map((image)=>(
        <div key={image.id} className="w-48">
          <img src={image.url}/>
        </div>
      ))
    }
  </div>
  )
}


export default async function HomePage() {


  
  return (
    <main>
      
<SignedOut>
<div className="flex flex-col text-center bg-blue-700 mt-14 p-7 text-xl items-center justify-center">
    Please Sign in above to see your gallery
  </div>
</SignedOut>
     <SignedIn>
      
      <Images/>
     </SignedIn>
    </main>
  );
} 
