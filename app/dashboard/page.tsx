import DashboardPage from '@/components/template/DashboardPage/DashboardPage';
import React from 'react'

const Dashboard = async() => {
    const res = await fetch("https://fake-blog-api.vercel.app/posts", {
        cache: "force-cache",
      });

    const data = await res.json();
  return (
    <>
    <DashboardPage data={data} />
    </>
  )
}

export default Dashboard;