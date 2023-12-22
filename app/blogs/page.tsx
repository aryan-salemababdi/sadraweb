import Blogs from '@/components/template/Blogs/Blogs';
import Posts from "@/models/Posts";
import React from 'react'

const BlogsPage = async () => {
  
  const data = await Posts.find();


  return (
    <>
      <Blogs data ={data} />
    </>
  )
}

export default BlogsPage;