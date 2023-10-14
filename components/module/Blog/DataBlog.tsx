import React from 'react'
import Blog from './Blog';

const DataBlog = async () => {
  const res = await import("@/app/api/post/posts/route");

  const data = await (await res.GET()).json();  
  return (
    <>
        <Blog data={data.data} />
    </>
  )
}

export default DataBlog;