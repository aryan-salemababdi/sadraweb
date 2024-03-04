import DashboardPage from '@/components/template/DashboardPage/DashboardPage';
import { cookies } from 'next/headers';
import React from 'react'
import Login from '../login/page';

const Dashboard = async () => {
  const res = await import("../api/post/posts/route");

  const data = await (await res.GET()).json();

  console.log(data)

  const cookieStore = cookies()
  const theme = cookieStore.get("sadraweb")
 

  return (
    <>
      {
        theme ? <DashboardPage data={data.data} /> :  <Login />
      }
    </>
  )
}

export default Dashboard;