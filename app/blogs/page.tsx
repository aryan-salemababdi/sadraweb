import Blogs from '@/components/template/Blogs/Blogs';
import { cookies } from 'next/headers';


const BlogsPage = async() => {
  
  const res = await import("../api/post/posts/route");

  const data = await (await res.GET()).json();

  const cookieStore = cookies()
  const theme = cookieStore.get("sadraweb")

  return (
    <>
    {
       theme ? <Blogs data ={data.data} /> : <Blogs data ={data.data} />
    }
    </>
  )
}

export default BlogsPage;