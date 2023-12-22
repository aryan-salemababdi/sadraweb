import Blogs from '@/components/template/Blogs/Blogs';

const BlogsPage = async () => {
  const res = await import("../api/post/posts/route");
  const data = await (await res.GET()).json();
  return (
    <>
       <Blogs data ={data.data} />
    </>
  )
}

export default BlogsPage;