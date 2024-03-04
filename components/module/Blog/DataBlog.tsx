import React from 'react'
import Blog from './Blog';

const DataBlog = async () => {
  const res = await fetch("https://sadraweb.vercel.app/api/post/posts", {cache: "no-store"})
  const data = await res.json();

  return (
    <>
        <Blog data={data.data} />
    </>
  )
}

export default DataBlog;