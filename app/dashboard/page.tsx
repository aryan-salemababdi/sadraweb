import DashboardPage from '@/components/template/DashboardPage/DashboardPage';
import React from 'react'

const Dashboard = async () => {
  const res = await import("../api/post/posts/route");

  const data = await (await res.GET()).json();

  return (
    <>
      <DashboardPage data={data.data} />
    </>
  )
}

export default Dashboard;