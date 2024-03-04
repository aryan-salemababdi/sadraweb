import Blogs from '@/components/template/Blogs/Blogs';

const BlogsPage = async () => {
  
  var res = await import("@/app/api/post/posts/route");
  var data = await (await res.GET()).json();
  return (
    <>
       <Blogs data ={data.data} />
    </>
  )
}

export default BlogsPage;