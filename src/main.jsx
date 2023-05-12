import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Jobdetails from './components/Jobdetails/Jobdetails.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Post from './components/Post/Post.jsx';
import Statictis from './components/Statictis/Statictis.jsx';
import Featuredjobs from './components/Featuredjobs/Featuredjobs.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home> ,
        loader:()=> fetch('jobs.json') 
      },
      {
        path:"/job-details",
        element: <Jobdetails></Jobdetails>
      },
      {
        path:"/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/statictis",
        element:<Statictis></Statictis>
      }, 
      {
        path:"/post",
        element: <Post></Post>
      },
      {
        path:"/alljobs",
        element:<Featuredjobs></Featuredjobs>,
        loader:()=> fetch('https://faridrony55.github.io/jobs/jobs.json') 
      } ,
      {
        path: "job/:jobId",
        element:<Jobdetails></Jobdetails>,
        loader: ({params}) => fetch(`${params.jobId}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
//  loader: ({params}) => fetch(`jobs.json/${params.jobId}`)