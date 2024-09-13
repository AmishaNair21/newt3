
import { getMyImages } from "~/server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";




export const dynamic ="force-dynamic";

   async function Images(){
    const images= await getMyImages();
  return(
    <div className="flex flex-wrap justify-center gap-5">
     
    {
      images.map((image)=>(
        <div key={image.id} className="w-48">
          <Image src={image.url} style={{objectFit:"contain"}}
          width={300}
          height={300} alt={image.name} />
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
