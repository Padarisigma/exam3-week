
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Buyacc from './pages/buyacc'
import Howto from './pages/howto'
import Blog from './pages/blog'
import Services from './pages/services'
import Utility from './pages/utility'
import Layout from './layout/layout'
import Home from './pages/home.jsx'

function App() {
  const router=createBrowserRouter([{
    path: '/',
   element: <Layout/>,
   children: [
     {
       index: true,
       element: <Home />
     },
     {
       path: '/buyacc',
       element:<Buyacc/>
     },
     {
       path: '/blog',
       element: <Blog/>
     },
     {
      path: '/blog/:id',
      element: <Howto/>
    },
     {
      path: '/services',
      element: <Services/>
    },
    {
      path: '/utility',
      element: <Utility/>
    },
   ]
}])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
