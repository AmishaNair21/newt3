
import { db } from "~/server/db";


export const dynamic ="force-dynamic";

const mockUrls =[
  "https://utfs.io/f/4ad89fbc-8bec-4f7c-8fef-8564ecc761ff-twuc9d.png",
  "https://utfs.io/f/cfd8ff2e-e664-41ee-b92d-7611116b41fe-c7xf8f.png",
 ' https://utfs.io/f/62d70517-39b9-4b64-93d5-4055714067ba-oxilxv.png',
 "https://utfs.io/f/8dbd1401-bf2b-4ecd-a8e8-56f3093e420d-13prjo.png"
]

const mockImages = mockUrls.map((url,index)=>({
  id: index + 1,
  url,
}));


export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);
  
  return (
    <main>
      <div className="flex flex-wrap gap-5">
        {posts.map((post)=>(
          <div key={post.id}>{post.name}</div>
        ))}
        {
          [...mockImages,...mockImages,...mockImages].map((image,index)=>(
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url}/>
            </div>
          ))
        }
      </div>
     
    </main>
  );
} 
