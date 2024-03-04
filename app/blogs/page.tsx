import Blogs from '@/components/template/Blogs/Blogs';

const BlogsPage = async () => {
  
  const res = await import("@/app/api/post/posts/route");
  const data = await (await res.GET()).json();

  console.log(data)

  return (
    <>
       <Blogs data ={data.data} />
    </>
  )
}

export default BlogsPage;