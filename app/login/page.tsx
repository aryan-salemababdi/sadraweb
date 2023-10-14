import LoginPage from '@/components/template/LoginPage/LoginPage';
import { cookies } from 'next/headers';
import Dashboard from '../dashboard/page';

const Login = () => {

  const cookieStore = cookies()
  const theme = cookieStore.get("sadraweb")
  

  return (
    <>
      {
        !theme ? <LoginPage /> : <Dashboard />
      }
    </>
  )
}

export default Login;