import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/* <Route path='' Component={<Home/>}/> */}
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
