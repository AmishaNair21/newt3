"use client"
import { SignedOut,SignInButton,SignedIn,UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

 export default function TopNav(){
  
  const router = useRouter();
    return(
      <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
          <div>Gallery</div>
        <div className="flex gap-6 justify-center items-center">
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
        
         <UploadButton  endpoint="imageUploader" onClientUploadComplete={()=>{
            router.refresh();
         }}/>
         <UserButton />
         
          </SignedIn>
        </div>
      </nav>
    )
  }