import BlogPage from '@/components/module/BlogPage/BlogPage';
import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react'

type compositionId = {
  params: { compositionId: string };
};

const BlogId: NextPage<compositionId> = async ({ params }) => {

  const res = await import("../../api/post/posts/route");

  const data = await (await res.GET()).json();

  const index = data.data.findIndex((item: any) => item._id === params.compositionId);

  return (
    <Box sx={{ height: "100%" }}>
      {data.data[index] ? (
        <BlogPage data={data.data[index]} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography fontWeight="bold" variant="h5">
            صفحه مورد نظر یافت نشد
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default BlogId;