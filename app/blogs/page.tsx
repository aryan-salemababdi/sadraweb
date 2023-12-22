import Blogs from '@/components/template/Blogs/Blogs';
import { cookies } from 'next/headers';

const BlogsPage = async () => {
  
  const res = await import("../api/post/posts/route");

  const data = await (await res.GET()).json();

  return (
    <>
    {
      data ? <Blogs data ={data.data} /> : ""
    }
    </>
  )
}

export default BlogsPage;