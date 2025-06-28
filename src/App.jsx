import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/Route/Route'
import "react-day-picker/style.css";


function App({children}) {

  return (
   <RouterProvider router={router}>
    {children}
   </RouterProvider>
  )
}

export default App
