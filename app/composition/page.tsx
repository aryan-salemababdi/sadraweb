import Blogs from '@/components/template/Blogs/Blogs';

const BlogsPage = async () => {
  
  const res = await fetch("https://aryan-salemabadi.vercel.app/api/post/posts", {cache: "no-store"})
  const data = await res.json();

  return (
    <>
       <Blogs data ={data.data} />
    </>
  )
}

export default BlogsPage;