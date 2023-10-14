import Blogs from '@/components/template/Blogs/Blogs';
import React from 'react'

const BlogsPage = async () => {
  
  const res = await import("@/app/api/post/posts/route");

  const data = await (await res.GET()).json();  


  return (
    <>
      <Blogs data ={data.data} />
    </>
  )
}

export default BlogsPage;