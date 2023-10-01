import Blogs from '@/components/template/Blogs/Blogs';
import React from 'react'

const BlogsPage = async () => {
  
  const res = await fetch("https://fake-blog-api.vercel.app/posts", {
    cache: "force-cache",
  });

  const data = await res.json();

  return (
    <>
      <Blogs data ={data} />
    </>
  )
}

export default BlogsPage;