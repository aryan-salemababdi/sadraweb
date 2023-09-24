import React from 'react'
import Blog from './Blog';

const DataBlog = async () => {
    const res = await fetch("https://fake-blog-api.vercel.app/posts", {
        cache: "force-cache",
      });

      const data = await res.json();
  return (
    <>
        <Blog data={data} />
    </>
  )
}

export default DataBlog;