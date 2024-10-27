import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import Home from './screens/Home.jsx'

const router = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        children : [
            {
                path:'/',
                element:<Home/>
            }
        ]

    }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
