import DashboardPage from '@/components/template/DashboardPage/DashboardPage';
import { cookies } from 'next/headers';
import React from 'react'
import Login from '../login/page';

const Dashboard = async () => {
  var res = await import("../api/post/posts/route");

  var data = await (await res.GET()).json();

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