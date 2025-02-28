import DashboardPage from '@/components/template/DashboardPage/DashboardPage';
import { cookies } from 'next/headers';
import React from 'react'
import Login from '../login/page';

const Dashboard = async () => {
  const res = await fetch("https://aryan-salemabadi.vercel.app/api/post/posts", {cache: "no-store"})
  const data = await res.json();
  
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